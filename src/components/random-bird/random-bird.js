import React, {Component} from "react";
import AudioPlayer from "../audio/audio";

import icon from "./bird.jpg";

import "./random-bird.css";

export default class RandomBird extends Component {

  state = {
    bird: {},
    success: false
  }

  componentDidMount() {
    const { randomItem, success } = this.props;
    this.setState({
      bird: randomItem,
      success: success
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.success !== prevProps.success) {
      this.setState({
        success: this.props.success
      })
    }
  }

  render() {
    const { bird, success } = this.state;

    const content = success ? <BirdView audio={bird.audio} name={bird.name} image={bird.image}/> : <BirdView audio={bird.audio} name='******' image={icon}/>;

    return (
        <div className="random-bird jumbotron rounded">
          {content}
        </div>
    );
  };
};

const BirdView = ({audio, name, image}) => {
  return (
      <React.Fragment>
        <img className="bird-image" src={image} alt="bird" />
        <div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h3>{name}</h3>
            </li>
            <li className="list-group-item">
              <AudioPlayer url={audio} />
            </li>
          </ul>
        </div>
      </React.Fragment>
  );
}