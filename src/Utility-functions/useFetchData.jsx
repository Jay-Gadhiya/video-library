import { useEffect, useState } from "react";
import axios from "axios";


const useFetchData = () => {

  const [videos, setVideos] = useState([]);

  useEffect(
    () =>
      (async () => {
        try {
          const res = await axios.get("/api/videos");
          if(res.status === 200) {
            setVideos(() => res.data.videos);
          }
        } catch (error) {
           return error;
        }
      })(),
    []
  );

  return { videos };

}

export { useFetchData };