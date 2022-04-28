import "./VideoListing.css";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Aside } from "../../Components/aside/aside";
import { VideoCard } from "../../Components/videoCard/videoCard";
import { useData } from "../../context/dataStore";
import { usePlayList } from "../../context/playList-context";
import { PlaylistModal } from "../../Components/playlistModal/playlistModal";



export const VideoListing = () => {

    const { dataStoreState } = useData();
    const {  openModal, setOpenModal } = usePlayList();

    return (
        <>
            {
                openModal
                &&
                <PlaylistModal />
            }
        
            <Navbar />

            <div className="aside-main-flex">
                <Aside />

                <div className="filter-and-main-flex">
                    <div className="filter-box">
                        {
                            dataStoreState.categories.map(category => (
                                <div key={category._id} className="filter-chip">
                                    { category.categoryName }
                                </div>
                            ))
                        }
                        
                    </div>
                    <main className="vid-listing-container" >
                        {
                            dataStoreState.videos.map( video => <VideoCard key={video._id} video={video} /> )
                        }
                        
                    </main> 
                </div>
          
            </div>
            
        </>
    )
}