import "../../Pages/Video-Listing/VideoListing.css";
import { Aside } from "../../Components/aside/aside";
import { Navbar } from "../../Components/Navbar/Navbar";
import { useData } from "../../context/dataStore";
import { PlaylistCard } from "../../Components/playlistCard/playlistCard";



export const PlaylistPage = () => {

    const { dataStoreState } = useData();

    return (
        <>
        
            <Navbar />

            <div className="aside-main-flex">
                <Aside />

                <div className="filter-and-main-flex">
                    <main className="vid-listing-container" >
                        <PlaylistCard />
                        <PlaylistCard />
                        <PlaylistCard />
                        <PlaylistCard />
                        <PlaylistCard />
                        <PlaylistCard />
                        <PlaylistCard />
                    </main> 
                </div>
          
            </div>
            
        </>
    )
}