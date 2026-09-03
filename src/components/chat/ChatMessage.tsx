type ChatMessageProps = {
  sender: 'user' | 'bot'
  message: string
}

function ChatMessage({ sender, message }: ChatMessageProps) {
  const isUser = sender === 'user'

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[90%] rounded-2xl px-4 py-3 text-sm sm:max-w-[75%] ${
          isUser
            ? 'rounded-br-md bg-blue-700 text-white'
            : 'rounded-bl-md bg-slate-100 text-slate-700'
        }`}
      >
        {message}
      </div>
    </div>
  )
}

export default ChatMessage