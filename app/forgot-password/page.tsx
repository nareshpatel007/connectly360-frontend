import { redirect } from "next/navigation";
import { APP_URL } from "@/lib/config";

export default function ForgotPasswordPage() {
    redirect(`${APP_URL}/forgot-password`);
}
