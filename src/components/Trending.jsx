import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay, faCirclePause, faCircleDown } from '@fortawesome/free-regular-svg-icons'
import { useAPI } from '../context/API'
import React, { useState, useRef } from 'react'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown'
import AudioPlayer from './AudioPlayer'

const Trending = () => {
  const { tracks } = useAPI();
  const [more, setMore] = useState(5);
  
  const music = tracks;
  const musicList = music.flatMap(songs => songs.tracks);

  return (
    <main className='w-screen md:w-full px-5 md:ps-5 md:pe-1 p-3 pt-5 text-xs'>
      <div>
        <h1 className='text-sm md:text-lg mb-3 font-bold'>Trending</h1>
        <div className='grid gap-3 min-h-full md:h-72 w-full overflow-y-scroll no-scrollbar'>
          {
            musicList.slice(0, more).map((audio) => (
              <div key={audio.id} className=''>
                <AudioPlayer audio={audio} />
              </div>
            ))
          }
          <button onClick={() => setMore(more + 10)} className={`text-center pt-5 outline-none`}>More <br /> <FontAwesomeIcon icon={faChevronDown} className='animate-bounce' /></button>
        </div>
      </div>
    </main>
  )
}

export default Trending