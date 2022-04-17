import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { VideoListing } from "./Pages/Video-Listing/VideoListing";
import { VideoPlayer } from "./Pages/Video-player/videoPlayer";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<VideoListing />} />
        <Route path="/video/:videoId" element={<VideoPlayer />} />
      </Routes>
    </div>
  );
}

export default App;
