import React, { Component } from 'react';

class BrewerySearchBar extends Component {
  state = {
    searchTerm: '',
  };

  onInputChange = (searchTerm) => {
    this.setState({ searchTerm });
  };

  clickedButton = (event) => {
    this.props.onSearchBarSubmit(this.state.searchTerm);
  };

  render() {
    return (
      <div className='serachbar' id='search'>
        <div className='container'>
          <div className='row'>
            <section className='col-8'>
              <div className='input-group'>
                <input placeholder = 'Enter Beer or Brewer'
                  className='form-control'
                  value={this.state.searchTerm}
                  onChange={event => this.onInputChange(event.target.value)} />
                <button
                  onClick={this.clickedButton.bind(this)}
                  className='btn btn-primary'
                >
                  Submit
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default BrewerySearchBar;
