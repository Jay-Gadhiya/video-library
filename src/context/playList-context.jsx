import { createContext, useContext, useReducer } from "react";
import { playlistReducer } from "../Reducer/playlistReducer";

const PlaylistContext = createContext();
const usePlayList = () => useContext(PlaylistContext);

initialVal = {
    playlist : []
}


const PlayListProvider = ({ children }) => {

    const [playlistState, playlistDispatch] = useReducer( playlistReducer, initialVal );

    return (
        <PlaylistContext.Provider value={{ playlistState, playlistDispatch }} >
            { children }
        </PlaylistContext.Provider>
    )
}

export { PlayListProvider, usePlayList };