import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Scores from '../../api/scores/scores.js';
import ScoresList from '../components/ScoresList.js';
import Loading from '../components/Loading.js';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('scores.list');
  if (subscription.ready()) {
    const scores = Scores.find({}, {
      sort: { score: -1 },
    }).fetch();
    onData(null, { scores });
  }
};

export default composeWithTracker(composer, Loading)(ScoresList);
