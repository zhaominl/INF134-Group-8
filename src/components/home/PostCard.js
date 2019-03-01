import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class PostCard extends Component {
  render() {
    return (
      <div className="postcard">
        { this.props.children }
      </div>
    )
  }
}

ReactDOM.render(<PostCard/>, document.getElementById('app'));
