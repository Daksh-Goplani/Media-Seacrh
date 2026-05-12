import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10 px-8 py-4 flex justify-between items-center">
      
      {/* Logo */}
      <Link
        to="/"
        className="text-3xl font-bold tracking-tight text-white hover:text-blue-400 transition-colors duration-300"
      >
        Media Search
      </Link>

      {/* Nav Links */}
      <div className="flex items-center gap-4">
        
        <Link
          to="/"
          className={`
            px-5 py-2 rounded-xl text-sm font-semibold
            transition-all duration-300
            hover:scale-105 active:scale-95
            ${
              location.pathname === '/'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
            }
          `}
        >
          Search
        </Link>

        <Link
          to="/collection"
          className={`
            px-5 py-2 rounded-xl text-sm font-semibold
            transition-all duration-300
            hover:scale-105 active:scale-95
            ${
              location.pathname === '/collection'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
            }
          `}
        >
          Collection
        </Link>
      </div>
    </nav>
  )
}

export default Navbar