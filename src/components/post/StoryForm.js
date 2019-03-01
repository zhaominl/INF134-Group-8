import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class StoryForm extends Component {
  render() {
    return (
      <div className="storyform">
        { this.props.children }
      </div>
    )
  }
}

ReactDOM.render(<StoryForm/>, document.getElementById('app'));
