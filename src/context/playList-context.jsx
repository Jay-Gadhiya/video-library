import { createContext, useContext, useReducer, useState } from "react";
import { playlistReducer } from "../Reducer/playlistReducer";

const PlaylistContext = createContext();
const usePlayList = () => useContext(PlaylistContext);

const initialVal = {
    playlist : []
}


const PlayListProvider = ({ children }) => {

    const [playlistState, playlistDispatch] = useReducer( playlistReducer, initialVal );
    const [openModal, setOpenModal] = useState(false);

    return (
        <PlaylistContext.Provider value={{ playlistState, playlistDispatch, openModal, setOpenModal}} >
            { children }
        </PlaylistContext.Provider>
    )
}

export { PlayListProvider, usePlayList };