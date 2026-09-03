import ChatInput from "../../components/chat/ChatInput"
import ChatMessage from "../../components/chat/ChatMessage"
import ChatHistory from "../../components/chat/ChatHistory"
import ChatMobileMenu from '../../components/chat/ChatMobileMenu'
import ChatEmptyState from '../../components/chat/ChatEmptyState'
import { sendMessage } from '../../services/chatService'
import type { Conversation, Message } from '../../types/chat'
import { useEffect, useState } from 'react'  

type ChatProps = {
  isMenuOpen: boolean
  onCloseMenu: () => void
}

function Chat({
    isMenuOpen,
    onCloseMenu,
    }: ChatProps) {

    const STORAGE_KEY = 'enetrix-chat-messages'

    const [message, setMessage] = useState('')

    const [messages, setMessages] = useState<Message[]>(() => {

        const savedMessages = localStorage.getItem(STORAGE_KEY)

        if (!savedMessages) {
            return []
        }

        return JSON.parse(savedMessages)

    })

    const [isLoading, setIsLoading] = useState(false)

    const [error, setError] = useState<string | null>(null)

    const [lastFailedMessage, setLastFailedMessage] = useState<string | null>(null)

    const firstMessage = messages[0]?.message

    const conversationTitle =
        firstMessage && firstMessage.length > 40
            ? `${firstMessage.slice(0, 40)}...`
            : firstMessage || 'Nova conversa'

    const conversations: Conversation[] = [
        {
            id: 1,
            title: conversationTitle,
            messages,
        },
    ]

    useEffect(() => {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(messages),
        )
    }, [messages])

        function handleClearHistory() {
        localStorage.removeItem(STORAGE_KEY)

        setMessages([])
        setMessage('')
        setError(null)
        setLastFailedMessage(null)
    }

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
    <main className="flex h-full min-h-0 flex-col bg-slate-50">

        <ChatMobileMenu
        isOpen={isMenuOpen}
        onClose={onCloseMenu}
        conversations={conversations}
        onClearHistory={handleClearHistory}
        />

        <div className="flex flex-1 min-h-0">

            <ChatHistory conversations={conversations} onClearHistory={handleClearHistory}/>

            <section className="relative flex min-w-0 flex-1 flex-col min-h-0">
                <div className="flex-1 overflow-y-auto px-4 py-5 pb-32 sm:p-6 sm:pb-36">
                    {messages.length === 0 ? (
                        <ChatEmptyState
                            onSuggestionClick={setMessage}
                        />
                    ) : (
                        <div className="mx-auto flex max-w-4xl flex-col gap-4">
                            {messages.map((currentMessage) => (
                                <ChatMessage
                                    key={currentMessage.id}
                                    message={currentMessage.message}
                                    sender={currentMessage.sender}
                                />
                            ))}

                            {isLoading && (
                                <div
                                    className="flex justify-start"
                                    role="status"
                                    aria-live="polite"
                                >
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
                    )}
                </div>

                <ChatInput
                message={message}
                onMessageChange={setMessage}
                onSendMessage={handleSendMessage}
                disabled={isLoading}
                />

            </section>
        </div>
    </main>
  )
}

export default Chat