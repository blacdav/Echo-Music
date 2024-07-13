import React from 'react'
import { useAPI } from '../context/API'

const Recent = () => {
  const { tracks } = useAPI();
  
  return (
    <main className='px-5 text-xs bg-neutra-800 h-full w-screen md:w-full'>
      <div className='flex justify-between items-baseline'>
        <h2 className='text-lg md:text-xl font-bold'>Recently plays</h2>
        <p className='text-xs md:text-sm'>See all</p>
      </div>
      <div className='flex gap-3 mt-2 min-w-full overflow-x-scroll hover:cursor-pointer hover:scroll-auto no-scrollbar'>
        {
          tracks.map((res) => (
            <div key={res.id} className='text-center min-w-40 h-44 overflow-hidden'>
                <img src={res.image} alt={res.image} className='h-40 bg-neutral-900 w-40 rounded-lg' />
                <h3 className='text-s font-bold'>Music of the Spheres</h3>
                <p>Coldplay</p>
            </div>
          ))
        }
      </div>
    </main>
  )
}

export default Recent
