import React, { Component } from 'react';

class BrewerySearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
    this.onInputChange = this.onInputChange.bind(this);
  }

  clickedButton(event) {
    this.props.onSearchBarSubmit(this.state.searchTerm);
  }

  onInputChange(searchTerm) {
    this.setState({ searchTerm });
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <section className='col-8'>
            <div className='input-group'>
              <input placeholder = 'Enter a brewer'
                className='form-control'
                value={this.state.searchTerm}
                onChange={event => this.onInputChange(event.target.value)} />
              <button onClick={this.clickedButton.bind(this)}>Submit</button>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default BrewerySearchBar;
