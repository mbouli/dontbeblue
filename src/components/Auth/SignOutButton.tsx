'use client'
import React from 'react'
import { createClient } from '@/lib/supabase/client'


const SignOutButton = () => {
    const supabase = createClient()
    const handleSignOut = async () => {
        await supabase.auth.signOut()
        window.location.reload()
    }
    return (
        <button onClick={handleSignOut} className='msg-bg py-2 px-3 text-black border-1 border-black text-sm font-semibold rounded-xl ds cursor-pointer no-underline'>
            Log out
        </button>
    )
}

export default SignOutButton