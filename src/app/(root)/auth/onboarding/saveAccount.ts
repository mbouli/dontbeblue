"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function saveAccount(formData: FormData) {
    const email = String(formData.get("email") ?? "").trim();
    const username = String(formData.get("username") ?? "").trim();

    if (!email || !username) {
        redirect("/auth/onboarding?error=missing_fields");
    }

    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
        redirect("/");
    }

    const { error } = await supabase.from("accounts").upsert({
        id: user.id,
        email,
        username,
    }, { onConflict: "id" });

    if (error) {
        redirect(`/auth/onboarding?error=${encodeURIComponent(error.message)}`);
    }

    revalidatePath("/");
    redirect("/");
}


