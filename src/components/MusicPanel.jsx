import { faAngleLeft, faAngleRight, faCirclePause, faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useAPI } from '../context/API'

const MusicPanel = (ref, audio) => {
  const { isPlaying, setIsPlaying } = useAPI();

  // useEffect(() => {
  //   console.log(audioRef);
  // }, [])
  
  return (
    <main className='w-screen md:w-4/5 bg-slate-800 h-20 fixed bottom-16 md:bottom-0'>
      <div className='flex justify-between px-5 items-center'>
        <div className='flex gap-2 items-center pt-2'>
          <img src={audio.album_image} alt={audio.album_image} className='border h-16 w-16 rounded-full' />
          <div>
              <h3 className='font-bold'>{audio.name} Jowo</h3>
              <p>{audio.name}davido</p>
          </div>
        </div>
        <div onClick={() => setIsPlaying(!isPlaying)} className='pt-2 px-5'>
          {/* <FontAwesomeIcon icon={faAngleLeft} className='text-xl hover:cursor-pointer' /> */}
          <FontAwesomeIcon icon={isPlaying ? faCirclePause : faCirclePlay} className='text-6xl hover:cursor-pointer' />
          {/* <FontAwesomeIcon icon={faAngleRight} className='text-xl hover:cursor-pointer' /> */}
        </div>
      </div>
    </main>
  )
}

export default MusicPanel
