import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Grid from 'components/grid';
import SearchBar from 'components/brewery_search_bar';

class BrewMinderBuilder extends Component {
  state = {
    beerListings: [],
  };

  selectedBrewersName = (brewerName) => {
    const brewers = [];
    console.log(brewerName);
  };

  chunkArray = (arr, sizeOfChunk) => {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += sizeOfChunk) {
      chunkedArray.push(arr.slice(i, i + sizeOfChunk));
    }

    return chunkedArray;
  };

  render() {
    const dummyData = [
      {
        establishment: 'chucks',
        beers: ['one', 'two', 'three'],
      },
      {
        establishment: 'pinebox',
        beers: ['four', 'five', 'six'],
      },
      {
        establishment: 'fake',
        beers: ['seven', 'eight', 'nine'],
      },
      {
        establishment: 'data',
        beers: ['ten', 'eleven', 'twelve'],
      },
      {
        establishment: 'five',
        beers: ['ten', 'eleven', 'twelve'],
      },
    ];

    const formattedData = this.chunkArray(dummyData, 2);
    return (
      <div>
        <SearchBar
          onSearchBarSubmit={this.selectedBrewersName}
        />
        <Grid
          data={formattedData}
        />
      </div>
    );
  }
}

ReactDOM.render(<BrewMinderBuilder />, document.querySelector('#brew-minder'));
