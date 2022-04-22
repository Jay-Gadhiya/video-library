import { deleteWatchLaterVideos, getWatchLaterVideos, postWatchLaterVideos } from "../services/watchLaterService";

export const getWatchLaterHandler = async (authState, dataStoreDispatch) => {

        try {
            const res = await getWatchLaterVideos(authState.token);
            if(res.status === 200){
                dataStoreDispatch({ type : "WATCH_LATER_VIDEOS", payload : res.data.watchlater });
            }
            
        } catch (error) {
            alert(error);
        }
}


export const addToWatchLater = async (video, authState, dataStoreDispatch, navigate) => {

    if(authState.token){
        try {
            const res = await postWatchLaterVideos(authState.token, video);
            if(res.status === 201){
                dataStoreDispatch({ type : "WATCH_LATER_VIDEOS", payload : res.data.watchlater });
            }
            
        } catch (error) {
            alert(error);
        }
    }
    else {
        navigate("/login");
    }
}

export const removeFromWatchLater = async (video, authState, dataStoreDispatch) => {
    try {
        const res = await deleteWatchLaterVideos(authState.token, video._id);
        if(res.status === 200){
            dataStoreDispatch({ type : "WATCH_LATER_VIDEOS", payload : res.data.watchlater });
        }
        
    } catch (error) {
        alert(error);
    }
}