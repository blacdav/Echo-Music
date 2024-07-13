import React, { useEffect } from 'react'
import { useAPI } from '../context/API'

const TopPlaylist = () => {
  const { albums } = useAPI();

  // useEffect(() => {
    console.log(albums)
  // }, [])
  
  return (
    <main className='w-screen md:w-full pt-5 px-5 md:pe-5 md:ps-1 p-3'>
      <div className='text-xs md:text-lg flex justify-between items-baseline'>
        <h2 className='font-bold'>Top playlists for you</h2>
        <p className='text-xs md:text-sm'>See all</p>
      </div>
      <div className='flex gap-3 mt-4 min-w-full overflow-x-scroll no-scrollbar'>
        {
          albums.map((res) => (
            <div key={res.id} className='text-left min-w-32 h-44 overflow-hidden'>
              <img src={res.image} alt={res.image} className='h-32 w-40 rounded-lg bg-neutral-900' />
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