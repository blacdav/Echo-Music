import React from 'react'
import { useAPI } from '../context/API'

const TopPlaylist = () => {
  const { albums } = useAPI();
  
  return (
    <main className={`w-screen md:w-full pt-5 px-5 p-3`}>
      <div className='text-xs md:text-lg flex justify-between items-baseline'>
        <h2 className='font-bold'>Albums</h2>
        <p className='text-xs md:text-sm'>See all</p>
      </div>
      <div className='grid grid-cols-4 gap-3 mt-5'>
        {
          albums.map((res) => (
            <div key={res.id} className='text-left min-w-32 h-44 md:h-52 md:min-w-32 overflow-hidden'>
              <img src={res.image} alt={res.image} className='h-32 w-40 md:h-44 md:w-56 rounded-lg bg-neutral-900' />
              <h3 className='text-xs font-bold'>{res.name}</h3>
              <p>{res.artist_name}</p>
            </div>
          ))
        }
      </div>
    </main>
  )
}

export default TopPlaylist;