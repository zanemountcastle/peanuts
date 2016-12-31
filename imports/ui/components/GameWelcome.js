/* eslint-disable max-len, no-return-assign */

import React from 'react';
import { Button, LinkContainer } from 'react-bootstrap';

export default class GameWelcome extends React.Component {
  render() {
    const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };
    return (
      <div className="well" style={wellStyles}>
        <Button bsStyle="primary" bsSize="large" href="/join" block>Join game</Button>
        <Button bsSize="large" href="/new" block>Start new game</Button>
      </div>
    );
  }
}

GameWelcome.propTypes = {
  doc: React.PropTypes.object,
};
