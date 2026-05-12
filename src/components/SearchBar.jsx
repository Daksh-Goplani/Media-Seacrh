import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'

const SearchBar = () => {
  const dispatch = useDispatch()
  const [text, setText] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    dispatch(setQuery(text))
    setText('')
  }

  return (
    <div className="w-full flex justify-center px-6 py-8">
      
      <form
        onSubmit={submitHandler}
        className="
          w-full max-w-4xl
          flex items-center gap-4
          bg-zinc-900/80 backdrop-blur-md
          border border-zinc-700
          rounded-2xl
          p-3
          shadow-xl
        "
      >
        {/* Search Input */}
        <input
          type="text"
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Search photos, videos..."
          className="
            flex-1
            bg-transparent
            text-white
            placeholder:text-zinc-400
            px-4 py-3
            text-lg
            outline-none
          "
        />

        {/* Search Button */}
        <button
          type="submit"
          className="
            bg-blue-600 hover:bg-blue-700
            text-white font-semibold
            px-6 py-3
            rounded-xl
            transition-all duration-300
            hover:scale-105
            active:scale-95
            shadow-lg shadow-blue-500/20
          "
        >
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchBar