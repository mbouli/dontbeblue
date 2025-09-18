"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { filterContent, sanitizeContent } from "@/lib/filterContent";

export async function postMessage(formData: FormData) {
    const rawContent = String(formData.get("content") ?? "").trim();

    if (!rawContent) {
        redirect("/");
    }

    // Sanitize content
    const content = sanitizeContent(rawContent);

    // Filter content for inappropriate language
    const filterResult = filterContent(content);
    if (!filterResult.isClean) {
        redirect(`/tos`);
    }

    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        redirect("/");
    }

    // Get user's account info for author_username
    const { data: account } = await supabase
        .from("accounts")
        .select("username")
        .eq("id", user.id)
        .single();

    if (!account) {
        redirect("/auth/onboarding");
    }

    const { error } = await supabase.from("messages").insert({
        author_id: user.id,
        author_username: account.username,
        content,
    });

    if (error) {
        redirect(`/?error=${encodeURIComponent(error.message)}`);
    }

    revalidatePath("/");
    // Don't redirect - just revalidate to refresh data
}
