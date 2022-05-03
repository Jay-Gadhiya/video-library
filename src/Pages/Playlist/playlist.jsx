import "../../Pages/Video-Listing/VideoListing.css";
import { Aside } from "../../Components/aside/aside";
import { Navbar } from "../../Components/Navbar/Navbar";
import { PlaylistCard } from "../../Components/playlistCard/playlistCard";
import { usePlayList } from "../../context/playList-context";



export const PlaylistPage = () => {

    const { playlistState } = usePlayList();

    return (
        <>
            <Navbar />

            <div className="aside-main-flex">
                <Aside />

                <div className="filter-and-main-flex">
                    <main className="vid-listing-container" >
                       {
                           playlistState.playlists.map( playlist => (
                               <PlaylistCard key={playlist._id} playlist = {playlist} />
                           ) )
                       }
                    </main> 
                </div>
          
            </div>
            
        </>
    )
}