import axios from "axios";

export const addToLike = async (video, authState, dataStoreDispatch) => {

    if(authState.token){
        try {
            const res = await axios.post("/api/user/likes", {video}, { headers : { authorization: authState.token } });
            if(res.status === 201){
                dataStoreDispatch({ type : "LIKED_VIDEOS", payload : res.data.likes });
            }
            
        } catch (error) {
            alert(error);
        }
    }
}

export const removeFromLike = async (video, authState, dataStoreDispatch) => {
    try {
        const res = await axios.delete(`/api/user/likes/${video._id}`, { headers : { authorization: authState.token } });
        if(res.status === 200){
            dataStoreDispatch({ type : "LIKED_VIDEOS", payload : res.data.likes });
        }
        
    } catch (error) {
        alert(error);
    }
}