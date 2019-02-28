import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class HelperButton extends Component {
  render() {
    return (
      <div className="helper-button">
        { this.props.children }
      </div>
    )
  }
}

ReactDOM.render(<helper-button/>, document.getElementById('app'));
