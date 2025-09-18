import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { deleteMessage } from "@/app/(root)/admin/deleteMessage";

export default async function AdminPage() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    // Check if user is admin
    if (!user || user.id !== process.env.ADMIN_UUID) {
        redirect("/");
    }

    // Get all messages with author info
    const { data: messages } = await supabase
        .from("messages")
        .select("id, author_username, content, likes_count, created_at")
        .order("created_at", { ascending: false });

    return (
        <div className="backdrop flex items-center justify-center h-screen overflow-hidden">
            <div className="bg h-[100vh] w-[450px] flex flex-col items-center justify-center overflow-hidden">
                <div className="h-full w-full overflow-y-auto flex flex-col items-center">
                    <div className="w-6/7 bg-white mt-5 border-1 border-black rounded-xl ds">
                        <div className="w-11/12 mx-auto py-6">
                            <h1 className="text-black font-bold text-xl mb-4">Admin Panel</h1>
                            <p className="text-gray-500 text-sm mb-6">Manage messages</p>

                            <div className="space-y-4">
                                {messages?.map((message) => (
                                    <div key={message.id} className="bg-gray-50 border-1 border-gray-300 rounded-lg p-4">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <p className="text-sm font-semibold text-black">@{message.author_username}</p>
                                                <p className="text-xs text-gray-500">
                                                    {new Date(message.created_at).toLocaleString()}
                                                </p>
                                            </div>
                                            <form action={deleteMessage}>
                                                <input type="hidden" name="messageId" value={message.id} />
                                                <button
                                                    type="submit"
                                                    className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1 rounded border-1 border-red-600"
                                                >
                                                    Delete
                                                </button>
                                            </form>
                                        </div>
                                        <p className="text-sm text-gray-700 mb-2">{message.content}</p>
                                        <p className="text-xs text-gray-500">{message.likes_count} likes</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
