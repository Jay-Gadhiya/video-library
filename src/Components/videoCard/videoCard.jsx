import "./videoCard.css";
import { AiOutlineMore } from 'react-icons/ai';

export const VideoCard = () => {
    
    return (
        <div className="vid-main-container">
            <figure className="vid-img-contaier">
                <img className="vid-img" src="https://i3.ytimg.com/vi/3cUomhrmEnI/maxresdefault.jpg" alt="vidImg" />
                <span className="vid-duration" >17:55</span>
            </figure>
        
            <div className="vid-body-continer">
                <img 
                className="avatar avatar-small" 
                src="https://yt3.ggpht.com/gBZ6aUsFE-je2mVwL09-w288a265LtupuqoePjttH9UC5vcU8oOO73CFtkI2esBlQbqMVsLZs9o=s88-c-k-c0x00ffffff-no-rj" alt="badge" />
                <div className="vid-info-box">
                    <p className="vid-title" >Best Smartphone Under aaa aaa</p>
                    <p className="vid-channel">Technical Guruji</p>
                    <p className="vid-views">76K Views</p>
                </div>
                <AiOutlineMore className="menu-icon" />
            </div>
        </div>
    )
}