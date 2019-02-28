import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Pay extends Component {
  render() {
    return (
      <div className="pay">
        { this.props.children }
        here is pay
      </div>
    )
  }
}

ReactDOM.render(<Pay/>, document.getElementById('app'));
