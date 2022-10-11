import { SUBMIT_SCORE } from '../actions';

const INITIAL_STATE = {
  score: 0,
};

function player(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SUBMIT_SCORE:
    return {
      ...state,
      score: state.score + action.payload,
    };
  default:
    return state;
  }
}

export default player;
