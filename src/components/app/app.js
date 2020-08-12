import React, { Component } from 'react';
import Header from '../header';
// import RandomBird from '../random-bird';
import ErrorBoundry from "../error-boundry";

import './app.css';

export default class App extends Component {

  state = {
    showRandomBird: true
  }

  render() {
    return (
        <ErrorBoundry>
          <div className="wrapper">
            <Header />
            {/*<RandomBird />*/}
          </div>
        </ErrorBoundry>
    );
  };
};