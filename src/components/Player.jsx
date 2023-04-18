import { Col, Container, Row } from "react-bootstrap";

const Player = () => {
  return (
    <Container fluid className="bg-container pt-1 fixed-bottom">
      <Row>
        <Col lg={{ span: 10, offset: 2 }}>
          <Row>
            <Col
              xs={{ span: 6, offset: 3 }}
              md={{ span: 4, offset: 4 }}
              lg={{ span: 2, offset: 5 }}
              className="playerControls mt-1"
            >
              <Row className="flex-nowrap">
                <a href="#">
                  <img src="playerbuttons/Shuffle.png" alt="shuffle" />
                </a>
                <a href="#">
                  <img src="playerbuttons/Previous.png" alt="shuffle" />
                </a>
                <a href="#">
                  <img src="playerbuttons/Play.png" alt="shuffle" />
                </a>
                <a href="#">
                  <img src="playerbuttons/Next.png" alt="shuffle" />
                </a>
                <a href="#">
                  <img src="playerbuttons/Repeat.png" alt="shuffle" />
                </a>
              </Row>
            </Col>
          </Row>
          <div className="row justify-content-center playBar py-3">
            <Col xs={8} md={6}>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </Col>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Player;
