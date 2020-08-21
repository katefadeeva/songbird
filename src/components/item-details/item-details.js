import React, { Component } from 'react';

import './item-details.css';
import Spinner from "../spinner";
import AudioPlayer from "../audio";


export default class ItemDetails extends Component {

  state = {
    item: null
  }

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData } = this.props;
    if ( !itemId ) {
      return;
    }
    this.setState({
      item: getData
    });
  }

  render() {

    const {item} = this.state;

    if(!item) {
      return (
          <div className="item-details card">
            <Spinner />
          </div>
      );
    }

    const { name, species, description, image, audio } = item;

    return (
        <div className="bird-details card">
          <div className="card-body">
            <img className="bird-image" src={image} alt={name} />
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <h4>{name}</h4>
              </li>
              <li className="list-group-item">
                <span>{species}</span>
              </li>
              <li className="list-group-item">
                <AudioPlayer url={audio} />
              </li>
            </ul>
          </div>
          <span className="bird-description">{description}</span>
        </div>
    )
  }
}