import { redirect } from "next/navigation";
import { APP_URL } from "@/lib/config";

export default function RegisterPage() {
    redirect(`${APP_URL}/register`);
}
