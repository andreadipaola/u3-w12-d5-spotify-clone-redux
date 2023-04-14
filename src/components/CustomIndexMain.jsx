import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import CustomFooter from "./CustomFooter";

const CustomIndexMain = () => {
  const URL = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
  const [artist, setArtist] = useState([]);
  const artistName = "queen";
  const fetchAlbums = async () => {
    try {
      const res = await fetch(URL + artistName);
      if (res.ok) {
        const obj = await res.json();
        setArtist(obj.data[0]);
        console.log(obj);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <Container className="mt-10 mb-10">
      <Row md={3} className="justify-content-center gy-3">
        {artist.map((singleArtist) => (
          <Col key={singleArtist.id} className="">
            <Card id="cardArticle" className="bg-custom-dark border-0 shadow">
              <Card.Img variant="top" src={singleArtist.image_url} />
              <Card.Body className="p-4 d-flex flex-column">
                <div className="mb-3">
                  <Card.Title className="text-custom-white display-5 mb-4 text-truncate">
                    {singleArtist.title}
                  </Card.Title>
                  <Card.Text className="text-custom-darkgray">{singleArtist.summary}</Card.Text>
                </div>
                {/* <Card.Text className="text-custom-darkgray">{article.featured}</Card.Text> */}
                <Card.Text className="fw-bold text-custom-white">{singleArtist.news_site}</Card.Text>
                <div className="mt-auto"></div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <CustomFooter />
    </Container>
  );
};

export default CustomIndexMain;
