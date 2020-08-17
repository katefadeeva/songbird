import React, {Component} from "react";
import BirdsData from "../../services";
import AudioPlayer from "../audio/audio";

import icon from "./bird.jpg";

import "./random-bird.css";
import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";

export default class RandomBird extends Component {

  state = {
    bird: {},
    birdImage: false,
    loading: false,
    error: false
  }

  render() {
    const {birdImage, loading, error} = this.state;
    const hasData = !(loading || error);
    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <BirdView /> : null;

    return (
        <div className="random-bird jumbotron rounded">
          {errorMessage}
          {spinner}
          {content}
        </div>
    );
  };
};

const BirdView = () => {
  return (
      <React.Fragment>
        <img className="bird-image" src={icon} alt="bird" />
        <div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h3>********</h3>
            </li>
            <li className="list-group-item">
              <AudioPlayer url={BirdsData[0][0].audio} />
            </li>
          </ul>
        </div>
      </React.Fragment>
  );
}