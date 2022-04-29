import "./playlistCard.css";
import playlistImg from "../../assets/playlist-img.png";
import { AiOutlineMore } from 'react-icons/ai';
import { CgPlayList } from 'react-icons/cg';


export const PlaylistCard = () => {
    
    return (
        <div className="main-card-wrapper">
            <figure className="playlist-img-container">
                <img className="playlist-img" src={playlistImg} alt="playlist" />
                <div className="overlap-content">
                    <span>0</span>
                    <CgPlayList />
                </div>
            </figure>
            <div className="title-and-menu-wrapper">
                <h3 className="playlist-name">Title</h3>
                <AiOutlineMore className="playlist-menu-icon" />
            </div>
        </div>
    )

}