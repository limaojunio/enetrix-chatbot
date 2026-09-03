function ChatHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
      <div>
        <h1 className="text-lg font-bold text-slate-900">
          ENETRIX
        </h1>
        <p className="text-xs text-slate-500">
          Atendimento inteligente
        </p>
      </div>

      <div className="flex items-center gap-2 text-sm text-slate-600">
        <span className="h-2 w-2 rounded-full bg-green-500" />
        Online
      </div>
    </header>
  )
}

export default ChatHeader