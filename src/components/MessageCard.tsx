import React from 'react'

const MessageCard = () => {
    return (
        <div className='w-6/7 msg-bg mt-5 border-1 border-black rounded-xl'>
            <div className='flex justify-between items-center pt-2 w-11/12 mx-auto'>
                <h1 className='text-center text-black font-semibold text-sm'>@sun4nce</h1>
                <p className='text-center text-gray-400 text-xs'>2025.09.05 18:29:01</p>
            </div>
            <div className='w-11/12 mx-auto text-left pt-2'>
                <p className=' text-black text-sm'>hi minji hanni dani haerin hyein!!! i hope you guys know
                    how much bunnies love u and we will always wait for you!! i can’t wait for you to comeback stronger than ever! bunnies miss
                    you lots and lots!! and we cannot wait for you to be back.</p>
            </div>
            <div className='pt-2 pb-3 w-11/12 mx-auto flex items-center gap-2'>
                <p className='bg-white rounded-xl px-2 py-1'>👍</p>
                <p className='text-black text-xs'>722 likes</p>
            </div>
            {/* <p className='pt-2 text-gray-500 text-xs w-5/6 mx-auto'> This is a passion project I made out of my love and
                gratitude for MHDHH and Tokkis. Thank you 🐰💙</p>
            <p className='pt-2 text-gray-500 text-xs w-5/6 mx-auto'> This is a board for tokkis to leave encouraging
                messages to the girls! Please make sure to follow
                the rules when posting. </p>
            <p className='pt-2 text-gray-500 text-xs w-5/6 mx-auto'>This project is open sourced!</p> */}
        </div>
    )
}

export default MessageCard