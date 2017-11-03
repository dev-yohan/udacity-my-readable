import {
  RECEIVE_POST_COMMENTS,
  ADD_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
  VOTE_COMMENT
} from '../actions';

function comments (state = [], action) {
  switch (action.type) {
    case RECEIVE_POST_COMMENTS:
      return [
        ...action.comments.sort(function(a, b) {
          return b.timestamp - a.timestamp;
        })
      ]
    case ADD_COMMENT:
      return state
    case EDIT_COMMENT:
      return state
    case DELETE_COMMENT:
      return [
        ...state.filter((x) => x.id !== action.comment.id)
      ]
    case VOTE_COMMENT:
      return state  
    default:
      return state
  }
}

export default comments