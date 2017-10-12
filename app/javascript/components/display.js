import React, { Component } from 'react';
import BeerList from './beer_list';

const Display = props => {

  const beerList = props.displayBeer.map((beer) => {
    let uniqueKey = 0;
    return(
      <div className="row col-md-6 card card-block">
        <h1 className="card-title">{beer.name}</h1>
        <ul className="list-group card-text">
          {beer.beers.map((beer) => {
            return (
              <BeerList beer={beer} />
            );
          })}
      </ul>
    </div>
    );
  });

  return (
    <div className='container'>
      <div id='search-results'>
        <div className='row'>
          {beerList}
        </div>
      </div>
    </div>
  );
};

export default Display;
