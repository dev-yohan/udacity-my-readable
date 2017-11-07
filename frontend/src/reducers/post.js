import {
  RECEIVE_POST,
} from '../actions/action_types';

function post (state = [], action) {
  switch (action.type) {
    case RECEIVE_POST:
      return action.post
    default:
      return state
  }
}

export default post