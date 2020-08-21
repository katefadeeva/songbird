import React, {Component} from 'react';

import './header.css';

export default class Header extends Component {
  state = {
    score: null
  }

  componentDidMount() {
    const {score} = this.props;
    this.setState({
      score: score
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.score !== prevProps.score) {
      this.setState({
        score: this.props.score
      })
    }
  }

  render() {
    return (
        <div className="header d-flex">
          <div className="top-panel d-flex">
            <div className="logo"></div>
            <h5>Score: <span className="score">{this.props.score}</span></h5>
          </div>
          <ul className="pagination">
            <li className="page-item active">
              <a href="#" className="page-link">Домашние</a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">Воробьиные</a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">Певчие птицы</a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">Лесные птицы</a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">Морские птицы</a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">Хищные птицы</a>
            </li>
          </ul>
        </div>
    );
  }
};