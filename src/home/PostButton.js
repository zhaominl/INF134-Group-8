import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class PostButton extends Component {
  render() {
    return (
      <div className="postbutton">
        { this.props.children }
      </div>
    )
  }
}

ReactDOM.render(<PostButton/>, document.getElementById('app'));
