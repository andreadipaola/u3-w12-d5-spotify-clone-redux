import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import Player from "./components/Player";
import Index from "./components/Index";

function App() {
  return (
    <BrowserRouter>
      <SideBar />
      <Routes>
        <Route path="/" element={<Index />} />
        {/* <Route path="/artist/:artistId" element={<CustomArtistPageMain />} />
        <Route path="/album/:albumId" element={<CustomAlbumPageMain />} />
        <Route path="/search/:searchId" element={<CustomSearchPageMain />} /> */}
      </Routes>
      <Player />
    </BrowserRouter>
  );
}

export default App;
