import { createContext, useContext, useEffect, useState } from "react";

const APIContext = createContext();

const url = import.meta.env.VITE_API_URL;
// const key = import.meta.env.VITE_API_KEY;
const clientId = import.meta.env.VITE_CLIENT_ID;
// const fullUrl = `${url}/artists/?client_id=${clientId}&offset=0`;

export const APIProvider = ({ children }) => {
    const [artists, setArtists] = useState([]);
    const [tracks, setTracks] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [artistName, setArtistName] = useState([]);

    const getData = async () => {
        try {
            setArtistName('Both')
            const artistUrl = `${url}/artists/?client_id=${clientId}&offset=0`;
            const tracksUrl = `${url}/albums/tracks/?client_id=${clientId}&offset=0&artist_name=${'Both'}`;
            const albumsUrl = `${url}/albums/?client_id=${clientId}&offset=0`;

            // setArtistName('Both')

            const [artistsRes, tracksRes, albumsRes] = await Promise.all([
                fetch(artistUrl),
                fetch(tracksUrl),
                fetch(albumsUrl)
            ])
            
            if(!artistsRes.ok) {
                throw new Error('Network response was not ok');
            }
            const artistsData = await artistsRes.json();
            setArtists(artistsData.results);

            if(!tracksRes.ok) {
                throw new Error('Network response was not ok');
            }
            const tracksData = await tracksRes.json();
            setTracks(tracksData.results);

            if(!albumsRes.ok) {
                throw new Error('Network response was not ok');
            }
            const albumsData = await albumsRes.json();
            setAlbums(albumsData.results)

        } catch (error) {
            console.log(`Error Fetching data ${error}`);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return(
        <APIContext.Provider value={{artists, tracks, albums, artistName, setArtistName}}>
            { children }
        </APIContext.Provider>
    )
}

export const useAPI = ()=> {
    return useContext(APIContext);
}