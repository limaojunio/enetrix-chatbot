type ChatInputProps = {
  message: string
  onMessageChange: (message: string) => void
  onSendMessage: () => void
  disabled: boolean
}

function ChatInput({
    message,
    onMessageChange,
    onSendMessage,
    disabled,
}: ChatInputProps) {

function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (message.trim() === '') {
      return
    }

    onSendMessage()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2"
    >
      <input
        type="text"
        value={message}
        onChange={(event) => onMessageChange(event.target.value)}
        disabled={disabled}
        aria-label="Mensagem para o atendimento"
        placeholder="Digite sua mensagem..."
        className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
      />

      <button
        type="submit"
        disabled={message.trim() === '' || disabled}
        className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Enviar
      </button>
    </form>
  )
}

export default ChatInput