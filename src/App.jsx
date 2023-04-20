import CustomArtistPageMain from "./components/CustomArtistPageMain";
import CustomAlbumPageMain from "./components/CustomAlbumPageMain";
import CustomSearchPageMain from "./components/CustomSearchPageMain";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import HomePage from "./components/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Container fluid className="m-0 bg-custom-darkest">
        <Row>
          <Col className="p-0 d-none d-sm-block" xs={2} style={{ flex: "0 0 250px" }}>
            <Sidebar />
          </Col>
          <Col xs={9}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/artist/:artistId" element={<CustomArtistPageMain />} />
              <Route path="/album/:albumId" element={<CustomAlbumPageMain />} />
              <Route path="/search/:searchId" element={<CustomSearchPageMain />} />
            </Routes>
          </Col>
          <Player />
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
