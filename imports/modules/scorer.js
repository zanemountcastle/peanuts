/* eslint-disable no-undef */

import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import { updateScore, initScore } from '../api/scores/methods.js';
import './validation.js';
import Scores from '../api/scores/scores.js';

let component;

const handleInit = () => {
  const init = {
    username: (Meteor.user().profile.name.first + Meteor.user().profile.name.last).toLowerCase(),
    gameId: document.gameId,
  };
  initScore.call(init, (error) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      Bert.alert('User initialized!', 'success');
    }
  });
};

const handleUpdate = () => {
  const { doc } = component.props;
  const confirmation = 'Score updated!';
  const uname = (Meteor.user().profile.name.first + Meteor.user().profile.name.last).toLowerCase();
  const score = Scores.findOne({
    $and: [
      { username: uname },
      { gameId: component.props.gameId },
    ],
  }); // Find score by current user
  const update = {
    _id: score._id,
    score: parseInt(document.querySelector('[name="score"]').value.trim(), 10),
  };

  if (doc && doc._id) update._id = doc._id;

  updateScore.call(update, (error) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      component.scoreUpdaterForm.reset();
      Bert.alert(confirmation, 'success');
    }
  });
};

const validate = () => {
  $(component.scoreUpdaterForm).validate({
    rules: {
      score: {
        required: true,
      },
    },
    messages: {
      score: {
        required: 'Need a score in here!',
      },
    },
    submitHandler() { handleUpdate(); },
  });
};

export default function scorer(options) {
  component = options.component;
  gameId = options.gameId;
  validate();
}
