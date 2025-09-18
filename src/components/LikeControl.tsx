"use client"
import React, { useState, useTransition } from 'react'
import { createClient } from '@/lib/supabase/client'

type Props = {
    messageId: string
    initialLikes: number
    initiallyLiked: boolean
}

const LikeControl: React.FC<Props> = ({ messageId, initialLikes, initiallyLiked }) => {
    const supabase = createClient()
    const [likes, setLikes] = useState<number>(initialLikes)
    const [liked, setLiked] = useState<boolean>(initiallyLiked)
    const [isPending, startTransition] = useTransition()

    const toggleLike = async () => {
        startTransition(async () => {
            if (!liked) {
                const { error } = await supabase.from('message_likes').insert({ message_id: messageId })
                if (!error) {
                    setLiked(true)
                    setLikes((n) => n + 1)
                }
            } else {
                const { error } = await supabase.from('message_likes').delete().eq('message_id', messageId)
                if (!error) {
                    setLiked(false)
                    setLikes((n) => Math.max(0, n - 1))
                }
            }
        })
    }

    return (
        <div className='pt-2 pb-3 w-11/12 mx-auto flex items-center gap-2'>
            <button onClick={toggleLike} disabled={isPending} className={'text-sm rounded-xl px-1 py-1 text-black ' + (liked ? 'bg-red-200' : 'bg-white')} aria-pressed={liked}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-thumbs-up-icon lucide-thumbs-up"><path d="M7 10v12" /><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" /></svg>
            </button>
            <p className='text-black text-xs'>{likes} {(likes != 1 ? 'likes' : 'like')}</p>
        </div>
    )
}

export default LikeControl


