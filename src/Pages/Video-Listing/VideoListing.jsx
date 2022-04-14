import "./VideoListing.css";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Aside } from "../../Components/aside/aside";
import { VideoCard } from "../../Components/videoCard/videoCard";



export const VideoListing = () => {

    return (
        <>
            <Navbar />

            <div className="aside-main-flex">
                <Aside />
            
                <main className="vid-listing-container" >
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                </main>           
            </div>
            
        </>
    )
}