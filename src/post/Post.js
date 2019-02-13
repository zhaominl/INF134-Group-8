import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Post extends Component {
  render() {
    return (
      <div className="post">
        { this.props.children }
        here is post
      </div>
    )
  }
}

//ReactDOM.render(<Post/>, document.getElementById('app'));
