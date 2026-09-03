import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './pages/Home/Home'
import Chat from './pages/Chat/Chat'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <Navbar
          onMenuClick={() => setIsMenuOpen(true)}
        />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/chat"
              element={
                <Chat
                  isMenuOpen={isMenuOpen}
                  onCloseMenu={() => setIsMenuOpen(false)}
                />
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App