import React, { Component } from 'react';

const Display = props => {

  const beerList = props.displayBeer.map(beer => {
    return (
      <li className='list-group-item' key={beer}>{beer}</li>
    );
  });

  return (
    <div className='container'>
      <div className='row'>
        <div id='search-results'>
          <ul className="col-md-12 list-group">
            {beerList}
          </ul>
        </div>
      </div>
    </div>
  );
};


export default Display;
