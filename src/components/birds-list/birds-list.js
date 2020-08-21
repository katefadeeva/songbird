import React, { Component } from 'react';
import Spinner from "../spinner";
import ItemBird from "../item-bird";

import './birds-list.css';

export default class BirdsList extends Component {

  state = {
    itemList: this.props.getData,
    randomItem: this.props.randomItem,
    score: this.props.score,
    step: 0,
    win: false
  }

  renderItems(arr) {
    return arr.map((item) => {
      const {id} = item;
      const {randomItem, win, step} = this.state;
      const {onItemSelected, scoreCount, success} = this.props;
      return (
          <ItemBird
              key={id} id={id} step={step}
              randomItem={randomItem} item={item}
              onItemSelected={onItemSelected}
              scoreCount={scoreCount}
              success={success}
              win={win}
              />
      );
    });
  }

  render() {

    const { itemList} = this.state;
    if (!itemList) {
      return (<ul className="item-list list-group">
                  <Spinner />
              </ul>
      )}
    const items = this.renderItems(itemList);
    return (
        <ul className="item-list list-group">
          {items}
        </ul>
    );
  }
}