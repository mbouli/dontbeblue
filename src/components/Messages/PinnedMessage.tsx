const PinnedMessage = ({ username, postDate, messageContent }: { username: string; postDate: string; messageContent: string; }) => {
    return (
        <div className='w-6/7 msg-bg mt-5 border-1 border-black rounded-xl'>
            <div className='flex justify-between items-center pt-3 w-11/12 mx-auto'>
                <h1 className='text-center text-black font-semibold text-sm'><span className="text-red-400">[ANNOUNCEMENT] </span>@{username}</h1>
                <p className='text-center text-gray-400 text-xs'>{postDate}</p>
            </div>
            <div className='w-11/12 mx-auto text-left pt-2 pb-3'>
                <p className=' text-black text-sm'>{messageContent}</p>
            </div>
        </div>
    )
}

export default PinnedMessage