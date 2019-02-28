import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class PayForm extends Component {
  render() {
    return (
      <div className="payform">
        { this.props.children }
      </div>
    )
  }
}

ReactDOM.render(<PayForm/>, document.getElementById('app'));
