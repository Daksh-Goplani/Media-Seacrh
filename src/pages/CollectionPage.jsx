import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CollectionCard from '../components/CollectionCard'
import { clearCollection, clearToast } from '../redux/features/collectionSlice'

const CollectionPage = () => {
  const collection = useSelector((state) => state.collection.items)
  const dispatch = useDispatch()

  const clearAll = () => {
    dispatch(clearCollection())
    dispatch(clearToast())
  }

  return (
    <div className="min-h-screen px-6 py-8">

      {/* Header */}
      {collection.length > 0 ? (
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          
          <div>
            <h2 className="text-3xl font-bold text-white">
              Your Collection
            </h2>

            <p className="text-zinc-400 mt-1">
              Saved photos and videos
            </p>
          </div>

          <button
            onClick={clearAll}
            className="
              bg-red-600 hover:bg-red-700
              text-white font-medium
              px-5 py-3 rounded-xl
              shadow-lg shadow-red-500/20
              transition-all duration-300
              hover:scale-105 active:scale-95
              cursor-pointer
            "
          >
            Clear Collection
          </button>
        </div>
      ) : (
        /* Empty State */
        <div className="flex flex-col justify-center items-center py-24 text-center">
          
          <div className="text-7xl mb-4">📂</div>

          <h2 className="text-3xl font-bold text-white mb-2">
            Collection is Empty
          </h2>

          <p className="text-zinc-400 text-lg">
            Save your favorite photos and videos here.
          </p>
        </div>
      )}

      {/* Collection Grid */}
      {collection.length > 0 && (
        <div
          className="
            grid grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            gap-6
          "
        >
          {collection.map((item) => (
            <CollectionCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  )
}

export default CollectionPage