import React from 'react';
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';

const ScoresList = ({ scores }) => (
  scores.length > 0 ? <ListGroup className="DocumentsList">
    {scores.map(({ _id, username, score }) => (
      <ListGroupItem key={ _id }>{ username + ' : ' + score }</ListGroupItem>
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">No scores yet.</Alert>
);

ScoresList.propTypes = {
  scores: React.PropTypes.array,
};

export default ScoresList;
