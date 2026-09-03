import { Link } from "react-router-dom"
import ChatHeader from "../../components/chat/ChatHeader"
import ChatInput from "../../components/chat/ChatInput"
import ChatMessage from "../../components/chat/ChatMessage"
import ChatHistory from "../../components/chat/ChatHistory"
import ChatMobileMenu from '../../components/chat/ChatMobileMenu'
import ChatSuggestions from '../../components/chat/ChatSuggestions.tsx'
import { useState } from "react"




function Chat() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [message, setMessage] = useState('')

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

                            <p className="mt-1 text-sm text-slate-500">
                            Olá! Como posso ajudar você?
                            </p>
                        </div>

                        <ChatMessage sender="bot" message="Olá! Como posso ajudar você?"/>
                    </div>
                </div>

                {message === '' && (<ChatSuggestions onSuggestionClick={setMessage} />)}
                <ChatInput message={message} onMessageChange={setMessage}/>

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