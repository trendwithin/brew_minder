import React, { Component } from 'react';

class Grid extends Component {
  render() {
    return (
      <div className='grid'>
        <GridContainer
          data={this.props.data}
         />
      </div>
    );
  }
}

class GridContainer extends Component {
  render() {
    return (
      <div className='grid-container'>
        <GridRow
          data={this.props.data}
        />
      </div>
    );
  }
}

class GridRow extends Component {
  render() {
    const cols = [];
    this.props.data.map((element, index) => {
      cols.push(
        <div
          className='grid-content'
          key={index}
        >
          <GridCols
            cols={element}
          />
        </div>
      );
    });
    return (
      <div className='container'>
        {cols}
      </div>
    );
  }
}

class GridCols extends Component {
  render() {
    const header = '';
    const col = [];
    this.props.cols.map((element, index) => {
      col.push(
        <div
          className='col-md-6'
          key={index}
        >
          <BuildHeader
          key={element.establishment}
          locale={element.establishment}
          />
          <BuildList
            beerList={element.beers}
          />
        </div>
      );
    });
    return (
      <div className='row'>
      {col}
      </div>
    );
  }
}

class BuildHeader extends Component {
  render() {
    return (
      <h1>{this.props.locale}</h1>
    );
  }
}

class BuildList extends Component {
  render() {
    const liElements = [];
    this.props.beerList.map((element) => {
      liElements.push(
        <li
        className='list-group-item'
        key={element}
        >
        {element}
        </li>
      );
    });
    return (
      <ul className='list-group'>
        {liElements}
      </ul>
    );
  }
}
export default Grid;
