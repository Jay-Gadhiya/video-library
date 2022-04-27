import axios from "axios";

export const getAllPlaylist = (token) => {
    return axios.get("/api/user/playlists", {
      headers: { authorization: token },
    });
};

export const createNewPlaylist = (token, playListTitle) => {
    return axios.post(
      "/api/user/playlists",
      { playlist: { title: playListTitle } },

      {
        headers: { authorization: token },
      }
    );
};
  

export const deletePlaylist = (token, videoId) => {
    return axios.delete(`/api/user/playlists/${videoId}`, {
        headers: { authorization: token },
    });
};


export const getPlaylistVideos = (token, playListId) => {
    return axios.get(`/api/user/playlists/${playListId}`, {
      headers: { authorization: token },
    });
};


export const addVideoToPlaylist = (token, playListId, playListVideo) => {
    return axios.post(`/api/user/playlists/${playListId}`,
      { video : playListVideo },

      {
        headers: { authorization: token },
      }
    );
};


export const deleteVideoFromPlaylist = (token, playListId, videoId) => {
    return axios.delete(`/api/user/playlists/${playListId}/${videoId}`,
      {
        headers: { authorization: token },
      }
    );
};