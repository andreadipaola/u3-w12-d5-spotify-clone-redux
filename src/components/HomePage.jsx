/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Col, Container, Row } from "react-bootstrap";
import { getSongs } from "../redux/actions";

const artist = "Queen";
const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongs(artist));
  }, []);

  const songs = useSelector((state) => state.homePage.songs);
  console.log(songs);
  return (
    <Container fluid>
      <h2 className="text-custom-white pfs-24 mt-5 mb-3">{artist}</h2>

      <Row xs={2} sm={3} md={4} lg={5} xl={6} className="gy-2 p-0">
        {songs.length > 0 &&
          songs.slice(0, 6).map((song) => (
            <Col key={song.id}>
              <Card className="rounded p-3 bg-custom-dark shadow">
                <Card.Img variant="top" className="rounded mb-3" src={song.album.cover_medium} />
                <Card.Body className="p-0">
                  <Card.Title className="text-custom-white text-truncate pfs-14 fw-bold">{song.album.title}</Card.Title>
                  <Card.Text className="text-custom-gray pfs-12 text-truncate">{song.artist.name}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default HomePage;
