import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class SendButton extends Component {
  render() {
    return (
      <div className="sendbutton">
        { this.props.children }
      </div>
    )
  }
}

ReactDOM.render(<SendButton/>, document.getElementById('app'));
