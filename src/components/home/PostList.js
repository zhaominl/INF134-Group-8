import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class PostList extends Component {
  render() {
    return (
      <div className="postlist">
        { this.props.children }
      </div>
    )
  }
}

ReactDOM.render(<PostList/>, document.getElementById('app'));
