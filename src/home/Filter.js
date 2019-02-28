import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {filter: ''};
  }

  render() {
    return (
      <div className="filter">
        <Button >? about</Button>
        <h3>Filter</h3>
        <FormControl component="fieldset">
          <FormLabel component="legend">Filter</FormLabel>
          <RadioGroup
            aria-label="Filter"
            name="gender1"
            value={this.state.filter}
          >
            <FormControlLabel value="depression" control={<Radio />} label="Anxiety" />
            <FormControlLabel value="anxiety" control={<Radio />} label="Depression" />
            <FormControlLabel value="loss" control={<Radio />} label="Loss" />
          </RadioGroup>
        </FormControl>

      </div>
    )
  }
}

ReactDOM.render(<Filter/>, document.getElementById('app'));
