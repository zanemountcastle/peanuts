import React from 'react';
import { Row, Col } from 'react-bootstrap';
import NewGame from '../components/NewGame.js';

const Join = () => (
  <div className="Documents">
    <Row>
      <Col xs={ 12 }>
        <div className="page-header clearfix">
          <h4 className="pull-left">New Game</h4>
        </div>
        <br />
        <NewGame />
      </Col>
    </Row>
  </div>
);

export default Join;
