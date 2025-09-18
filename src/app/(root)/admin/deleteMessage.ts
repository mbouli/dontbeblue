"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function deleteMessage(formData: FormData) {
    const messageId = String(formData.get("messageId") ?? "").trim();

    if (!messageId) {
        redirect("/admin?error=no_message_id");
    }

    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    // Check if user is admin
    if (!user || user.id !== process.env.ADMIN_UUID) {
        redirect("/");
    }

    const { error } = await supabase
        .from("messages")
        .delete()
        .eq("id", messageId);

    if (error) {
        redirect(`/admin?error=${encodeURIComponent(error.message)}`);
    }

    revalidatePath("/admin");
    redirect("/admin");
}
