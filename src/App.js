import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { VideoListing } from "./Pages/Video-Listing/VideoListing";
import { VideoPlayer } from "./Pages/Video-player/videoPlayer";
import { Login } from "./Pages/Authentication/Login";
import { Signup } from "./Pages/Authentication/Signup";
import  Mockman  from "mockman-js";
import { ProfilePage } from "./Pages/Profile/profile";
import { ProfileInfo } from "./Components/Profile/profile-info";
import { Settings } from "./Components/Profile/settings";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<VideoListing />} />
        <Route path="/video/:videoId" element={<VideoPlayer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile/" element={<ProfilePage />} >
          <Route path="" element={<ProfileInfo />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="/mock" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
