import axios from "axios";
import { deleteLikeVideo, getLikeVideo, postLikeVideo } from "../services/likeService";

export const getLikeHandler = async (authState, dataStoreDispatch) => {

    try {
        const res = await getLikeVideo(authState.token);
        if(res.status === 200){
            dataStoreDispatch({ type : "LIKED_VIDEOS", payload : res.data.likes });
    }
        
    } catch (error) {
        alert(error);
    }

}

export const addToLike = async (video, authState, dataStoreDispatch, navigate) => {

    if(authState.token){
        try {
            const res = await postLikeVideo(authState.token, video);
            if(res.status === 201){
                dataStoreDispatch({ type : "LIKED_VIDEOS", payload : res.data.likes });
            }
            
        } catch (error) {
            alert(error);
        }
    }
    else {
        navigate("/login");
    }
}

export const removeFromLike = async (authState, videoId, dataStoreDispatch, empty1, empty2) => {
    try {
        const res = await deleteLikeVideo(authState.token, videoId);
        if(res.status === 200){
            dataStoreDispatch({ type : "LIKED_VIDEOS", payload : res.data.likes });
        }
        
    } catch (error) {
        alert(error);
    }
}