import React, {Component} from "react";

export default class ItemBird extends Component {
  state = {
    id: this.props.id,
    item: this.props.item,
    randomItem: this.props.randomItem,
    className: "list-group-item",
    score: this.props.score,
    indicate: false
  }

  playAudio = (id) => {
    const audio = document.getElementById(id);
    audio.currentTime = 0;
    audio.play();
  }

  updateSelectedItem = (item, randomItem) => {
    if (item === randomItem && this.state.indicate === false) {
      this.setState({
        className: 'list-group-item success',
        score: this.state.score + 5,
        indicate: true
      });
      this.playAudio('successSound');
      this.props.success(true);
      this.props.scoreCount(this.state.score);
    } else if (item !== randomItem && this.state.indicate === false) {
      this.playAudio('errorSound');
      this.setState({
        className: 'list-group-item error',
        score: this.state.score - 1,
        indicate: true
      });
    } else {
      return;
    }
  }

  render() {
    const {id, randomItem, className, item} = this.state;
    const name = item.name;
    return (
        <li
            key={item.id}
            onClick={() => {
              this.props.onItemSelected(id);
              this.updateSelectedItem(item, randomItem);
        }}
            className={className}>
          <span className="li-btn"></span>
          {name}
        </li>
    );
  }
}