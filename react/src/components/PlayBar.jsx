import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class PlayBar extends Component {
  render() {
    return (
      <Container fluid className="d-flex fixed-bottom bg-container pt-1">
        <Row className="row h-100">
          <Col lg={10} className="d-flex ">
            <div>
              <a href="#">
                <img src="./src/assets/playerbuttons/shuffle.png" alt="shuffle" />
              </a>
              <a href="#">
                <img src="./src/assets/playerbuttons/prev.png" alt="prev" />
              </a>
              <a href="#">
                <img src="./src/assets/playerbuttons/play.png" alt="play" />
              </a>
              <a href="#">
                <img src="./src/assets/playerbuttons/next.png" alt="next" />
              </a>
              <a href="#">
                <img src="./src/assets/playerbuttons/repeat.png" alt="repeat" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PlayBar;
