import { createContext, useContext, useEffect, useState } from "react";

const APIContext = createContext();

const url = import.meta.env.VITE_API_URL;
// const key = import.meta.env.VITE_API_KEY;
const clientId = import.meta.env.VITE_CLIENT_ID;

export const APIProvider = ({ children }) => {
    const [artists, setArtists] = useState([]);
    const [tracks, setTracks] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [artistName, setArtistName] = useState('');

    const getData = async () => {
        try {
            const artistUrl = `${url}/artists/?client_id=${clientId}&offset=0`;
            const tracksUrl = artistName ? `${url}/albums/tracks/?client_id=${clientId}&limit=1&artist_name=${artistName}` : `${url}/albums/?client_id=${clientId}&limit=1`;
            // const tracksUrl = `${url}/albums/tracks/?client_id=${clientId}&limit=1&artist_name=${artistName}`;
            const albumsUrl = `${url}/albums/?client_id=${clientId}&offset=0`;

            // setArtistName('Both')

            const [artistsRes, tracksRes, albumsRes] = await Promise.all([
                fetch(artistUrl),
                fetch(tracksUrl),
                fetch(albumsUrl)
            ])
            
            if(!artistsRes.ok || !tracksRes.ok || !albumsRes.ok) {
                throw new Error('Network response was not ok');
            }
            
            const artistsData = await artistsRes.json();
            const tracksData = await tracksRes.json();
            const albumsData = await albumsRes.json();

            console.log('Fetched data:', { artistsData, tracksData, albumsData });

            setArtists(artistsData.results);
            setTracks(tracksData.results);
            setAlbums(albumsData.results);

        } catch (error) {
            console.log(`Error Fetching data ${error}`);
        }
    }

    useEffect(() => {
        getData();
    }, [artistName])

    return(
        <APIContext.Provider value={{artists, albums, tracks, artistName, setArtistName}}>
            { children }
        </APIContext.Provider>
    )
}

export const useAPI = ()=> {
    return useContext(APIContext);
}