/* eslint-disable max-len, no-return-assign */

import React from 'react';
import { FormGroup, FormControl, Button, Form } from 'react-bootstrap';
import scorer from '../../modules/scorer.js';

export default class ScoreInput extends React.Component {
  componentDidMount() {
    scorer({ component: this });
    setTimeout(() => { document.querySelector('[name="score"]').focus(); }, 0);
  }

  render() {
    return (
    <form
      ref={ form => (this.scoreUpdaterForm = form) }
      onSubmit={ event => event.preventDefault() }
    >
      <FormGroup>
        <FormControl
          type="text"
          name="score"
          placeholder="Enter score here"
        />
      </FormGroup>
      <Button type="submit" bsStyle="success">Submit</Button>
    </form>);
  }
}

ScoreInput.propTypes = {
  doc: React.PropTypes.object,
};
