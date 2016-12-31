/* eslint-disable no-undef */

import { browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import { initScore } from '../api/scores/methods.js';
import './validation.js';
// import Scores from '../api/scores/scores.js';

let component;

// const handleUpsert = () => {
//   const { doc } = component.props;
//   const confirmation = doc && doc._id ? 'Document updated!' : 'Document added!';
//   const upsert = {
//     title: document.querySelector('[name="title"]').value.trim(),
//     body: document.querySelector('[name="body"]').value.trim(),
//   };
//
//   if (doc && doc._id) upsert._id = doc._id;
//
//   upsertDocument.call(upsert, (error, { insertedId }) => {
//     if (error) {
//       Bert.alert(error.reason, 'danger');
//     } else {
//       component.documentEditorForm.reset();
//       Bert.alert(confirmation, 'success');
//       browserHistory.push(`/documents/${insertedId || doc._id}`);
//     }
//   });
// };

const handleInit = () => {
  const { doc } = component.props;
  const init = {
    username: (Meteor.user().profile.name.first + Meteor.user().profile.name.last).toLowerCase(),
    gameId: document.querySelector('[name="gameId"]').value.trim(),
  };
  initScore.call(init, (error) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      Bert.alert('Joined game!', 'success');
      browserHistory.push(`/scores/${init.gameId}`);
    }
  });
};

const validate = () => {
  $(component.gameInitForm).validate({
    rules: {
      gameId: {
        required: true,
      },
    },
    messages: {
      gameId: {
        required: 'Need a game ID!',
      },
    },
    submitHandler() { handleInit(); },
  });
};

export default function handleInitGame(options) {
  component = options.component;
  validate();
}
