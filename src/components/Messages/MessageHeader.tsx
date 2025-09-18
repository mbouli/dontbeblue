'use client';
import { User } from '@supabase/supabase-js'
import { useState } from 'react'

import AuthButton from '../Auth/AuthButton'
import SignOutButton from '../Auth/SignOutButton'

const PostForm = ({ user, totalMessages }: { user: User | null; totalMessages: number | null }) => {
  const [postModal, setPostModal] = useState(false);
  return (
    <>
      <div className='w-6/7 flex justify-between items-center pt-4'>
        <h1 className='text-black font-bold text-2xl'>Messages ({totalMessages ?? 0})</h1>
        {user ? (
          <div className='justify-center flex gap-2'>
            <SignOutButton />
            <button onClick={() => setPostModal(!postModal)} className='msg-bg py-2 px-3 text-black border-1 border-black text-sm font-semibold rounded-xl ds cursor-pointer no-underline'>
              {!postModal ? 'Post' : 'Close'}
            </button>
          </div>
        ) : (
          <AuthButton />
        )}
      </div>
      {postModal && (
        <div className='w-6/7 msgc-bg mt-5 border-1 border-black rounded-xl ds text-black text-center'>
          <div className='mt-5 mb-5 flex items-center gap-3 px-4'>
            <textarea className='bg-white w-full text-left text-gray-500 border-1 border-black rounded-sm px-4 py-3 text-sm resize-none' rows={2} maxLength={200} placeholder='Compose your message..' />
            <button type="submit" className='msgb-bg w-10 h-10 text-black border-1 border-black rounded-full ds cursor-pointer no-underline flex items-center justify-center flex-shrink-0'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default PostForm