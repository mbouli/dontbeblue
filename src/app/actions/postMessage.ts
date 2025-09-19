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

    const content = sanitizeContent(rawContent);

    const filterResult = filterContent(content);
    if (!filterResult.isClean) {
        redirect(`/tos`);
    }

    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        redirect("/");
    }

    const { data: account } = await supabase
        .from("accounts")
        .select("username")
        .eq("id", user.id)
        .single();

    if (!account) {
        redirect("/auth/onboarding");
    }

    // Check if user has posted in the last hour
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
    const { data: recentPosts } = await supabase
        .from("messages")
        .select("created_at")
        .eq("author_id", user.id)
        .gte("created_at", oneHourAgo)
        .order("created_at", { ascending: false })
        .limit(1);

    if (recentPosts && recentPosts.length > 0) {
        const lastPostTime = new Date(recentPosts[0].created_at);
        const timeUntilNextPost = Math.ceil((lastPostTime.getTime() + 60 * 60 * 1000 - Date.now()) / (1000 * 60));
        redirect(`/?error=${encodeURIComponent(`Please wait ${timeUntilNextPost} minutes before posting again`)}`);
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
}
