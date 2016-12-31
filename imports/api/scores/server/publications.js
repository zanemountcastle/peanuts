import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Scores from '../scores.js';

Meteor.publish('scores.list', () => Scores.find());

// Meteor.publish('scores.view', (_id) => {
//   check(_id, String);
//   return Scores.find(_id);
// });
