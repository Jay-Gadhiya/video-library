import "./videoCard.css";
import { AiOutlineMore } from 'react-icons/ai';
import { getUrl } from "../../Utility-functions/getUrl";
import { Link } from "react-router-dom";

export const VideoCard = ({video}) => {
    
    const imgUrl = getUrl(video._id);
    
    return (
        <div className="vid-main-container">
            <Link to={`/video/${video._id}`} >
                <figure className="vid-img-contaier">
                    <img className="vid-img" src={imgUrl} alt="vidImg" />
                    <span className="vid-duration" >{video.duration}</span>
                </figure>
            </Link>
        
            <div className="vid-body-continer">
                <img 
                className="avatar avatar-small" 
                src={video.channelAvatar} alt="badge" />
                <div className="vid-info-box">
                    <p className="vid-title" >{video.title}</p>
                    <p className="vid-channel">{video.channel}</p>
                    <p className="vid-views">{video.views} Views</p>
                </div>
                <AiOutlineMore className="menu-icon" />
            </div>
        </div>
    )
}