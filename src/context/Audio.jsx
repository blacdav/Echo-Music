// import { useState, createContext, useContext, useRef } from "react";

// const AudioContext = createContext();

// export const AudioProvider = ({ children }) => {
//     const [isPlaying, setIsPlaying] = useState(false);
//     const audioRef = useRef(null);

//     const togglePlay = () => {
//         const music = audioRef.current;
//         if(isPlaying){
//             music.pause();
//             } else {
//             music.play();
//         }

//         setIsPlaying(!isPlaying)
//         console.log(audioRef)
//     }

//     <AudioContext.Provider value={{ isPlaying, setIsPlaying, togglePlay, audioRef, }}>
//         { children }
//     </AudioContext.Provider>
// }

// export const useAudio = () => {
//     return useContext(AudioContext)
// }