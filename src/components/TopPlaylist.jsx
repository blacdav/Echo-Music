import React from 'react'

const TopPlaylist = () => {
  return (
    <main className='mt-5 mx-5 md:me-5 p-3'>
      <div className='flex justify-between'>
        <h2 className='text-lg font-bold'>Top playlists for you</h2>
        <p>See all</p>
      </div>
      <div className='flex gap-3 mt-4'>
        <div className='bg-slate-500 rounded-lg text-center w-40 h-44 overflow-hidden'>
            {/* <img src="#" alt="#" /> */}
            <div className='h-32 w-40 bg-neutral-900'></div>
            <h3 className='text-s font-bold'>Music of the Spheres</h3>
            <p>Coldplay</p>
        </div>
      </div>
    </main>
  )
}

export default TopPlaylist
