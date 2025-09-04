export default function Landing() {
    return (
        <div className="backdrop flex items-center justify-center h-screen overflow-hidden">
            <div className="bg h-[100vh] w-[450px] flex flex-col items-center justify-center overflow-hidden">
                <div className='w-6/7 bg-white mt-5 border-1 border-black rounded-xl'>
                    <div>
                        <h1 className='text-center pt-5 text-black font-bold text-2xl'>dontbeblue.club coming soon!</h1>
                        <p className='pt-2 text-gray-500 text-xs w-5/6 mx-auto'> This is a passion project I made out of my love and
                            gratitude for MHDHH and Tokkis. Thank you 🐰💙</p>
                        <p className='pt-2 text-gray-500 text-xs w-5/6 mx-auto'> DBB will be a board for tokkis to leave encouraging
                            messages to the girls!
                        </p>
                        <p className='pt-2 pb-5 text-gray-500 text-xs w-5/6 mx-auto'>Made with 💙 by <a href="https://x.com/sun4nce">@sun4nce</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}