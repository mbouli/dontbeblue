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
            <button onClick={toggleLike} disabled={isPending} className={'text-sm py-1 px-1 rounded-xl text-black bg-white '} aria-pressed={liked}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill={liked ? "#fc8181" : "none"} stroke={liked ? "black" : "currentColor"} strokeWidth={liked ? "1" : "1.5"} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
            </button>
            <p className='text-black text-xs'>{likes} {(likes != 1 ? 'likes' : 'like')}</p>
        </div>
    )
}

export default LikeControl


