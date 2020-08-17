import React, {Component} from "react";
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import BirdsData from "../../services";
import ErrorBoundry from "../error-boundry";
import Row from "../row";
import "./birds-page.css"

export default class BirdsPage extends Component {

  state = {
    instruction: true,
    selectedBird: 0
  }

  onBirdSelected = (selectedBird) => {
    this.setState( {
      selectedBird: selectedBird,
      instruction: false
    });
  }

  render() {

    const {selectedBird, instruction} = this.state;

    const itemList = (
        <ErrorBoundry>
          <ItemList
              onItemSelected = {this.onBirdSelected}
              getData = {BirdsData[0]}>
            {(i) => (`${i.name} `)}
          </ItemList>
        </ErrorBoundry>

    );

    const content = instruction ? <DefaultBirdsDetails /> : <ItemDetails
        itemId={BirdsData[0][selectedBird].id}
        getData={BirdsData[0][selectedBird]}>
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