import "./VideoListing.css";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Aside } from "../../Components/aside/aside";
import { VideoCard } from "../../Components/videoCard/videoCard";
import { useFetchData } from "../../Utility-functions/useFetchData";



export const VideoListing = () => {

    const { videos } = useFetchData();

    return (
        <>
            <Navbar />

            <div className="aside-main-flex">
                <Aside />

                <div className="filter-and-main-flex">
                    <div className="filter-box">
                        <div className="filter-chip chip-color">
                            All
                        </div>
                        <div className="filter-chip ">
                            Gadget
                        </div>
                        <div className="filter-chip ">
                            Laptops
                        </div>
                        <div className="filter-chip">
                            Gaming                       
                        </div>
                        <div className="filter-chip">
                            TED
                        </div>
                        <div className="filter-chip">
                            New to you
                        </div>
                    </div>
                    <main className="vid-listing-container" >
                        {
                            videos.map( video => <VideoCard key={video._id} video={video} /> )
                        }
                        
                    </main> 
                </div>
          
            </div>
            
        </>
    )
}