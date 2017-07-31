import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Test from 'components/test';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Test />
        Test From Beer Me
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#beer-me'));
