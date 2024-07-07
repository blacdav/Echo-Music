import React from 'react'

const Recent = () => {
  return (
    <main className='mx-5 mt-3 text-xs bg-neutral-800 h-full'>
      <div className='flex justify-between'>
        <h2 className='text-xl font-bold'>Recently plays</h2>
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

export default Recent
