// import "./App.css";
import CustomIndexMain from "./components/CustomIndexMain";
import CustomArtistPageMain from "./components/CustomArtistPageMain";
import CustomAlbumPageMain from "./components/CustomAlbumPageMain";
import CustomSearchPageMain from "./components/CustomSearchPageMain";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomSideBar from "./components/CustomSideBar";
import CustomPlayer from "./components/CustomPlayer";

function App() {
  return (
    <BrowserRouter>
      <CustomSideBar />
      <Routes>
        <Route path="/" element={<CustomIndexMain />} />
        <Route path="/artist/:artistId" element={<CustomArtistPageMain />} />
        <Route path="/album/:albumId" element={<CustomAlbumPageMain />} />
        <Route path="/search/:searchId" element={<CustomSearchPageMain />} />
      </Routes>
      <CustomPlayer />
    </BrowserRouter>
  );
}

export default App;
