import "./VideoListing.css";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Aside } from "../../Components/aside/aside";
import { VideoCard } from "../../Components/videoCard/videoCard";
import { useData } from "../../context/dataStore";


export const VideoListing = () => {

    const { dataStoreState } = useData();

    return (
        <>
        
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