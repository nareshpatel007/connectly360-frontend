import { redirect } from "next/navigation";
import { APP_URL } from "@/lib/config";

export default function LoginPage() {
    redirect(`${APP_URL}/login`);
}
