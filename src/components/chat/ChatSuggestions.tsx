import {
  Globe2,
  Handshake,
  Zap,
  ArrowRight,
} from 'lucide-react'

type ChatSuggestionsProps = {
  onSuggestionClick: (suggestion: string) => void
}

const suggestions = [
  {
    label: 'Sobre a Plataforma Brasil',
    icon: Globe2,
  },
  {
    label: 'Consultar acordos internacionais',
    icon: Handshake,
  },
  {
    label: 'Recursos energéticos e matriz energética',
    icon: Zap,
  },
]

function ChatSuggestions({
  onSuggestionClick,
}: ChatSuggestionsProps) {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-3">
      {suggestions.map(({ label, icon: Icon }) => (
        <button
          key={label}
          type="button"
          onClick={() => onSuggestionClick(label)}
          className="group flex w-full items-center gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50/40 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {/* Ícone */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-100">
            <Icon
              className="h-5 w-5"
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </div>

          {/* Texto */}
          <span className="flex-1 text-sm font-medium text-slate-700 transition group-hover:text-blue-800 sm:text-base">
            {label}
          </span>

          {/* Seta */}
          <ArrowRight
            className="h-5 w-5 shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-600"
            strokeWidth={1.8}
            aria-hidden="true"
          />
        </button>
      ))}
    </div>
  )
}

export default ChatSuggestions