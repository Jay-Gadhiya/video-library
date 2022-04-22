import axios from "axios";

export const addToWatchLater = async (video, authState, dataStoreDispatch, navigate) => {

    if(authState.token){
        try {
            const res = await axios.post("/api/user/watchlater", { video }, { headers : { authorization: authState.token } });
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
        const res = await axios.delete(`/api/user/watchlater/${video._id}`, { headers : { authorization: authState.token } });
        if(res.status === 200){
            dataStoreDispatch({ type : "WATCH_LATER_VIDEOS", payload : res.data.watchlater });
        }
        
    } catch (error) {
        alert(error);
    }
}