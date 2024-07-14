import { createContext, useContext, useEffect, useRef, useState } from "react";

const APIContext = createContext();

const url = import.meta.env.VITE_API_URL;
const clientId = import.meta.env.VITE_CLIENT_ID;

export const APIProvider = ({ children }) => {
    const [theme, setTheme] = useState(true)
    const [visible, setVisible] = useState(false);
    const [tracks, setTracks] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [currentAudio, setCurrentAudio] = useState(false);
    const [isPlaying , setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const albumsUrl = `${url}/artists/albums/?client_id=${clientId}`;
    const tracksUrl = `${url}/artists/tracks/?client_id=${clientId}`;

    const getAlbums = async () => {
        try {
            const res = await fetch(albumsUrl);
            if(!res.ok){
                throw new Error('Network response was not ok')
            }
            const data = await res.json();
            setAlbums(data.results);
        } catch (error) {
            console.error(`Error fetching Albums data ${error}`);
        }
    }

    const getTracks = async () => {
        try {
            const res = await fetch(tracksUrl);
            if(!res.ok){
                throw new Error('Network response was not ok')
            }
            const data = await res.json();
            setTracks(data.results);
        } catch (error) {
            console.error(`Error fetching Tracks data ${error}`);
        }
    }

    useEffect(() => {
        getAlbums();
        getTracks();
    }, [])

    return(
        <APIContext.Provider value={{ visible, setVisible, theme, setTheme, albums, tracks, isPlaying, setIsPlaying, audioRef, currentAudio, setCurrentAudio }}>
            { children }
        </APIContext.Provider>
    )
}

export const useAPI = ()=> {
    return useContext(APIContext);
}