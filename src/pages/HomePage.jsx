import React from 'react'
import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'
import ResultGrid from '../components/ResultGrid'
import { useSelector } from 'react-redux'

const HomePage = () => {
  const { query } = useSelector((store) => store.search)

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center px-6 pt-16 pb-10">
        
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
          Discover Amazing Media
        </h1>

        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl">
          Search high-quality photos and videos from across the web and save your favorites instantly.
        </p>
      </div>

      {/* Search */}
      <SearchBar />

      {/* Tabs + Results */}
      {query !== '' ? (
        <div className="animate-fadeIn">
          <Tabs />
          <ResultGrid />
        </div>
      ) : (
        /* Empty Landing State */
        <div className="flex flex-col items-center justify-center text-center py-24 px-6">
          
          <div className="text-7xl mb-6">🔍</div>

          <h2 className="text-3xl font-semibold mb-3">
            Start Searching
          </h2>

          <p className="text-zinc-400 text-lg max-w-xl">
            Find beautiful images and trending videos by typing anything in the search bar above.
          </p>
        </div>
      )}
    </div>
  )
}

export default HomePage