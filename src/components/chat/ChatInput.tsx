import { ArrowUp} from 'lucide-react'

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
  function handleSubmit(event: React.SubmitEvent) {
    event.preventDefault()

    if (message.trim() === '') {
      return
    }

    onSendMessage()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="absolute bottom-8 left-1/2 z-10 flex w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 shadow-lg transition focus-within:border-blue-300 focus-within:ring-2 focus-within:ring-blue-100 sm:bottom-10"
    >

      {/* Campo de mensagem */}
      <input
        type="text"
        value={message}
        onChange={(event) => onMessageChange(event.target.value)}
        disabled={disabled}
        aria-label="Mensagem para o atendimento"
        placeholder="Digite sua mensagem..."
        className="min-w-0 flex-1 bg-transparent px-1 text-sm text-slate-700 outline-none placeholder:text-slate-400 sm:text-base"
      />

      {/* Enviar */}
      <button
        type="submit"
        disabled={message.trim() === '' || disabled}
        aria-label="Enviar mensagem"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ArrowUp
          className="h-5 w-5"
          strokeWidth={2}
          aria-hidden="true"
        />
      </button>
    </form>
  )
}

export default ChatInput