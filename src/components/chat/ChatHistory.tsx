import type { Conversation } from '../../types/chat'
import { Trash2 } from 'lucide-react'

type ChatHistoryProps = {
    conversations: Conversation[]
    onClearHistory: () => void
}   

function ChatHistory({
    conversations,
    onClearHistory,
}: ChatHistoryProps) {
  return (
    <aside className="flex h-full flex-col hidden w-64 shrink-0 border-r border-slate-200 bg-white lg:block">
      <div className="border-b border-slate-200 px-5 py-4">
        <h2 className="text-sm font-semibold text-slate-800">
          Histórico de conversas
        </h2>
      </div>
        
      <div className="flex-1 overflow-y-auto space-y-2 p-3">
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
        <button
            type="button"
            onClick={onClearHistory}
            disabled={conversations.every(
                (conversation) => conversation.messages.length === 0
            )}
            className="mt-auto flex w-full items-center gap-3 border-t border-slate-200 px-5 py-4 text-sm font-medium text-slate-500 transition hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-50"
        >
            <Trash2
                className="h-5 w-5"
                strokeWidth={1.8}
            />

            <span>
                Limpar histórico
            </span>
        </button>
    </aside>
  )
}

export default ChatHistory