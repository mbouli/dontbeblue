import React from 'react'
import AuthButton from '../Auth/AuthButton';

const Hero = () => {
    return (
        <div className='w-6/7 bg-white mt-5 border-1 border-black rounded-xl ds'>
            <div>
                <h1 className='text-center pt-5 text-black font-bold text-2xl'>Welcome to dontbeblue.club!</h1>
                <p className='pt-2 text-gray-500 text-xs w-5/6 mx-auto'> This is a passion project I made out of my love and
                    gratitude for MHDHH and Tokkis. Thank you 🐰💙</p>
                <p className='pt-2 text-gray-500 text-xs w-5/6 mx-auto'> This is a board for tokkis to leave encouraging
                    messages to the girls! Please make sure to follow
                    the <a href="/rules">rules</a> when posting. </p>
                <p className='pt-2 pb-4 text-gray-500 text-xs w-5/6 mx-auto'>Made with 💙 by <a href="https://x.com/sun4nce">@sun4nce</a></p>
            </div>
        </div>
    )
}

export default Hero;