import { Link, NavLink, useLocation } from 'react-router-dom'

type NavbarProps = {
  onMenuClick?: () => void
}

function Navbar({ onMenuClick }: NavbarProps) {
  const location = useLocation()

  const isChatPage = location.pathname === '/chat'

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        <div className="flex items-center gap-3">
          {isChatPage && (
            <button
              type="button"
              onClick={onMenuClick}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition hover:bg-slate-100 lg:hidden"
              aria-label="Abrir menu"
            >
              ☰
            </button>
          )}

          <Link
            to="/"
            className="text-xl font-bold tracking-tight text-slate-900"
          >
            ENETRIX
          </Link>
        </div>

        <nav>
          {isChatPage ? (
            <Link
              to="/"
              className="text-sm font-medium text-slate-600 transition hover:text-blue-700"
            >
              ← Voltar para Home
            </Link>
          ) : (
            <NavLink
              to="/chat"
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive
                    ? 'text-blue-700'
                    : 'text-slate-600 hover:text-blue-700'
                }`
              }
            >
              Atendimento
            </NavLink>
          )}
        </nav>

      </div>
    </header>
  )
}

export default Navbar