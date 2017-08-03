import React, { Component } from 'react';

const Display = props => {
  const beerList = props.displayBeer.map(beer => {
    return (
      <li key={beer}>{beer}</li>
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {beerList}
    </ul>
  );
};


export default Display;
