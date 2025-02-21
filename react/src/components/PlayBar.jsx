import { Component } from "react";

class PlayBar extends Component {
  render() {
    return (
      <div className="container-fluid fixed-bottom bg-container pt-1">
        <div className="row h-100">
          <div className="row h-100 flex-column justify-content-center align-items-center">
            <div className="col-6 col-md-4 playerControls">
              <div className="d-flex">
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
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayBar;
