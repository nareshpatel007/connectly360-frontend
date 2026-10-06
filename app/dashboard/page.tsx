import { redirect } from "next/navigation";
import { APP_URL } from "@/lib/config";

export default function DashboardPage() {
    redirect(`${APP_URL}/dashboard`);
}
