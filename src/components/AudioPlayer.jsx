import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay, faCirclePause } from '@fortawesome/free-regular-svg-icons'
import { useAPI } from '../context/API'

const AudioPlayer = ({audio}) => {
  // const [isPlaying , setIsPlaying] = useState(false);
  // const audioRef = useRef(null);

    const {audioRef, isPlaying, setIsPlaying} = useAPI();

    useEffect(() => {
      const music = audioRef.current;
      const handleEnded = () => {
        setIsPlaying(false);
      };
      if(music){
        music.addEventListener('ended', handleEnded);
        return () => {
          music.removeEventListener('ended', handleEnded);
        };
      }
    }, [setIsPlaying]);

    const togglePlay = () => {
        const music = audioRef.current;
        
        if(isPlaying){
          music.pause();
          setIsPlaying(!isPlaying);
        } else {
          music.play();
          setIsPlaying(!isPlaying);
        }
        
    }

  return (
    <>
      <main key={audio.id} onClick={togglePlay} className='flex justify-between pb-2 border-b border-black md:border-none hover:cursor-pointer'>
        <div className='flex gap-2 items-center'>
            <img src={audio.album_image} alt={audio.album_image} className='border h-16 w-16 rounded-md' />
            <div>
                <h3 className='font-bold'>{audio.name}</h3>
                <p>{audio.name}</p>
            </div>
        </div>
        <div className='flex items-center gap-2'>
            <audio ref={audioRef} src={audio.audio} />
            <p>{audio.duration}</p>
            <div className='flex gap-2 text-lg'>
                <FontAwesomeIcon icon={isPlaying ? faCirclePause : faCirclePlay} />
            </div>
        </div>
      </main>
    </>
  )
}

export default AudioPlayer
