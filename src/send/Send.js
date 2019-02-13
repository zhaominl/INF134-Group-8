import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Send extends Component {
  render() {
    return (
      <div className="send">
        { this.props.children }
        here is send
      </div>
    )
  }
}

//ReactDOM.render(<Send/>, document.getElementById('app'));
