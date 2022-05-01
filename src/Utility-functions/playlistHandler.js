import { getAllPlaylist, postNewPlaylist, deletePlaylist, getPlaylistVideos, postVideoPlaylist, deleteVideoPlaylist } from "../services/playlistService";

export const getPlaylistHandler = async (authState, playlistDispatch) => {

    try {
        const res = await getAllPlaylist(authState.token);
        if(res.status === 200){
            playlistDispatch({ type : "PLAYLISTS", payload : res.data.playlists });
    }
        
    } catch (error) {
        alert(error);
    }

}


export const createPlaylistHandler = async (playListTitle, authState, playlistDispatch, navigate) => {

    if(authState.token){
        try {
            const res = await postNewPlaylist(authState.token, playListTitle);
            if(res.status === 201){
                playlistDispatch({ type : "PLAYLISTS", payload : res.data.playlists });
            }
            
        } catch (error) {
            alert(error);
        }
    }
    else {
        navigate("/login");
    }
}


export const deletePlaylistHandler = async (playlistId, authState, playlistDispatch) => {
    try {
        const res = await deletePlaylist(authState.token, playlistId);
        if(res.status === 200){
            playlistDispatch({ type : "PLAYLISTS", payload : res.data.playlists });
        }
        
    } catch (error) {
        alert(error);
    }
}

export const getPlaylistVideosHandler = async (authState, playlistDispatch, playlistId) => {

    try {
        const res = await getPlaylistVideos(authState.token, playlistId);
        if(res.status === 200){
            playlistDispatch({ type : "PLAYLISTS_VIDEO_UPDATE", payload : res.data.playlists });
    }
        
    } catch (error) {
        alert(error);
    }

}


export const addToPlaylistHandler = async ( authState, playlistDispatch, playListId, playListVideo ) => {

        try {
            const res = await postVideoPlaylist(authState.token, playListId, playListVideo);
            console.log(res);
            if(res.status === 201){
                playlistDispatch({ type : "PLAYLISTS_VIDEO_UPDATE", payload : res.data.playlist });
            }
            
        } catch (error) {
            alert(error);
        }
}

export const deletePlaylistVideoHandler = async (authState, videoId, undefined, playlistId, playlistDispatch) => {
    try {
        const res = await deleteVideoPlaylist(authState.token, playlistId, videoId);
        if(res.status === 200){
            playlistDispatch({ type : "PLAYLISTS_VIDEO_UPDATE", payload : res.data.playlist });
        }
        
    } catch (error) {
        alert(error);
    }
}