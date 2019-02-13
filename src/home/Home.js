import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        { this.props.children }
        Here is home
      </div>
    )
  }
}

//ReactDOM.render(<Home/>, document.getElementById('app'));
