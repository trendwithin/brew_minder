import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ConstantsList from '../utils/constant_files/wa_constants';
import SearchBar from 'components/brewery_search_bar';
import axios from 'axios';
import { loadCheerioWith } from '../utils/loadCheerio';
import Display from 'components/display';

class CurateBeerList extends Component {
  constructor(props) {
    super(props);
    this.state = ({ bucket: [] });
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
        let key = k[0];
        let obj = {};
        obj.name = key;
        obj.beers = vals;
        brewers.push(obj);
        this.setState({ bucket: brewers });
      });
    }, this);
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
