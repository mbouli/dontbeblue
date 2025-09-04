import React from 'react'
import MessageCard from './MessageCard'

const Messages = () => {
  return (
    <>
      <div className='w-6/7 flex justify-between items-center pt-4'>
        <h1 className='text-black font-bold text-2xl'>Messages (5782)</h1>
        <p className='bg-white rounded-xl px-2 py-1'>🎲</p>
      </div>
      <MessageCard />
      <MessageCard />
      <MessageCard />
      <MessageCard />
      <MessageCard />
      <MessageCard />
      <MessageCard />
      <MessageCard />
      <MessageCard />
    </>
  )
}

export default Messages