import Link from "next/link";

export default async function OnboardingPage() {
    return (
        <div className="backdrop flex items-center justify-center h-screen overflow-hidden">
            <div className="bg h-[100vh] w-[450px] flex flex-col items-center justify-center overflow-hidden">
                <div className='w-6/7 bg-white mt-5 border-1 border-black rounded-xl text-center ds'>
                    <div>
                        <div className="pt-5 pb-7">
                            <h1 className='text-red-500 font-bold text-xl'>Warning!</h1>
                            <p className='pt-2 text-gray-500 text-xs w-5/6 mx-auto'>You may have attempted to post a message that was NOT appropriate. Please be kind 🐰💙🩷💛💚💜</p>
                            <br />
                            <Link href="/" className='msg-bg py-3 px-4 text-black border-1 border-black font-semibold rounded-4xl ds cursor-pointer no-underline'>
                                Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}