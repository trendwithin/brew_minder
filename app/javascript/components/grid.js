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
      <div className='container'>
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
        <GridCol
          key={index}
          column={element}
        />
      );
    });
    return (
      <div className='row'>
        {cols}
      </div>
    );
  }
}

class GridCol extends Component {
  render() {
    return (
      <div className='col-md-6'>
        <GridColumnHeader
          header={this.props.column.establishment}
        />
        <GridList
          list={this.props.column.beers}
        />
      </div>
    );
  }
}

class GridColumnHeader extends Component {
  render() {
    return (
      <h1>{this.props.header}</h1>
    );
  }
}

class GridList extends Component {
  render() {
    const liElements = [];
    this.props.list.map((element) => {
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
