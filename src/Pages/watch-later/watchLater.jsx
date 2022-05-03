import "../LikedVideos/liked.css";
import "./watchLater.css";
import { Aside } from "../../Components/aside/aside";
import { Navbar } from "../../Components/Navbar/Navbar";
import { HorizontalCard } from "../../Components/horizontalCard/horizontalCard";
import { useData } from "../../context/dataStore";
import { removeFromWatchLater } from "../../Utility-functions/watchLaterHandler";
import pageSideImg from "../../assets/page-side-img.svg";6

export const WatchLater = () => {

    const  { dataStoreState } = useData();
    const videosCount = dataStoreState.watchLater.length;

    return(
        <>
            <Navbar />

            <div className="aside-main-flex">
                <Aside />

                <div className="horizontal-main-container">
                    <div className="like-img-and-info">
                        <img className="horizontal-hero-img" src={pageSideImg} alt="like" />
                        <p className="liked-vid-heading">Watch Later videos</p>
                        <p className="liked-vid-count" >{videosCount} Videos</p>
                    </div>
                    <div className="card-show">
                        {
                            dataStoreState.watchLater.map( video => (
                                <HorizontalCard 
                                key={video._id} 
                                videos = {video}
                                deleteHandler = {removeFromWatchLater}
                                />
                            ) )
                        }
                        
                    </div>
                </div>        
            </div>
        
        </>
    )
}