import React from 'react'
import { useDispatch } from 'react-redux'
import { addCollection, addedToast } from '../redux/features/collectionSlice'

const ResultCard = ({ item }) => {
  const dispatch = useDispatch()

  const addToCollection = (item) => {
    dispatch(addCollection(item))
    dispatch(addedToast())
  }

  return (
    <div
      className="
        group relative
        w-full h-72
        rounded-2xl overflow-hidden
        bg-zinc-900
        shadow-lg hover:shadow-2xl
        transition-all duration-300
        hover:-translate-y-1
      "
    >
      {/* Clickable Media */}
      <a
        href={item.url}
        target="_blank"
        rel="noreferrer"
        className="block h-full w-full"
      >
        {item.type === 'photo' && (
          <img
            src={item.src}
            alt={item.title}
            className="
              h-full w-full object-cover object-center
              transition-transform duration-500
              group-hover:scale-105
            "
          />
        )}

        {item.type === 'video' && (
          <video
            src={item.src}
            autoPlay
            loop
            muted
            className="
              h-full w-full object-cover object-center
              transition-transform duration-500
              group-hover:scale-105
            "
          ></video>
        )}
      </a>

      {/* Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-linear-to-t from-black/85 via-black/20 to-transparent"></div>

      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 z-10 w-full p-3 sm:p-4 flex justify-between items-end gap-3">
        
        <h2 className="text-white text-sm sm:text-base lg:text-lg font-semibold capitalize line-clamp-2">
          {item.title}
        </h2>

        <button
          onClick={() => addToCollection(item)}
          className="
            bg-blue-600 hover:bg-blue-700
            text-white text-xs sm:text-sm font-medium
            px-3 sm:px-4 py-2
            rounded-lg
            shadow-md
            transition-all duration-300
            hover:scale-105 active:scale-95
            whitespace-nowrap
          "
        >
          Save
        </button>
      </div>
    </div>
  )
}

export default ResultCard