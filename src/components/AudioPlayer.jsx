import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay, faCirclePause } from '@fortawesome/free-regular-svg-icons'
import MusicPanel from './MusicPanel'
import { useAPI } from '../context/API'

const AudioPlayer = ({audio}) => {
  const [isPlaying , setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(true);
  const audioRef = useRef(null);

    const { currentAudio, setCurrentAudio} = useAPI();

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

    useEffect(() => {
      if (currentAudio && currentAudio !== audioRef.current) {
        currentAudio.pause();
        setIsPlaying(false)
      }
    }, [currentAudio]);

    const togglePlay = () => {
      const music = audioRef.current;
      
      if(isPlaying){
        music.pause();
        setIsPlaying(false);
      } else {
        if (currentAudio && currentAudio !== audioRef.current) {
          currentAudio.pause();
        }
        setCurrentAudio(music)
        music.play();
        setIsPlaying(true);
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
            <p>{audio.duration.slice(0, 1)}:{audio.duration.slice(1, audio.duration.legnth)}</p>
            <div className='flex gap-2 text-lg'>
              <FontAwesomeIcon icon={isPlaying ? faCirclePause : faCirclePlay} />
            </div>
        </div>
      </main>
      {/* <MusicPanel audio={audio} /> */}
    </>
  )
}

export default AudioPlayer
