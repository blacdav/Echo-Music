// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCirclePlay, faCirclePause } from '@fortawesome/free-regular-svg-icons'
// import { useAPI } from '../context/API'
// import React, { useState, useRef } from 'react'

// const AudioPlayer = ({ track }) => {
//   const {artistName} = useAPI();
//   const [isPlaying , setIsPlaying] = useState(false);
//   const audioRef = useRef(new Audio(track.audio));

//   const togglePlay = () => {
//     if(isPlaying){
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play();
//     }

//     setIsPlaying(!isPlaying);
//     console.log(audioRef);
//   }

//   return (
//     <main onClick={togglePlay} className='flex justify-between pb-2 border-b border-black md:border-none'>
//       <div className='flex gap-2 items-center'>
//         <img src={track.image} alt={track.image} className='bg-red-400 border h-16 w-16 rounded-md' />
//         <div>
//             <h3 className='font-bold'>{track.name}</h3>
//             <p>{artistName}</p>
//         </div>
//       </div>
//       <div className='flex items-center gap-2'>
//         <audio ref={audioRef} src={track.audio} />
//           <p>3:45</p>
//           <div className='text-lg'>
//             <FontAwesomeIcon icon={isPlaying ? faCirclePause : faCirclePlay} />
//           </div>
//       </div>
//     </main>
//   )
// }

// const Trending = () => {
//   const { tracks, artistName } = useAPI();

//   console.log(tracks)
  
//   return (
//     <main className='w-screen md:w-full px-5 md:ps-5 md:pe-1 p-3 pt-5 text-xs'>
//       <div>
//         <h1 className='text-sm md:text-lg mb-3 font-bold'>Trending</h1>
//         <div className='grid gap-3 min-h-full w-full overflow-y-scroll no-scrollbar'>
//           {
//             tracks.map((res) => (
//               // <div key={res.id}>
//                 <AudioPlayer key={res.id} track={res} />
//               // </div>
//             ))
//           }
//         </div>
//       </div>
//     </main>
//   )
// }

// export default Trending


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay, faCirclePause } from '@fortawesome/free-regular-svg-icons'
import { useAPI } from '../context/API'
import React, { useState, useRef, useEffect } from 'react'

const AudioPlayer = ({ track }) => {
  const { artistName } = useAPI();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(track.audio);
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [track.audio]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <main onClick={togglePlay} className='flex justify-between pb-2 border-b border-black md:border-none'>
      <div className='flex gap-2 items-center'>
        <img src={track.image} alt={`Cover art for ${track.name}`} className='bg-red-400 border h-16 w-16 rounded-md' />
        <div>
          <h3 className='font-bold'>{track.name}</h3>
          <p>{artistName}</p>
        </div>
      </div>
      <div className='flex items-center gap-2'>
        <audio ref={audioRef} src={track.audio} />
        <p>{/* Dynamically set the duration if needed */}</p>
        <div className='text-lg'>
          <FontAwesomeIcon icon={isPlaying ? faCirclePause : faCirclePlay} />
        </div>
      </div>
    </main>
  );
};

const Trending = () => {
  const { tracks, artistName } = useAPI();

  console.log(tracks[0].tracks);

  return (
    <main className='w-screen md:w-full px-5 md:ps-5 md:pe-1 p-3 pt-5 text-xs'>
      <div>
        <h1 className='text-sm md:text-lg mb-3 font-bold'>Trending</h1>
        <div className='grid gap-3 min-h-full w-full overflow-y-scroll no-scrollbar'>
          {tracks.map((res) => (
            <AudioPlayer key={res.id} track={res} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Trending;
