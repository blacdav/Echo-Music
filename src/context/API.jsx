import { createContext, useContext, useEffect, useRef, useState } from "react";

const APIContext = createContext();

const url = import.meta.env.VITE_API_URL;
const clientId = import.meta.env.VITE_CLIENT_ID;

export const APIProvider = ({ children }) => {
    const [tracks, setTracks] = useState([]);
    const [albums, setAlbums] = useState([]);
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
            console.error(`Error fetching Albums data ${error}`);
        }
    }

    useEffect(() => {
        getAlbums();
        getTracks();
    }, [])

    return(
        <APIContext.Provider value={{ albums, tracks, isPlaying, setIsPlaying, audioRef }}>
            { children }
        </APIContext.Provider>
    )
}

export const useAPI = ()=> {
    return useContext(APIContext);
}