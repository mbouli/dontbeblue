import React from 'react'
import MessageCard from './MessageCard'
import AuthButton from './AuthButton'
import { createClient } from '@/lib/supabase/server'

const Messages = async () => {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  return (
    <>
      <div className='w-6/7 flex justify-between items-center pt-4'>
        <h1 className='text-black font-bold text-2xl'>Messages (5782)</h1>
        {user ? (
          <div className='justify-center flex gap-2'>
            <a href="/auth/onboarding" className='msg-bg py-2 px-3 text-black border-1 border-black text-sm font-semibold rounded-xl ds cursor-pointer no-underline'>
              Settings
            </a>
            <a href="/auth/onboarding" className='msg-bg py-2 px-3 text-black border-1 border-black text-sm font-semibold rounded-xl ds cursor-pointer no-underline'>
              Post
            </a>
          </div>
        ) : (
          <AuthButton />
        )}
      </div>
      <MessageCard
        username='sun4nce'
        postDate='2025.09.05 00:07:22'
        messageContent='hi minji hanni dani haerin hyein!!! i hope you guys know
                    how much bunnies love u and we will always wait for you!! i can’t wait for you to comeback stronger than ever! bunnies miss
                    you lots and lots!! and we cannot wait for you to be back.'
        numLikes={722}
      />
      <MessageCard
        username='lovejeans'
        postDate='2025.09.04 07:22:22'
        messageContent='¡hola newjeans! ¡se extraño a ustedes mucho! i cannot wait for your comeback <3'
        numLikes={227}
      />
      <MessageCard
        username='NWJNS_LOVE'
        postDate='2025.09.03 22:07:22'
        messageContent='STAN NEWJEANS!'
        numLikes={22722}
      />
      <MessageCard
        username='sun4nce'
        postDate='2025.09.03 00:07:22'
        messageContent='hi minji hanni dani haerin hyein!!! i hope you guys know
                    how much bunnies love u and we will always wait for you!! i can’t wait for you to comeback stronger than ever! bunnies miss
                    you lots and lots!! and we cannot wait for you to be back.'
        numLikes={722}
      />
      <MessageCard
        username='lovejeans'
        postDate='2025.09.02 07:22:22'
        messageContent='¡hola newjeans! ¡se extraño a ustedes mucho! i cannot wait for your comeback <3'
        numLikes={227}
      />
      <MessageCard
        username='NWJNS_LOVE'
        postDate='2025.09.01 22:07:22'
        messageContent='STAN NEWJEANS!'
        numLikes={22722}
      />
    </>
  )
}

export default Messages