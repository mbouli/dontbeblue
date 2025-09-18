import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { saveAccount } from "./saveAccount";

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
                        <form action={saveAccount}>
                            <div className="pt-5">
                                <h1 className='text-black font-bold text-xl'>Finish sign up</h1>
                                <label className='text-black font-bold text-sm pt-15m block' htmlFor='email'>
                                    email
                                </label>
                                <input
                                    id='email'
                                    name="email"
                                    defaultValue={email}
                                    readOnly
                                    className='text-black border-1 border-black rounded-xl px-2 py-1 mt-2 text-center'
                                />
                            </div>
                            <div className="pt-5 pb-6">
                                <label className="text-black font-bold text-sm pt-15" htmlFor="dn">display name</label>
                                <br />
                                <input className="mt-2 text-center text-gray-500 border-1 border-black rounded-xl px-2 py-1" type="text" id="dn" name="username" placeholder="enter name.." />

                            </div>
                            <div className="pb-3">
                                <button type="submit" className='msg-bg py-3 px-4 text-black border-1 border-black font-semibold rounded-4xl ds cursor-pointer no-underline'>
                                    Create account
                                </button>
                                <p className='pt-5 text-gray-500 text-xs w-5/6 mx-auto'>When you create an account, you agree to our <a href="/tos">terms</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
}