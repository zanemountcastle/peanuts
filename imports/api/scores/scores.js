import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

const Scores = new Mongo.Collection('Scores');
export default Scores;

Scores.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Scores.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Scores.schema = new SimpleSchema({
  username: {
    type: String,
    label: 'Username of owner.',
  },
  score: {
    type: Number,
    label: 'Current score',
  },
  gameId: {
    type: String,
    label: 'ID of game this score is in.',
  },
});

Scores.attachSchema(Scores.schema);

Factory.define('score', Scores, {
  title: () => 'Factory Title',
  body: () => 'Factory Body',
});
