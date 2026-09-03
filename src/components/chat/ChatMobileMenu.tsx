import { Link } from 'react-router-dom'
import type { Conversation } from '../../types/chat'

type ChatMobileMenuProps = {
  isOpen: boolean
  onClose: () => void
  conversations: Conversation[]
}

function ChatMobileMenu({
  isOpen,
  onClose,
  conversations,
}: ChatMobileMenuProps) {
  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Fundo escurecido */}
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/40"
        aria-label="Fechar menu"
      />

      {/* Drawer */}
      <aside className="relative h-full w-2/3 max-w-xs bg-white shadow-xl">
        <div className="flex h-16 items-center justify-between border-b border-slate-200 px-4">
          <span className="text-lg font-bold text-slate-900">
            ENETRIX
          </span>

          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-xl text-slate-600 transition hover:bg-slate-100"
            aria-label="Fechar menu"
          >
            ×
          </button>
        </div>

        <nav className="p-4">
          <Link
            to="/"
            onClick={onClose}
            className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
          >
            Home
          </Link>

          <div className="mt-6">
            <h2 className="px-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
              Histórico
            </h2>
            <div className="mt-2 space-y-1">
                {conversations.map((conversation) => (
                    <button
                    key={conversation.id}
                    type="button"
                    onClick={onClose}
                    className="w-full rounded-lg px-4 py-3 text-left text-sm text-slate-600 transition hover:bg-slate-100"
                    >
                    {conversation.title}
                    </button>
                ))}
            </div>
          </div>
        </nav>
      </aside>
    </div>
  )
}

export default ChatMobileMenu