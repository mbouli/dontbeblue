import React from 'react'

const MessageCard = ({ username, postDate, messageContent, numLikes }: { username: string; postDate: string; messageContent: string; numLikes: number }) => {
    return (
        <div className='w-6/7 msg-bg mt-5 border-1 border-black rounded-xl'>
            <div className='flex justify-between items-center pt-3 w-11/12 mx-auto'>
                <h1 className='text-center text-black font-semibold text-sm'>@{username}</h1>
                <p className='text-center text-gray-400 text-xs'>{postDate}</p>
            </div>
            <div className='w-11/12 mx-auto text-left pt-2'>
                <p className=' text-black text-sm'>{messageContent}</p>
            </div>
            <div className='pt-2 pb-3 w-11/12 mx-auto flex items-center gap-2'>
                <p className='bg-white rounded-xl px-2 py-1'>👍</p>
                <p className='text-black text-xs'>{numLikes} likes</p>
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