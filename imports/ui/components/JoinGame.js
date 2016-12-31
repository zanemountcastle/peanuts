/* eslint-disable react/no-find-dom-node */

import React from 'react';
import { Button, FormGroup, FormControl } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import handleInitGame from '../../modules/init-game.js';

export default class JoinGame extends React.Component {
  componentDidMount() {
    handleInitGame({ component: this });
    setTimeout(() => { document.querySelector('[name="gameId"]').focus(); }, 0);
  }

  handleSubmit(event) {
    event.preventDefault();
    const gameId = ReactDOM.findDOMNode(this.refs.gameId).value.trim();
    browserHistory.push(`/scores/${gameId}`);
  }

  render() {
    const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };
    return (
      <div className="well" style={wellStyles}>
        <form
          ref={ form => (this.gameInitForm = form) }
          onSubmit={ event => event.preventDefault() }
        >
          <FormGroup>
            <FormControl
              bsSize="large"
              type="text"
              name="gameId"
              ref="gameId"
              placeholder="Enter game ID"
            />
          </FormGroup>
          <Button bsStyle="primary" bsSize="large" type="submit" block>Join game</Button>
        </form>
      </div>
    );
  }
}
