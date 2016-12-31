import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ScoresList from '../containers/ScoresList.js';
import ScoreInput from '../components/ScoreInput.js';

const Index = () => (
  <div className="Documents">
    <Row>
      <Col xs={ 12 }>
        <div className="page-header clearfix">
          <h4 className="pull-left">Scores</h4>
        </div>
        <ScoreInput />
        <br />
        <ScoresList />
      </Col>
    </Row>
  </div>
);

export default Index;
