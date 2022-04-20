import { Aside } from "../../Components/aside/aside";
import { Navbar } from "../../Components/Navbar/Navbar";
import { AiFillLike } from 'react-icons/ai';
import { CgPlayList } from 'react-icons/cg';
import { MdOutlineWatchLater } from 'react-icons/md';
import { IoIosShareAlt } from 'react-icons/io';
import React from 'react'
import ReactPlayer from 'react-player/lazy'
import "../Video-Listing/VideoListing.css";
import "./videoPlayer.css";
import { useParams } from "react-router-dom";
import { useData } from "../../context/dataStore";
import axios from "axios";
import { useAuth } from "../../context/authentication-context";
import { addToLike, removeFromLike } from "../../Utility-functions/likeHandler";

export const VideoPlayer = () => {

    const { videoId } = useParams();
    const { dataStoreState, dataStoreDispatch } = useData();
    const { authState } =useAuth();
    const video = dataStoreState.videos.length !== 0 && dataStoreState.videos.find( video => videoId === video._id );
    const isLiked = dataStoreState.likedVideos.find(item => item._id === video._id);

    
    return (
        <>
            <Navbar />

            <div className="aside-main-flex">
                <Aside />

                <section className="video-and-notes-container">
                    <div className="video-container">
                        <div className="video-player">
                            <ReactPlayer 
                                url={`https://www.youtube.com/watch?v=${videoId}`}
                                controls={true} 
                                playing={true}
                                muted={true}
                                className="react-player"
                                width="100%"
                                height="100%"
                            />
                        </div>
                        <div className="video-body">
                            <p className="video-player-title" >{video.title}</p>
                            <p className="vid-channel">{video.channel}</p>
                            <p className="vid-views">{video.views} views</p>
                            <div className="video-player-icons">

                                <div className="vid-option">
                                    {
                                        isLiked
                                        ?
                                        <>
                                            <AiFillLike onClick={() => removeFromLike(video, authState, dataStoreDispatch)} className="vid-player-icon is-active" />
                                            <p className="option-name" >Liked</p>
                                        </>
                                        :
                                        <>
                                            <AiFillLike onClick={() =>addToLike(video, authState, dataStoreDispatch)} className="vid-player-icon" />
                                            <p className="option-name" >Like</p>
                                        </>

                                    }
                                    
                                </div>
                                <div className="vid-option">
                                    <MdOutlineWatchLater className="vid-icon-watch-Later" />
                                    <p className="option-name" >Watch Later</p>
                                </div>
                                <div className="vid-option">
                                    <CgPlayList className="vid-icon-save" />
                                    <p className="option-name" >Save</p>
                                </div>
                                <div className="vid-option">
                                    <IoIosShareAlt className="vid-player-icon" />
                                    <p className="option-name" >Share</p>
                                </div>                              
                                
                            </div>
                        </div>
                    </div>

                    <div className="notes-container">
                        <p className="note-title">Notes</p>
                        <input className="notes-input" type="text" name="title" placeholder="Title" />
                        <textarea className="notes-input notes-textarea" placeholder="Write note..." name="note" cols="21" rows="2"></textarea>
                        <div className="notes-btns">
                            <button className="btn pading btn-primary ">Save</button>
                            <button className="btn btn-primary-outline pading border">Discard</button>
                        </div>
                    </div>

                </section>
          
            </div>
            
        </>
    )
}
 
