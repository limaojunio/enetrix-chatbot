function ChatInput() {
  return (
    <div className="border-t border-slate-200 bg-white p-3 sm:p-4">
      <div className="flex items-center gap-2 sm:gap-3">
        <input
          type="text"
          placeholder="Digite sua mensagem..."
          className="flex-1 rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        />

        <button
          type="button"
          className="rounded-xl bg-blue-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 sm:px-5"
        >
          Enviar
        </button>
      </div>
    </div>
  )
}

export default ChatInput