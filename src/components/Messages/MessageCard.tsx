import React from 'react'
import LikeControl from './LikeControl'

const MessageCard = ({ id, username, postDate, messageContent, numLikes, initiallyLiked }: { id: string; username: string; postDate: string; messageContent: string; numLikes: number; initiallyLiked: boolean }) => {
    return (
        <div className='w-6/7 msg-bg mt-5 border-1 border-black rounded-xl'>
            <div className='flex justify-between items-center pt-3 w-11/12 mx-auto'>
                <h1 className='text-center text-black font-semibold text-sm'>@{username}</h1>
                <p className='text-center text-gray-400 text-xs'>{postDate}</p>
            </div>
            <div className='w-11/12 mx-auto text-left pt-2'>
                <p className=' text-black text-sm'>{messageContent}</p>
            </div>
            <LikeControl messageId={id} initialLikes={numLikes} initiallyLiked={initiallyLiked} />
        </div>
    )
}

export default MessageCard