import "./playlistCard.css";
import playlistImg from "../../assets/playlist-img.png";
import { AiOutlineMore } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { CgPlayList } from 'react-icons/cg';
import { useState } from "react";
import { deletePlaylistHandler } from "../../Utility-functions/playlistHandler";
import { useAuth } from "../../context/authentication-context";
import { usePlayList } from "../../context/playList-context";
import { Link } from "react-router-dom";


export const PlaylistCard = ({ playlist }) => {

    const [openMenu, setOpenMenu] = useState(false);
    const { authState } = useAuth();
    const { playlistDispatch } = usePlayList();
    
    return (
        <div className="main-card-wrapper">
            <Link to={`/playlist/${playlist._id}`} >
                <figure className="playlist-img-container">
                    <img className="playlist-img" src={playlistImg} alt="playlist" />
                    <div className="overlap-content">
                        <span>0</span>
                        <CgPlayList />
                    </div>
                </figure>
            </Link>
            <div className="title-and-menu-wrapper">
                <h3 className="playlist-name">{ playlist.title.title }</h3> 
                <div className="playlist-card-menu-wrapper">
                    <AiOutlineMore onClick={() => setOpenMenu(open => !open)} className="playlist-menu-icon" />
                    {
                        openMenu
                        &&
                        <div onClick={() => deletePlaylistHandler(playlist._id, authState, playlistDispatch)} className="delete-playlist-wrapper">
                            <MdDelete className="playlist-card-icon" />
                            <p>Delete Playlist</p>  
                        </div>
                    }
                    
                </div>
            </div>
        </div>
    )

}

