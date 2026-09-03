import { Link } from 'react-router-dom'
import { MapPin, Globe2, Brain } from 'lucide-react'

function Home() {
  return (
    <main className="h-full bg-white">
        <section className="mx-auto flex h-full max-w-7xl flex-col px-5 py-6 sm:px-8 sm:py-8 lg:px-10">

            {/* Header */}

            {/* Conteúdo principal */}
            <div className="flex flex-1 flex-col items-center justify-center py-12 text-center sm:py-16">

            {/* Badge */}
            <span className="mb-5 rounded-full bg-blue-50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-blue-700 sm:mb-6 sm:px-4 sm:py-2 sm:text-xs">
                Uma inovação Made in Paraíba
            </span>

            {/* Título */}
            <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Bem-vindo à ENETRIX
            </h1>

            {/* Descrição */}
            <p className="mt-5 max-w-xl text-sm leading-6 text-slate-600 sm:mt-6 sm:max-w-2xl sm:text-lg sm:leading-7">
                A ENETRIX é uma ferramenta web para registro, monitoramento e
                análise da Diplomacia Global de Energia, reunindo informações de
                acordos internacionais relacionados à energia.
            </p>

            {/* Recursos */}
            <div className="mt-10 grid w-full max-w-4xl grid-cols-1 sm:mt-12 md:grid-cols-3">

            {/* Plataforma Brasil */}
            <div className="group flex flex-col items-center px-6 md:border-r md:border-slate-200">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                <MapPin
                    className="h-10 w-10"
                    strokeWidth={1.7}
                />
                </div>

                <h2 className="mt-4 text-lg font-bold text-slate-950">
                Plataforma Brasil
                </h2>

                <p className="mt-2 max-w-xs text-center text-sm leading-6 text-slate-700">
                Acordos e demais atos internacionais assinados pelo Brasil.
                </p>

                <div className="mt-4 h-1 w-12 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-20" />
            </div>


            {/* Plataforma Mundo */}
            <div className="group flex flex-col items-center px-6 md:border-r md:border-slate-200">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                <Globe2
                    className="h-10 w-10"
                    strokeWidth={1.7}
                />
                </div>

                <h2 className="mt-4 text-lg font-bold text-slate-950">
                Plataforma Mundo
                </h2>

                <p className="mt-2 max-w-xs text-center text-sm leading-6 text-slate-700">
                Acordos e atos internacionais entre países e organizações de todo o mundo.
                </p>

                <div className="mt-4 h-1 w-12 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-20" />
            </div>


            {/* Inteligência Artificial */}
            <div className="group flex flex-col items-center px-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                <Brain
                    className="h-10 w-10"
                    strokeWidth={1.7}
                />
                </div>

                <h2 className="mt-4 text-lg font-bold text-slate-950">
                Inteligência Artificial
                </h2>

                <p className="mt-2 max-w-xs text-center text-sm leading-6 text-slate-700">
                Assistente inteligente para interação e suporte aos usuários.
                </p>

                <div className="mt-4 h-1 w-12 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-20" />
            </div>

            </div>
            {/* CTA */}
            <Link to="/chat" className="mt-8 rounded-xl bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800 sm:mt-10 sm:px-7 sm:py-3.5">
                Iniciar atendimento →
            </Link>

            </div>
        </section>
    </main>
  )
}

export default Home