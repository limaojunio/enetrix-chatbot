import ChatSuggestions from './ChatSuggestions'
import { Bot } from 'lucide-react'

type ChatEmptyStateProps = {
  onSuggestionClick: (suggestion: string) => void
}

function ChatEmptyState({
  onSuggestionClick,
}: ChatEmptyStateProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 pb-24 pt-8 sm:pb-28">
      <div className="flex w-full max-w-2xl flex-col items-center text-center">

        <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-blue-600">
        <Bot
            className="h-10 w-10"
            strokeWidth={1.7}
            aria-hidden="true"
        />
        </div>

        {/* Saudação */}
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Olá! Como posso ajudar você?
        </h2>

        {/* Texto auxiliar */}
        <p className="mt-3 max-w-lg text-sm leading-6 text-slate-500 sm:text-base">
          Escolha uma das sugestões abaixo ou envie sua própria pergunta
          para começar o atendimento.
        </p>

        {/* Sugestões */}
        <div className="mt-8 w-full">
          <ChatSuggestions
            onSuggestionClick={onSuggestionClick}
          />
        </div>

      </div>
    </div>
  )
}

export default ChatEmptyState