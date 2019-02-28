import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class PostContent extends Component {
  render() {
    return (
      <div className="postcontent">
        { this.props.children }
      </div>
    )
  }
}

ReactDOM.render(<PostContent/>, document.getElementById('app'));
