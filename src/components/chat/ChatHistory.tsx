import type { Conversation } from '../../types/chat'

type ChatHistoryProps = {
  conversations: Conversation[]
}

function ChatHistory({ conversations }: ChatHistoryProps) {
  return (
    <aside className="hidden w-64 shrink-0 border-r border-slate-200 bg-white lg:block">
      <div className="border-b border-slate-200 px-5 py-4">
        <h2 className="text-sm font-semibold text-slate-800">
          Histórico de conversas
        </h2>
      </div>
        
      <div className="space-y-2 p-3">
        {conversations.map((conversation) => (
          <button
            key={conversation.id}
            type="button"
            className="w-full rounded-lg px-3 py-2 text-left text-sm text-slate-600 transition hover:bg-slate-50 hover:text-blue-700"
          >
            {conversation.title}
          </button>
        ))}
      </div>
    </aside>
  )
}

export default ChatHistory