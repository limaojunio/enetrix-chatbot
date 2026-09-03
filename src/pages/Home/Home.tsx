function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8">
        
        {/* Header */}
        <header className="flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight text-blue-900">
            ENETRIX
          </div>

          <button className="text-sm font-medium text-slate-700 transition hover:text-blue-700">
            Sobre a ENETRIX
          </button>
        </header>

        {/* Conteúdo principal */}
        <div className="flex flex-1 flex-col items-center justify-center text-center">

          <span className="mb-6 rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-700">
            Uma inovação Made in Paraíba
          </span>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Bem-vindo à ENETRIX
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            A ENETRIX é uma ferramenta web para registro, monitoramento e
            análise da Diplomacia Global de Energia, reunindo informações de
            acordos internacionais relacionados à energia.
          </p>

          {/* Recursos */}
          <div className="mt-12 grid w-full max-w-4xl gap-4 md:grid-cols-3">

            <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-6">
              <h2 className="text-lg font-semibold text-blue-900">
                Lorem Ipsum
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-6">
              <h2 className="text-lg font-semibold text-blue-900">
                Lorem Ipsum
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-6">
              <h2 className="text-lg font-semibold text-blue-900">
                Lorem Ipsum
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
              </p>
            </div>

          </div>

          {/* CTA */}
          <button className="mt-10 rounded-xl bg-blue-700 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800">
            Iniciar atendimento →
          </button>

        </div>
      </section>
    </main>
  )
}

export default Home