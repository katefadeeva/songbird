import React, { Component } from 'react';
import BirdsData from "../../services";
import Header from '../header';
import RandomBird from '../random-bird';
import BirdsPage from "../birds-page";
import ErrorBoundry from "../error-boundry";

import './app.css';

import audioSuccess from "./success.mp3";
import audioError from "./error.mp3";


export default class App extends Component {

  constructor(props) {
    super(props);
    this.getData = BirdsData[0];
    this.randomItem =  this.getData[Math.floor(Math.random() * this.getData.length)]
    this.state = {
      success: false,
      score: 0
    }
  }

  success = (value) => {
    this.setState({
      success: value
    })
  }

  scoreCount = (score) => {
    console.log(score)
    if (score <= 0) {
      this.setState({
        score: 0
      })
    } else {
      this.setState({
        score: score
      })
    }

  }

  render() {
    const {success, score} = this.state;
    return (
        <ErrorBoundry>
          <div className="container">
            <Header score={score}/>
            <RandomBird randomItem={this.randomItem} success={success}/>
            <BirdsPage
                getData={this.getData}
                score = {score}
                randomItem={this.randomItem}
                success={this.success}
                scoreCount={this.scoreCount}
            />
            <button className="btn">Next Level</button>
            <audio src={audioSuccess} id="successSound"></audio>
            <audio src={audioError} id="errorSound"></audio>
          </div>
        </ErrorBoundry>
    );
  };
}