import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class LetterForm extends Component {
  render() {
    return (
      <div className="letterform">
        { this.props.children }
      </div>
    )
  }
}

ReactDOM.render(<LetterForm/>, document.getElementById('app'));
