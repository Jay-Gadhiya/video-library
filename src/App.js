import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { VideoListing } from "./Pages/Video-Listing/VideoListing";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<VideoListing />} />
      </Routes>
    </div>
  );
}

export default App;
