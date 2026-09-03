type ChatSuggestionsProps = {
  onSuggestionClick: (suggestion: string) => void
}

const suggestions = [
  'Sobre a Plataforma Brasil',
  'Consultar acordos internacionais',
  'Recursos energéticos e matriz energética',
]

function ChatSuggestions({
  onSuggestionClick,
}: ChatSuggestionsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 px-4">
      {suggestions.map((suggestion) => (
        <button
          key={suggestion}
          type="button"
          onClick={() => onSuggestionClick(suggestion)}
          className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-600 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 sm:text-sm"
        >
          {suggestion}
        </button>
      ))}
    </div>
  )
}

export default ChatSuggestions