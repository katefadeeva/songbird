import React, { Component } from 'react';
import Header from '../header';
import RandomBird from '../random-bird';
import ErrorBoundry from "../error-boundry";

import './app.css';
import BirdsPage from "../birds-page";

export default class App extends Component {

  state = {
    showRandomBird: true
  }

  render() {
    return (
        <ErrorBoundry>
          <div className="wrapper">
            <Header />
            <RandomBird />
            <BirdsPage />
          </div>
        </ErrorBoundry>
    );
  };
};