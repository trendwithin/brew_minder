import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    searchTerm: '',
  };

  handleSearchInput = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  onSubmission = (event) => {
    event.preventDefault();
    this.props.onFormSubmission(this.state.searchTerm);
  };

  render() {
    return (
      <div className='serachbar' id='search'>
        <div className='container'>
          <div className='row'>
            <section className='col-8'>
              <form onSubmit={ this.onSubmission }
              >
                <div className='input-group'>
                  <input
                    placeholder = 'Enter Beer or Brewer'
                    className='form-control'
                    onChange={this.handleSearchInput}
                    />
                  <button
                    className='btn btn-primary'
                    type='submit'
                    >
                    Submit
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
