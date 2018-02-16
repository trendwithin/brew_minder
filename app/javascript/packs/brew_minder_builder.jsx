import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Grid from 'components/grid';
import SearchBar from 'components/search_bar';
import ConstantsList from '../utils/constant_files/wa_constants';
import axios from 'axios';
import { loadCheerioWith } from '../utils/loadCheerio';
import { chunkArray, testData, fetchBrewer } from '../utils/helpers';

class BrewMinderBuilder extends Component {
  state = {
    beerListings: [],
    brewer: '',
  };

  onFormSubmission = (term) => {
    let brewers = [];
    ConstantsList.BREW_RLS.map(function (establishment) {
      this.setState({ brewer: term });
      let establishmentURL = Object.values(establishment);
      axios.get(establishmentURL).then(res => {
        let k = _.keys(establishment);
        let vals = loadCheerioWith(res, establishment, term);
        let key = k[0];
        let obj = {};
        obj.establishment = key;
        obj.beers = vals;
        brewers.push(obj);
        this.setState({ beerListings: brewers });
      });
    }, this);

    const formatData = chunkArray(brewers, 2);
  };

  render() {
    return (
      <div>
        <SearchBar onFormSubmission={this.onFormSubmission}/>
        <Grid
          data={this.state.beerListings}
        />
      </div>
    );
  }
}

ReactDOM.render(<BrewMinderBuilder />, document.querySelector('#brew-minder'));
