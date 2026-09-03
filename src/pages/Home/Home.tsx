function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col px-5 py-6 sm:px-8 sm:py-8 lg:px-10">

        {/* Header */}
        <header className="flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight text-blue-900 sm:text-2xl">
            ENETRIX
          </div>

          <button className="text-xs font-medium text-slate-700 transition hover:text-blue-700 sm:text-sm">
            Sobre a ENETRIX
          </button>
        </header>

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
          <div className="mt-10 grid w-full max-w-4xl gap-4 sm:mt-12 md:grid-cols-3">

            <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-5 sm:p-6">
              <h2 className="text-base font-semibold text-blue-900 sm:text-lg">
                Lorem Ipsum
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-5 sm:p-6">
              <h2 className="text-base font-semibold text-blue-900 sm:text-lg">
                Lorem Ipsum
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-5 sm:p-6">
              <h2 className="text-base font-semibold text-blue-900 sm:text-lg">
                Lorem Ipsum
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
              </p>
            </div>

          </div>

          {/* CTA */}
          <button className="mt-8 rounded-xl bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800 sm:mt-10 sm:px-7 sm:py-3.5">
            Iniciar atendimento →
          </button>

        </div>
      </section>
    </main>
  )
}

export default Home