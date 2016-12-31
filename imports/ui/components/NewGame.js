/* eslint-disable react/no-find-dom-node */

/* eslint-disable react/no-find-dom-node */

import React from 'react';
import { Button, FormGroup, FormControl } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import Chance from 'chance';
import handleInitGame from '../../modules/init-game.js';

export default class JoinGame extends React.Component {
  componentDidMount() {
    handleInitGame({ component: this });
    setTimeout(() => { document.querySelector('[name="gameId"]').focus(); }, 0);
  }

  handleSubmit(event) {
    event.preventDefault();
    const gameId = ReactDOM.findDOMNode(this.refs.gameId).value.trim();
    browserHistory.push(`/scores/${gameId}`);
  }

  makeid() {
    const chance = new Chance();
    return chance.word({ length: 5 });
  }

  render() {
    const gameId = this.makeid();
    const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };
    return (
      <div className="well" style={wellStyles}>
        <form
          ref={ form => (this.gameInitForm = form) }
          onSubmit={ event => event.preventDefault() }
        >
          <FormGroup>
            <FormControl
              bsSize="large"
              type="text"
              name="gameId"
              ref="gameId"
              placeholder="Enter game ID"
              value={gameId}
            />
          </FormGroup>
          <Button bsStyle="primary" bsSize="large" type="submit" block>Start</Button>
        </form>
      </div>
    );
  }
}

// import React from 'react';
// import { Button, FormGroup, FormControl } from 'react-bootstrap';
// import Chance from 'chance';
// import handleInitGame from '../../modules/scorer.js';
//
// export default class JoinGame extends React.Component {
//   componentDidMount() {
//     handleInitGame({ component: this });
//     setTimeout(() => { document.querySelector('[name="gameId"]').focus(); }, 0);
//   }
//
//   makeid() {
//     const chance = new Chance();
//     return chance.word({ length: 5 });
//   }
//
//   render() {
//     const gameId = this.makeid();
//     const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };
//     return (
//       <div className="well" style={wellStyles}>
//         <form
//           ref={ form => (this.gameInitForm = form) }
//           onSubmit={ event => event.preventDefault() }
//         >
//           <FormGroup>
//             <FormControl
//               bsSize="large"
//               type="text"
//               name="gameId"
//               ref="gameId"
//               placeholder="Enter game ID"
//             />
//           </FormGroup>
//           <Button bsStyle="primary" bsSize="large" type="submit" block>Start</Button>
//         </form>
//       </div>
//     );
//   }
// }

// <Button disabled bsSize="large" block>Game ID: {gameId}</Button>
// <Button
//   bsStyle="primary"
//   bsSize="large"
//   href={`/scores/${gameId}`}
//   block
// >
//   Start
// </Button>


// <FormGroup>
//   <FormControl.Static
//     bsSize="large"
//     type="text"
//     name="gameId"
//     ref="gameId"
//     placeholder="Enter game ID"
//   >
//     Game ID: {gameId}
//   </FormControl.Static>
