import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Scores from './scores';
import rateLimit from '../../modules/rate-limit.js';

// Initialize score at beginning of game to 0
export const initScore = new ValidatedMethod({
  name: 'scores.insert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    username: { type: String, optional: true },
    gameId: { type: String, optional: true },
  }).validator(),
  run(document) {
    return Scores.insert({
      username: document.username,
      score: 0,
      gameId: document.gameId,
    });
  },
});

// Increment score with specified `score` value
export const updateScore = new ValidatedMethod({
  name: 'scores.updateScore',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    score: { type: Number, optional: true },
  }).validator(),
  run(document) {
    return Scores.update(
      { _id: document._id },
      { $inc: { score: document.score } },
    );
  },
});

// export const upsertDocument = new ValidatedMethod({
//   name: 'documents.upsert',
//   validate: new SimpleSchema({
//     _id: { type: String, optional: true },
//     title: { type: String, optional: true },
//     body: { type: String, optional: true },
//   }).validator(),
//   run(document) {
//     return Documents.upsert({ _id: document._id }, { $set: document });
//   },
// });
//
// export const removeDocument = new ValidatedMethod({
//   name: 'documents.remove',
//   validate: new SimpleSchema({
//     _id: { type: String },
//   }).validator(),
//   run({ _id }) {
//     Documents.remove(_id);
//   },
// });

rateLimit({
  methods: [
    initScore,
    updateScore,
  ],
  limit: 5,
  timeRange: 1000,
});
