import React from 'react'
import MessageCard from './MessageCard'
import AuthButton from './AuthButton'
import { createClient } from '@/lib/supabase/server'

const Messages = async () => {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const { data: messages } = await supabase
    .from('messages')
    .select('id, author_username, content, likes_count, created_at')
    .order('created_at', { ascending: false })
    .limit(50)
  const { count: totalMessages } = await supabase
    .from('messages')
    .select('id', { count: 'exact', head: true })
  return (
    <>
      <div className='w-6/7 flex justify-between items-center pt-4'>
        <h1 className='text-black font-bold text-2xl'>Messages ({totalMessages ?? 0})</h1>
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
      {messages?.map((m) => {
        const iso = new Date(m.created_at).toISOString().slice(0, 19).replace('T', ' ')
        const postDate = iso.slice(0, 10).replace(/-/g, '.') + iso.slice(10)
        return (
          <MessageCard
            key={m.id}
            username={m.author_username}
            postDate={postDate}
            messageContent={m.content}
            numLikes={m.likes_count}
          />
        )
      })}
    </>
  )
}

export default Messages