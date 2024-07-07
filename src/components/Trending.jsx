import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay, faCirclePause } from '@fortawesome/free-regular-svg-icons'
import React from 'react'

const Trending = () => {
  return (
    <main className='ms-5 mt-5 text-xs'>
      <div>
        <h1 className='text-lg mb-3 font-bold'>Trending</h1>
        <div className='flex justify-between mb-2'>
            <div className='flex gap-2 items-center'>
                {/* <img src="" alt="" /> */}
                <div className='bg-red-400 h-12 w-12 rounded-md'></div>
                <div>
                    <h3 className='font-bold'>Music Name</h3>
                    <p>Artist</p>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <p>3:45</p>
                <FontAwesomeIcon icon={faCirclePlay} />
                <FontAwesomeIcon icon={faCirclePause} />
            </div>
        </div>
      </div>
    </main>
  )
}

export default Trending
