import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Search extends Component {
  render() {
    return (
      <div className="search">
        { this.props.children }
      </div>
    )
  }
}

ReactDOM.render(<Search/>, document.getElementById('app'));
