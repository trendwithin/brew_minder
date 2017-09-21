import React, { Component } from 'react';

class BeerList extends Component {
  render() {
    const { beer } = this.props;
    return (
      <li className='list-group-item' key={beer}>{beer}</li>
    );
  }
}

export default BeerList;
