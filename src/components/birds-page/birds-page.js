import React, {Component} from "react";
import BirdsList from "../birds-list";
import ItemDetails from "../item-details";
import ErrorBoundry from "../error-boundry";
import Row from "../row";
import "./birds-page.css"

export default class BirdsPage extends Component {

  state = {
    getData: this.props.getData,
    instruction: true,
    selectedBird: {},
    randomItem: this.props.randomItem,
    score: this.props.score
  }

  componentDidMount() {
    const { getData } = this.props;
    getData.sort((a,b) => {
      if (a.name < b.name) {return -1;}
      if (a.name > b.name) {return 1;}
    });
    this.setState({ getData: getData
    });
  }

  onBirdSelected = (selectedBird) => {
    const {getData} = this.state;
    const id = (getData.filter((item) => item.id === selectedBird));
    this.setState( {
      selectedBird: id[0],
      instruction: false
    });
  }

  render() {

    const {selectedBird, instruction, getData, randomItem, score} = this.state;
    const itemList = (
        <ErrorBoundry>
          <BirdsList
              onItemSelected = {this.onBirdSelected}
              getData = {getData}
              randomItem = {randomItem}
              score = {score}
              scoreCount = {this.props.scoreCount}
              success = {this.props.success}>
            {(i) => (`${i.name} `)}
          </BirdsList>
        </ErrorBoundry>

    );

    const content = instruction ? <DefaultBirdsDetails /> : <ItemDetails
        itemId={selectedBird.id}
        getData={selectedBird}>
    </ItemDetails>;

    const birdDetails = (
        <ErrorBoundry>
          {content}
        </ErrorBoundry>
    );

    return (
        <Row left={itemList}
             right={birdDetails} />
    );
  };
}

const DefaultBirdsDetails = () => {
  return (
      <div className="bird-details card">
        <p className="instruction">
          <span>Послушайте плеер</span>
          <span>Выберите птицу из списка</span>
        </p>
      </div>
  );
}