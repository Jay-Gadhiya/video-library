import "./VideoListing.css";
import { AiOutlineSearch } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import { ImHome } from 'react-icons/im';
import { CgPlayList } from 'react-icons/cg';
import { AiFillLike } from 'react-icons/ai';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { FaHistory } from 'react-icons/fa';




export const VideoListing = () => {

    return (
        <>
            <nav className="vid-nav-container" >
                <p className="vid-brand-name">SkyNET</p>
                <div className="vid-search-container">
                    <AiOutlineSearch className="search-icon" />
                    <input className="vid-search-input" type="search" name="search" placeholder="Search..." />
                </div>
                <div className="vid-profile-container">
                    <FaUser className="vid-user-icon" />
                    <p className="vid-user-name" >Hi, Admin</p>
                </div>
            </nav>

            <aside className="vid-aside-container" >
                <div className="aside-title-box">
                    <ImHome className="vid-aside-icon" />
                    <p className="vid-aside-title">Home</p>
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

            <main></main>
        </>
    )
}