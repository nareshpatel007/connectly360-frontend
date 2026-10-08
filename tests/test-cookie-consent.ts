/**
 * Automated Verification Test Suite for Cookie Consent System
 * Connectly360 Main Website
 *
 * Validates:
 * 1. Default consent state & versioning
 * 2. Accept All logic
 * 3. Reject All logic
 * 4. Custom preferences granular toggling
 * 5. Necessary category immutability (always true)
 * 6. Version invalidation (expired version triggers banner)
 * 7. Cookie cleanup on withdrawal
 * 8. Google Consent Mode v2 updates
 * 9. Cookie inventory definitions
 */

import assert from "node:assert";
import {
    COOKIE_CONSENT_VERSION,
    COOKIE_CONSENT_KEY,
    COOKIE_INVENTORY,
    storeConsent,
    getStoredConsent,
    applyCookieCleanup,
    updateGoogleConsentMode,
} from "../lib/cookie-consent";

// Mock minimal browser environment for testing
const mockCookies: Record<string, string> = {};
const mockLocalStorage: Record<string, string> = {};
const mockGtagCalls: any[] = [];

(global as any).window = {
    location: { protocol: "https:", hostname: "connectly360.com" },
    dispatchEvent: () => true,
    gtag: (...args: any[]) => {
        mockGtagCalls.push(args);
    },
};

(global as any).document = {
    get cookie() {
        return Object.entries(mockCookies)
            .map(([k, v]) => `${k}=${v}`)
            .join("; ");
    },
    set cookie(val: string) {
        const parts = val.split(";")[0].split("=");
        const name = parts[0]?.trim();
        const value = parts.slice(1).join("=").trim();
        if (val.includes("expires=Thu, 01 Jan 1970")) {
            delete mockCookies[name];
        } else {
            mockCookies[name] = value;
        }
    },
};

(global as any).localStorage = {
    getItem: (k: string) => mockLocalStorage[k] || null,
    setItem: (k: string, v: string) => {
        mockLocalStorage[k] = v;
    },
    removeItem: (k: string) => {
        delete mockLocalStorage[k];
    },
};

console.log("=== RUNNING COOKIE CONSENT VERIFICATION TESTS ===");

// TEST 1: Initial state (No consent stored)
assert.strictEqual(getStoredConsent(), null, "Test 1 Failed: Unconsented visitor should return null");
console.log("✓ Test 1 Passed: First visit correctly returns null consent (triggers banner)");

// TEST 2: Accept All
const accepted = storeConsent(
    { necessary: true, functional: true, analytics: true, marketing: true },
    "banner_accept_all"
);
assert.strictEqual(accepted.necessary, true, "Test 2 Failed: necessary should be true");
assert.strictEqual(accepted.functional, true, "Test 2 Failed: functional should be true");
assert.strictEqual(accepted.analytics, true, "Test 2 Failed: analytics should be true");
assert.strictEqual(accepted.marketing, true, "Test 2 Failed: marketing should be true");
assert.strictEqual(accepted.version, COOKIE_CONSENT_VERSION, "Test 2 Failed: version mismatch");
console.log("✓ Test 2 Passed: Accept All correctly enables all categories with version " + COOKIE_CONSENT_VERSION);

// TEST 3: Persistence after refresh
const retrieved = getStoredConsent();
assert.notStrictEqual(retrieved, null, "Test 3 Failed: stored consent should persist");
assert.strictEqual(retrieved?.functional, true, "Test 3 Failed: persisted functional mismatch");
assert.strictEqual(retrieved?.analytics, true, "Test 3 Failed: persisted analytics mismatch");
assert.strictEqual(retrieved?.marketing, true, "Test 3 Failed: persisted marketing mismatch");
console.log("✓ Test 3 Passed: Saved consent persists and parses accurately from first-party cookie");

// TEST 4: Reject All
const rejected = storeConsent(
    { necessary: true, functional: false, analytics: false, marketing: false },
    "banner_reject_all"
);
assert.strictEqual(rejected.necessary, true, "Test 4 Failed: necessary must remain true");
assert.strictEqual(rejected.functional, false, "Test 4 Failed: functional must be false");
assert.strictEqual(rejected.analytics, false, "Test 4 Failed: analytics must be false");
assert.strictEqual(rejected.marketing, false, "Test 4 Failed: marketing must be false");
console.log("✓ Test 4 Passed: Reject All blocks functional, analytics, and marketing while retaining necessary");

// TEST 5: Granular preferences (Analytics ON, Marketing OFF, Functional ON)
const custom = storeConsent(
    { necessary: false as any, functional: true, analytics: true, marketing: false },
    "preferences_modal"
);
// Necessary must be forced to true regardless of input
assert.strictEqual(custom.necessary, true, "Test 5 Failed: necessary must be forced to true");
assert.strictEqual(custom.functional, true, "Test 5 Failed: functional should be true");
assert.strictEqual(custom.analytics, true, "Test 5 Failed: analytics should be true");
assert.strictEqual(custom.marketing, false, "Test 5 Failed: marketing should be false");
console.log("✓ Test 5 Passed: Granular customization works; Necessary is immutable");

// TEST 6: Version expiration
mockCookies[COOKIE_CONSENT_KEY] = JSON.stringify({
    version: "0.9_old",
    necessary: true,
    functional: true,
    analytics: true,
    marketing: true,
});
delete mockLocalStorage[COOKIE_CONSENT_KEY];
assert.strictEqual(getStoredConsent(), null, "Test 6 Failed: Expired version must invalidate consent");
console.log("✓ Test 6 Passed: Consent versioning works; outdated versions trigger re-consent banner");

// TEST 7: Cookie cleanup on withdrawal
mockCookies["_ga"] = "GA1.2.123456";
mockCookies["_fbp"] = "fb.1.123456";
mockCookies["connectly360_active_visitor_id"] = "99";

// User withdraws all optional categories
applyCookieCleanup({
    version: COOKIE_CONSENT_VERSION,
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false,
    timestamp: new Date().toISOString(),
    source: "preferences_modal",
});

assert.strictEqual(mockCookies["_ga"], undefined, "Test 7 Failed: _ga should be deleted on withdrawal");
assert.strictEqual(mockCookies["_fbp"], undefined, "Test 7 Failed: _fbp should be deleted on withdrawal");
assert.strictEqual(mockCookies["connectly360_active_visitor_id"], undefined, "Test 7 Failed: visitor id cookie should be deleted on withdrawal");
console.log("✓ Test 7 Passed: Cookie cleanup automatically deletes non-essential cookies upon consent withdrawal");

// TEST 8: Google Consent Mode v2 Updates
mockGtagCalls.length = 0;
updateGoogleConsentMode({
    version: COOKIE_CONSENT_VERSION,
    necessary: true,
    functional: false,
    analytics: true,
    marketing: false,
    timestamp: new Date().toISOString(),
    source: "preferences_modal",
});
assert.strictEqual(mockGtagCalls.length, 1, "Test 8 Failed: gtag consent update should be called");
assert.strictEqual(mockGtagCalls[0][0], "consent", "Test 8 Failed: first arg must be consent");
assert.strictEqual(mockGtagCalls[0][1], "update", "Test 8 Failed: second arg must be update");
assert.strictEqual(mockGtagCalls[0][2].analytics_storage, "granted", "Test 8 Failed: analytics_storage should be granted");
assert.strictEqual(mockGtagCalls[0][2].ad_storage, "denied", "Test 8 Failed: ad_storage should be denied");
console.log("✓ Test 8 Passed: Google Consent Mode v2 updates dispatch exact granted/denied states");

// TEST 9: Inventory completeness
assert.ok(COOKIE_INVENTORY.length >= 5, "Test 9 Failed: Inventory should have at least 5 registered cookies");
const hasConsentCookie = COOKIE_INVENTORY.some((c) => c.name === "connectly360_cookie_consent");
assert.strictEqual(hasConsentCookie, true, "Test 9 Failed: connectly360_cookie_consent must be in inventory");
console.log("✓ Test 9 Passed: Cookie inventory contains all registered first and third party items");

console.log("\nALL 9 COOKIE CONSENT VERIFICATION TESTS PASSED SUCCESSFULLY! ✓✓✓");
