import "./aside.css";
import { ImHome } from 'react-icons/im';
import { CgPlayList } from 'react-icons/cg';
import { AiFillLike } from 'react-icons/ai';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { FaHistory } from 'react-icons/fa';


export const Aside = () => {
    return (
        <aside className="vid-aside-container" >
            <div className="aside-title-box">
                <ImHome className="vid-aside-icon active" />
                <p className="vid-aside-title active">Home</p>
            </div>
            <div className="aside-title-box">
                <CgPlayList className="vid-aside-icon playlist-icon" />
                <p className="vid-aside-title">Playlist</p>
            </div>
            <div className="aside-title-box">
                <AiFillLike className="vid-aside-icon" />
                <p className="vid-aside-title mr-top">Likes</p>
            </div>
            <div className="aside-title-box">
                <BsFillBookmarkFill className="vid-aside-icon" />
                <p className="vid-aside-title mr-top">Watch Later</p>
            </div>
            <div className="aside-title-box">
                <FaHistory className="vid-aside-icon" />
                <p className="vid-aside-title mr-top">History</p>
            </div>
        </aside>
    )
}