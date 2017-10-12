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
    this.state = ({ beerListings: [] });
    this.selectedBrewersName = this.selectedBrewersName.bind(this);
  }

  selectedBrewersName(brewerName) {
    let brewers = [];
    ConstantsList.BREW_RLS.map(function (establishment) {
      let establishmentURL = Object.values(establishment);
      axios.get(establishmentURL).then(res => {
        let k = _.keys(establishment);
        let vals = loadCheerioWith(res, establishment, brewerName);
        let key = k[0];
        let obj = {};
        obj.name = key;
        obj.beers = vals;
        brewers.push(obj);
        console.log(brewers);
        this.setState({ beerListings: brewers });
      });
    }, this);
  }

  render() {
    return (
      <div>
        <SearchBar onSearchBarSubmit={this.selectedBrewersName} />
        <Display displayBeer={this.state.beerListings} />
      </div>
    );
  }
}

ReactDOM.render(<CurateBeerList />, document.querySelector('#beer-list'));
