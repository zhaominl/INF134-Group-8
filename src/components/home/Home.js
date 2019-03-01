import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Filter from './Filter';

export default class Home extends Component {
  render() {
    return (
      <div className="home" id="home">
        { this.props.children }
        Here is home
        <Filter></Filter>
      </div>
    )
  }
}

ReactDOM.render(<Home/>, document.getElementById('app'));
