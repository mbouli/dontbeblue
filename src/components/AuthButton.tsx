"use client"
import React from 'react'
import { createClient } from '@/lib/supabase/client'

const AuthButton = () => {
    const supabase = createClient()

    const handleLogin = async () => {
        await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `${window.location.origin}/auth/callback`
            }
        })
    }

    return (
        <button onClick={handleLogin} className='msg-bg py-2 px-3 text-black border-1 border-black text-sm font-semibold rounded-xl ds cursor-pointer no-underline'>
            Log in
        </button>
    )
}

export default AuthButton