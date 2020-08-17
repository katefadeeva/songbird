import React, { Component } from 'react';
import Spinner from "../spinner";

import './item-list.css';

export default class ItemList extends Component {

  state = {
    itemList: null
  }

  componentDidMount() {
    const { getData } = this.props;
    getData.sort((a,b) => {
      if (a.name < b.name) {return -1;}
      if (a.name > b.name) {return 1;}
    });
    this.setState({ itemList: getData
          });
  }

  renderItems(arr) {
    return arr.map((item) => {
      const {id} = item;
      const name = item.name;
      return (
          <li className="list-group-item"
              key={id}
              onClick={() => this.props.onItemSelected(id)}>
            <span className="li-btn"></span>
            {name}, {id}
          </li>
      );
    });
  }

  render() {

    const { itemList } = this.state;

    if (!itemList) {
      return <Spinner />
    }

    const items = this.renderItems(itemList);

    return (
        <ul className="item-list list-group">
          {items}
        </ul>
    );
  }
}