import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/searchSlice'

const Tabs = () => {
  const tabs = ['photos', 'videos']
  const dispatch = useDispatch()
  const activeTab = useSelector((state) => state.search.activeTab)

  return (
    <div className="flex items-center gap-4 p-6 w-full">
      {tabs.map((elem, idx) => (
        <button
          key={idx}
          onClick={() => dispatch(setActiveTabs(elem))}
          className={`
            px-6 py-2 rounded-xl font-medium capitalize
            transition-all duration-300 ease-in-out
            border border-transparent
            hover:scale-105 hover:shadow-lg
            active:scale-95
            ${
              activeTab === elem
                ? 'bg-blue-600 text-white shadow-blue-500/30 shadow-lg'
                : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
            }
          `}
        >
          {elem}
        </button>
      ))}
    </div>
  )
}

export default Tabs