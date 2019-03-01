import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Error extends Component {
  render() {
    return (
      <div className="error">
        { this.props.children }
        Here is the error page
      </div>
    )
  }
}

ReactDOM.render(<Error/>, document.getElementById('app'));
