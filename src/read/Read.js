import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Read extends Component {
  render() {
    return (
      <div className="read">
        { this.props.children }
        here is read
      </div>
    )
  }
}

ReactDOM.render(<Read/>, document.getElementById('app'));
