import React, { Component } from 'react';

class BrewerySearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
    this.onInputChange = this.onInputChange.bind(this);
  }

  clickedButton() {
    this.props.onSearchBarSubmit(this.state.searchTerm);
  }

  onInputChange(searchTerm) {
    this.setState({ searchTerm });
  }

  render() {
    return (
      <div>
        <input placeholder = 'Enter a brewer'
               value={this.state.searchTerm}
               onChange={event => this.onInputChange(event.target.value)} />
        <button onClick={this.clickedButton.bind(this)}>Submit</button>
      </div>
    );
  }
}

export default BrewerySearchBar;
