import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ConstantsList from './constants';
import SearchBar from 'components/brewery_search_bar';
import axios from 'axios';
import { loadCheerioWith } from '../utils/loadCheerio';
import Display from 'components/display';

class CurateBeerList extends Component {
  constructor(props) {
    super(props);
    this.state = ({ bucket: [['Find Beers']] });
    this.selectedBrewersName = this.selectedBrewersName.bind(this);
  }

  selectedBreweryName(brewerName) {
    // hardcoded url until live
    let url = 'http://www.pineboxbar.com/';
    let url2 = 'box.html';
    axios.get(url2).then(res => {
      this.setState({ bucket: loadCheerioWith(res, brewerName) });
    });
  }

  selectedBrewersName(brewerName) {
    let brewers = [];
    ConstantsList.BREW_RLS.map(function (establishment) {
      let localURL = Object.values(establishment);
      axios.get(localURL).then(res => {
        let k = _.keys(establishment);
        let vals = loadCheerioWith(res, establishment, brewerName);
        brewers.push([k, vals]);
      });
    }, this);

    this.setState({ bucket: brewers });

  }

  render() {
    return (
      <div>
        <SearchBar onSearchBarSubmit={this.selectedBrewersName} />
        <Display displayBeer={this.state.bucket} />
      </div>
    );
  }
}

ReactDOM.render(<CurateBeerList />, document.querySelector('#beer-list'));
