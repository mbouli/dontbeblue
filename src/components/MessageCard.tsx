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
                <p className='bg-white text-sm rounded-xl px-1 py-1 text-black'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-thumbs-up-icon lucide-thumbs-up"><path d="M7 10v12" /><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" /></svg>
                </p>
                <p className='text-black text-xs'>{numLikes} likes</p>
            </div>
        </div>
    )
}

export default MessageCard