import { createContext, useContext, useEffect, useState } from "react";

const APIContext = createContext();

const url = process.env.APIURL;

export const APIProvider = ({ children }) => {
    const [result, setResult] = useState({});

    useEffect(() => {
        GetData();
    }, [])

    const GetData = async () => {
        try {
            const res = await fetch(url, {
                method: 'GET',
                headers: {
                    'Context-Type': 'application/json'
                }
            })

            if(!res.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await res.json();
            setResult(data);

        } catch (error) {
            console.log(error);
        }
    }

    return(
        <APIContext.Provider value={{result}}>
            { children }
        </APIContext.Provider>
    )
}

export const useAPI = ()=> {
    return useContext(APIContext);
}