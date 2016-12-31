import React from 'react';
import { Row, Col } from 'react-bootstrap';
import JoinGame from '../components/JoinGame.js';

const Join = () => (
  <div className="Documents">
    <Row>
      <Col xs={ 12 }>
        <div className="page-header clearfix">
          <h4 className="pull-left">Join Game</h4>
        </div>
        <br />
        <JoinGame />
      </Col>
    </Row>
  </div>
);

export default Join;
