function ChatHistory() {
  const conversations = [
    'Plataforma Brasil',
    'Acordos internacionais',
    'Matriz energética',
    'Plataforma Mundo',
    'Sobre a ENETRIX',
  ]

  return (
    <aside className="hidden w-72 shrink-0 border-r border-slate-200 bg-white lg:block">
      <div className="border-b border-slate-200 p-5">
        <h2 className="text-sm font-semibold text-slate-900">
          Histórico de conversas
        </h2>
      </div>

      <nav className="space-y-1 p-3">
        {conversations.map((conversation) => (
          <button
            key={conversation}
            type="button"
            className="w-full rounded-lg px-3 py-2.5 text-left text-sm text-slate-600 transition hover:bg-slate-100"
          >
            {conversation}
          </button>
        ))}
      </nav>
    </aside>
  )
}

export default ChatHistory