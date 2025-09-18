import React from 'react'
import { createClient } from '@/lib/supabase/server'


const SignOutButton = async () => {
    const supabase = await createClient()
    const handleSignOut = async () => {
        await supabase.auth.signOut()
    }
    return (
        <button onClick={handleSignOut} className='msg-bg py-2 px-3 text-black border-1 border-black text-sm font-semibold rounded-xl ds cursor-pointer no-underline'>
            Log out
        </button>
    )
}

export default SignOutButton