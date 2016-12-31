/* eslint-disable react/no-find-dom-node */

import React from 'react';
import { Button } from 'react-bootstrap';
import Chance from 'chance';
import scorer from '../../modules/scorer.js';

export default class JoinGame extends React.Component {
  componentDidMount() {
    scorer({ component: this });
    setTimeout(() => { document.querySelector('[name="score"]').focus(); }, 0);
  }

  makeid() {
    const chance = new Chance();
    return chance.word({ length: 5 });
  }

  render() {
    const gameId = this.makeid();
    const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };
    return (
      <div className="well" style={wellStyles}>
        <Button disabled bsSize="large" block>Game ID: {gameId}</Button>
        <Button
          bsStyle="primary"
          bsSize="large"
          href={`/scores/${gameId}`}
          block
        >
          Start
        </Button>
      </div>
    );
  }
}
