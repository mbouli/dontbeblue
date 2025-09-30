'use client';
import { User } from '@supabase/supabase-js'
import { useState, useTransition, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'

import AuthButton from '../Auth/AuthButton'
import SignOutButton from '../Auth/SignOutButton'
import { postMessage } from '@/app/actions/postMessage'

const PostForm = ({ user, totalMessages }: { user: User | null; totalMessages: number | null }) => {
  const [postModal, setPostModal] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [canPost, setCanPost] = useState(true);
  const [timeUntilNextPost, setTimeUntilNextPost] = useState(0);

  useEffect(() => {
    if (!user) return;

    const checkPostCooldown = async () => {
      const supabase = createClient();
      const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();

      const { data: recentPosts } = await supabase
        .from("messages")
        .select("created_at")
        .eq("author_id", user.id)
        .gte("created_at", oneHourAgo)
        .order("created_at", { ascending: false })
        .limit(1);

      if (recentPosts && recentPosts.length > 0) {
        const lastPostTime = new Date(recentPosts[0].created_at);
        const timeUntilNext = Math.ceil((lastPostTime.getTime() + 60 * 60 * 1000 - Date.now()) / (1000 * 60));
        setTimeUntilNextPost(timeUntilNext);
        setCanPost(false);
      } else {
        setCanPost(true);
      }
    };

    checkPostCooldown();
    const interval = setInterval(checkPostCooldown, 60000);
    return () => clearInterval(interval);
  }, [user]);

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      await postMessage(formData);
      setPostModal(false);
    });
  };

  return (
    <>
      <div className='w-6/7 flex justify-between items-center pt-4'>
        <h1 className='text-black font-bold text-2xl'>Messages ({totalMessages ?? 0})</h1>
        {user ? (
          <div className='justify-center flex gap-2'>
            <SignOutButton />
            {canPost ? (
              <button onClick={() => setPostModal(!postModal)} className='msg-bg py-2 px-3 text-black border-1 border-black text-sm font-semibold rounded-xl ds cursor-pointer no-underline'>
                {!postModal ? 'Post' : 'Close'}
              </button>
            ) : (
              <button disabled className='msgb-bg py-2 px-3 text-gray-500 border-1 border-black text-sm font-semibold rounded-xl ds cursor-not-allowed no-underline'>
                Wait {timeUntilNextPost}m
              </button>
            )}
          </div>
        ) : (
          <AuthButton />
        )}
      </div>
      {postModal && (
        <div className='w-6/7 msgc-bg mt-5 border-1 border-black rounded-xl ds text-black text-center'>
          <form action={handleSubmit}>
            <div className='mt-5 mb-5 flex items-center gap-3 px-4'>
              <textarea
                name="content"
                className='bg-white w-full text-left text-gray-500 border-1 border-black rounded-sm px-4 py-3 text-sm resize-none'
                rows={2}
                maxLength={200}
                placeholder='Compose your message..'
                required
                disabled={isPending}
              />
              <button
                type="submit"
                disabled={isPending}
                className='msgb-bg w-10 h-10 text-black border-1 border-black rounded-full ds cursor-pointer no-underline flex items-center justify-center flex-shrink-0 disabled:opacity-50'
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}

export default PostForm