import { Aside } from "../../Components/aside/aside";
import { Navbar } from "../../Components/Navbar/Navbar";
import likeImg2   from "../../assets/like-img.svg";
import likeImg   from "../../assets/like-wall.svg";
import "./liked.css";
import { HorizontalCard } from "../../Components/horizontalCard/horizontalCard";
import { useData } from "../../context/dataStore";
import { removeFromLike } from "../../Utility-functions/likeHandler";

export const LikedPage = () => {

    const  { dataStoreState } = useData();
    const videosCount = dataStoreState.likedVideos.length;

    return(
        <>
            <Navbar />

            <div className="aside-main-flex">
                <Aside />

                <div className="horizontal-main-container">
                    <div className="like-img-and-info">
                        <img className="horizontal-hero-img" src={likeImg} alt="like" />
                        <p className="liked-vid-heading">Liked videos</p>
                        <p className="liked-vid-count" >{videosCount} Videos</p>
                    </div>
                    <div className="card-show">
                        {
                            dataStoreState.likedVideos.map( video => (
                                <HorizontalCard 
                                key={video._id} 
                                videos = {video}
                                deleteHandler = {removeFromLike}
                                />
                            ) )
                        }
                        
                    </div>
                </div>        
            </div>
        
        </>
    )
}