import React, { Component } from 'react';
import BeerList from './beer_list';

const Display = props => {
  const beerList = props.displayBeer.map((beer) => {
    return(
      <div>
        <h1>{beer.name}</h1>
        <ul className="col-md-12 list-group">
        {beer.beers.map((beer) => {
          return (
            < BeerList beer={beer} />
          );
        })}
        </ul>
      </div>
    );
  });

  return (
    <div className='container'>
      <div className='row'>
        <div id='search-results'>
          {beerList}

        </div>
      </div>
    </div>
  );
};

export default Display;
