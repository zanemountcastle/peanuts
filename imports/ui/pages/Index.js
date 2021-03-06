import React from 'react';
import { Row, Col } from 'react-bootstrap';
import GameWelcome from '../components/GameWelcome.js';

const Index = () => (
  <div className="Documents">
    <Row>
      <Col xs={ 12 }>
        <div className="page-header clearfix">
          <h4 className="pull-left">Welcome</h4>
        </div>
        <br />
        <GameWelcome />
      </Col>
    </Row>
  </div>
);

export default Index;
