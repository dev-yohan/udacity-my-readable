import {
  ADD_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
  VOTE_COMMENT
} from '../actions';

function commentsManager (state = {}, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        categories: state.categories,
        posts:      state.posts.filter((x) => x.id !== action.id),
        post:       state.post,
        comments:   state.comments
      }
    case EDIT_COMMENT:
      return {
        categories: state.categories,
        posts:      state.posts,
        post:       state.post,
        comments:   state.comments
      }
    case DELETE_COMMENT:
      return {
        categories: state.categories,
        posts:      state.posts,
        post:       state.post,
        comments:   state.comments.filter((x) => x.id !== action.comment.id)
      }
    case VOTE_COMMENT:
      return state  
    default:
      return state
  }
}

export default commentsManager