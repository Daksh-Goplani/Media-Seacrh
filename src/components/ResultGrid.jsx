import React, { useEffect } from 'react'
import { fetchPhotos, fetchVideos } from '../api/mediaApi.js'
import {
  setLoading,
  setError,
  setResults,
} from '../redux/features/searchSlice.js'

import { useDispatch, useSelector } from 'react-redux'
import ResultCard from './ResultCard.jsx'

const ResultGrid = () => {
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search
  )

  const dispatch = useDispatch()

  useEffect(() => {
    if (!query) return

    const getData = async () => {
      try {
        dispatch(setLoading())

        let data = []

        // Photos
        if (activeTab === 'photos') {
          const response = await fetchPhotos(query)

          data = response.results.map((item) => ({
            id: item.id,
            type: 'photo',
            title: item.alt_description || 'Untitled Photo',
            thumbnail: item.urls.small,
            src: item.urls.full,
            url: item.links.html,
          }))
        }

        // Videos
        if (activeTab === 'videos') {
          const response = await fetchVideos(query)

          data = response.videos.map((item) => ({
            id: item.id,
            type: 'video',
            title: item.user?.name || 'Video',
            thumbnail: item.image,
            src: item.video_files?.[0]?.link,
            url: item.url,
          }))
        }

        dispatch(setResults(data))
      } catch (err) {
        dispatch(setError(err.message))
      }
    }

    getData()
  }, [query, activeTab, dispatch])

  // Error UI
  if (error) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="bg-red-500/10 border border-red-500 text-red-400 px-6 py-4 rounded-xl text-lg">
          Error: {error}
        </div>
      </div>
    )
  }

  // Loading UI
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        
        <div className="w-14 h-14 border-4 border-zinc-700 border-t-blue-500 rounded-full animate-spin"></div>

        <h2 className="text-zinc-300 text-lg font-medium">
          Loading {activeTab}...
        </h2>
      </div>
    )
  }

  // Empty State
  if (!results.length && query) {
    return (
      <div className="flex justify-center items-center py-20">
        <h2 className="text-zinc-400 text-xl font-medium">
          No results found for "{query}"
        </h2>
      </div>
    )
  }

  return (
    <div
      className="
        w-full
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
        gap-6
        px-6 py-8
      "
    >
      {results.map((item) => (
        <ResultCard key={item.id} item={item} />
      ))}
    </div>
  )
}

export default ResultGrid