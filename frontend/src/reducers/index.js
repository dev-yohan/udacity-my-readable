import {
  SORT_POSTS,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  ADD_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT
} from '../actions';

const initialState = {
  categories: [
    'software',
    'games',
    'movies',
    'hardware'
  ],
  posts:      []
}

function readableManager (state = initialState, action) {
  switch (action.type) {
    case SORT_POSTS:
      return state
    case ADD_POST:
      return state
    case EDIT_POST:
      return state
    case DELETE_POST:
      return state
    case ADD_COMMENT:
      return state
    case EDIT_COMMENT:
      return state
    case DELETE_COMMENT:
      return state
    default:
      return state
  }
}

export default readableManager
