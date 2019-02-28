import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class LetterPreview extends Component {
  render() {
    return (
      <div className="letterpreview">
        { this.props.children }
      </div>
    )
  }
}

ReactDOM.render(<LetterPreview/>, document.getElementById('app'));
