import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class OrderInfo extends Component {
  render() {
    return (
      <div className="orderinfo">
        { this.props.children }
      </div>
    )
  }
}

ReactDOM.render(<OrderInfo/>, document.getElementById('app'));
