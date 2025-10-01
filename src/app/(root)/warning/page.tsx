import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function OnboardingPage() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        redirect("/");
    }

    const email = user.email ?? "";

    return (
        <div className="backdrop flex items-center justify-center h-screen overflow-hidden">
            <div className="bg h-[100vh] w-[450px] flex flex-col items-center justify-center overflow-hidden">
                <div className='w-6/7 bg-white mt-5 border-1 border-black rounded-xl text-center ds'>
                    <div>
                        <div className="pt-5 pb-7">
                            <h1 className='text-red-500 font-bold text-xl'>Warning!</h1>
                            <p className='pt-2 text-gray-500 text-xs w-5/6 mx-auto'>You may have attempted to post a message that was NOT appropriate. Please be kind 🐰💙🩷💛💚💜</p>
                            <br />
                            <a href="/" className='msg-bg py-3 px-4 text-black border-1 border-black font-semibold rounded-4xl ds cursor-pointer no-underline'>
                                Home
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}