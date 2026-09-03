import { Link } from "react-router-dom"

function Chat() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-slate-900">
            chat ENETRIX
        </h1>
        <Link to="/" className="mt-6 inline-block rounded-xl bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800">
          Voltar para Home
        </Link>
      </div>
    </main>
  )
}

export default Chat