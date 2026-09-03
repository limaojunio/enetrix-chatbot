import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import Home from './pages/Home/Home'
import Chat from './pages/Chat/Chat'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <BrowserRouter>
      <div className="flex h-screen flex-col overflow-hidden">
        <Navbar
          onMenuClick={() => setIsMenuOpen(true)}
        />

        <main className="h-full min-h-0 overflow-y-auto bg-white">
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

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App