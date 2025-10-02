import Link from 'next/link';
import React from 'react'

const NotFound = () => {
    return (
        <div className="backdrop flex items-center justify-center h-screen overflow-hidden">
            <div className="bg h-[100vh] w-[450px] flex flex-col items-center justify-center overflow-hidden">
                <div className='w-6/7 bg-white mt-5 border-1 border-black rounded-xl text-center ds'>
                    <div>
                        <h1 className='pt-5 text-black font-bold text-xl'>Error 722 (404)</h1>
                        <p className='pt-2 pb-5 text-gray-500 text-sm w-5/6 mx-auto'> This page could not be found! <br /> 🐰💙🩷💛💚💜</p>
                        <Link href="/" className='msg-bg py-3 px-4 text-black border-1 border-black font-semibold rounded-4xl ds cursor-pointer no-underline'>
                            Home
                        </Link>
                        <p className='pt-5 pb-5 text-gray-500 text-xs w-5/6 mx-auto'>Made with ❤️</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default NotFound;