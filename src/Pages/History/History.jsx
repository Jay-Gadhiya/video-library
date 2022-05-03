import "../LikedVideos/liked.css";
import { Aside } from "../../Components/aside/aside";
import { Navbar } from "../../Components/Navbar/Navbar";
import { HorizontalCard } from "../../Components/horizontalCard/horizontalCard";
import { useData } from "../../context/dataStore";
import { clearTheHistory, removeFromHistory } from "../../Utility-functions/historyHandler";
import { useAuth } from "../../context/authentication-context";
import pageSideImg from "../../assets/page-side-img.svg";

export const HistoryPage = () => {

    const  { dataStoreState, dataStoreDispatch } = useData();
    const  { authState } = useAuth();
    const videosCount = dataStoreState.historyVideos.length;

    return(
        <>
            <Navbar />

            <div className="aside-main-flex">
                <Aside />

                <div className="horizontal-main-container">
                    <div className="like-img-and-info">
                        <img className="horizontal-hero-img" src={pageSideImg} alt="like" />
                        <p className="liked-vid-heading">History videos</p>
                        <p className="liked-vid-count" >{videosCount} Videos</p>
                        <button onClick={() => clearTheHistory(authState, dataStoreDispatch)} className="btn btn-primary-outline btn-clear-history">Clear History</button>
                    </div>
                    <div className="card-show">
                        {
                            dataStoreState.historyVideos.map( video => (
                                <HorizontalCard 
                                    key={video._id} 
                                    videos = {video}
                                    deleteHandler = {removeFromHistory}
                                />
                            ) )
                        }
                        
                    </div>
                </div>        
            </div>
        
        </>
    )
}