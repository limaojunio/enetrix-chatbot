import { Link } from "react-router-dom"
import ChatHeader from "../../components/chat/ChatHeader"
import ChatInput from "../../components/chat/ChatInput"
import ChatMessage from "../../components/chat/ChatMessage"
import ChatHistory from "../../components/chat/ChatHistory"
import ChatMobileMenu from '../../components/chat/ChatMobileMenu'
import ChatSuggestions from '../../components/chat/ChatSuggestions.tsx'
import { sendMessage } from '../../services/chatService'
import { useState } from "react"    

type Message = {
  id: number
  sender: 'user' | 'bot'
  message: string
}

function Chat() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState<Message[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [lastFailedMessage, setLastFailedMessage] = useState<string | null>(null)

    async function handleSendMessage() {
        const trimmedMessage = message.trim()

        if (trimmedMessage === '') {
            return
        }

        const userMessage: Message = {
            id: Date.now(),
            sender: 'user',
            message: trimmedMessage,
        }

        setMessages((currentMessages) => [
            ...currentMessages,
            userMessage,
        ])

        setMessage('')
        setError(null)
        setLastFailedMessage(null)
        setIsLoading(true)

        try {
            const response = await sendMessage(trimmedMessage)

            const botMessage: Message = {
            id: Date.now() + 1,
            sender: 'bot',
            message: response.response,
            }

            setMessages((currentMessages) => [
            ...currentMessages,
            botMessage,
            ])
        } catch {
            setError(
            'Não foi possível obter uma resposta. Tente novamente.',
            )
            setLastFailedMessage(trimmedMessage)
        } finally {
            setIsLoading(false)
        }
    }
    async function handleRetry() {
        if (!lastFailedMessage) {
            return
        }

        setError(null)
        setIsLoading(true)

        try {
            const response = await sendMessage(lastFailedMessage)

            const botMessage: Message = {
            id: Date.now(),
            sender: 'bot',
            message: response.response,
            }

            setMessages((currentMessages) => [
            ...currentMessages,
            botMessage,
            ])

            setLastFailedMessage(null)
        } catch {
            setError(
            'Não foi possível obter uma resposta. Tente novamente.',
            )
        } finally {
            setIsLoading(false)
        }
    }

    return (
    <main className="flex min-h-screen flex-col bg-slate-50">
        <ChatHeader onMenuClick={() => setIsMenuOpen(true)}/>

        <ChatMobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}/>

        <div className="flex flex-1">
            <ChatHistory />
            <section className="flex min-w-0 flex-1 flex-col">
                <div className="flex-1 overflow-y-auto px-4 py-5 sm:p-6">
                    <div className="mx-auto flex max-w-4xl flex-col gap-4">
                        <div>
                            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
                            Atendimento ENETRIX
                            </h2>
                        </div>

                        <ChatMessage sender="bot" message="Olá! Como posso ajudar você?"/>

                        {messages.map((currentMessage) => (
                        <ChatMessage
                            key={currentMessage.id}
                            message={currentMessage.message}
                            sender={currentMessage.sender}
                        />
                        ))}

                        {isLoading && (
                        <div className="flex justify-start">
                            <div className="rounded-2xl rounded-bl-md bg-slate-100 px-4 py-3 text-sm text-slate-500">
                            Digitando...
                            </div>
                        </div>
                        )}

                        {error && (
                        <div className="flex justify-start">
                            <div className="rounded-2xl rounded-bl-md bg-red-50 px-4 py-3 text-sm text-red-600">
                            <p>{error}</p>

                            <button
                                type="button"
                                onClick={handleRetry}
                                disabled={isLoading}
                                className="mt-2 font-semibold underline transition hover:text-red-800 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                Tentar novamente
                            </button>
                            </div>
                        </div>
                        )}

                    </div>
                </div>

                {message === '' && (<ChatSuggestions onSuggestionClick={setMessage} />)}

                <ChatInput
                message={message}
                onMessageChange={setMessage}
                onSendMessage={handleSendMessage}
                disabled={isLoading}
                />

            </section>
        </div>

        <div className="hidden border-t border-slate-200 bg-white px-6 py-3 text-center lg:block">
            <Link to="/" className="text-xs font-medium text-blue-700 hover:text-blue-800">
                Voltar para Home
            </Link>
        </div>
    </main>
  )
}

export default Chat