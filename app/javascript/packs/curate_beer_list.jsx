import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from 'components/brewery_search_bar';
import axios from 'axios';
import { loadCheerioWith } from '../WA/Seattle/pinebox/pinebox_utility';
import Display from 'components/display';

class CurateBeerList extends Component {
  constructor(props) {
    super(props);
    this.state = ({ bucket: [] });
    this.selectedBreweryName = this.selectedBreweryName.bind(this);
  }

  selectedBreweryName(brewerName) {
    // hardcoded url until live
    let url = 'http://www.pineboxbar.com/';
    let url2 = 'box.html';
    axios.get(url2).then(res => {
      this.setState({ bucket: loadCheerioWith(res, brewerName) });
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchBarSubmit={this.selectedBreweryName} />
        <Display displayBeer={this.state.bucket} />
      </div>
    );
  }
}

ReactDOM.render(<CurateBeerList />, document.querySelector('#beer-list'));
