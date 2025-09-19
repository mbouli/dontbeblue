import MessageCard from '../Messages/MessageCard'
import { createClient } from '@/lib/supabase/server'
import MessageHeader from '../Messages/MessageHeader'
import PinnedMessage from '../Messages/PinnedMessage'

const Messages = async () => {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const { data: messages } = await supabase
    .from('messages')
    .select('id, author_username, content, likes_count, created_at')
    .order('created_at', { ascending: false })
    .limit(50)
  let likedIds = new Set<string>()
  if (user && messages && messages.length) {
    const { data: liked } = await supabase
      .from('message_likes')
      .select('message_id')
      .eq('user_id', user.id)
      .in('message_id', messages.map(m => m.id))
    liked?.forEach((r) => likedIds.add(r.message_id))
  }
  const { count: totalMessages } = await supabase
    .from('messages')
    .select('id', { count: 'exact', head: true })

  return (
    <>
      <MessageHeader user={user} totalMessages={totalMessages} />
      <PinnedMessage
        username='sun4nce'
        postDate='2025.09.19 07:22:00'
        messageContent='Hi everyone! Welcome to dontbeblue.club. This is the first message! Make sure to follow the rules laid out in the terms! NEWJEANS NEVER DIE'
      />
      {messages?.map((m) => {
        const iso = new Date(m.created_at).toISOString().slice(0, 19).replace('T', ' ')
        const postDate = iso.slice(0, 10).replace(/-/g, '.') + iso.slice(10)
        return (
          <MessageCard
            key={m.id}
            id={m.id}
            username={m.author_username}
            postDate={postDate}
            messageContent={m.content}
            numLikes={m.likes_count}
            initiallyLiked={likedIds.has(m.id)}
          />
        )
      })}
    </>
  )
}

export default Messages