import {
  RECEIVE_POSTS,
  SORT_POSTS_BY_DATE,
  SORT_POSTS_BY_SCORE,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  VOTE_POST,
  FETCH_CATEGORY_POSTS
} from '../actions/action_types';

let currentPosts
let foundIndex

function posts (state = [], action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return [...action.posts.sort(function(a, b) {
         return b.timestamp - a.timestamp;
        })]
    case SORT_POSTS_BY_DATE:
      return [
        ...state.sort(function(a, b) {
         return b.timestamp - a.timestamp;
        })
      ]
    case SORT_POSTS_BY_SCORE:
      return [
        ...state.sort(function(a, b) {
         return b.voteScore - a.voteScore;
        })
      ]
    case FETCH_CATEGORY_POSTS:
      return [
        ...action.posts
      ]
    case ADD_POST:
      let oldPosts = state
      oldPosts.push(action.post)
      return [
        ...oldPosts
      ]
    case EDIT_POST:
      currentPosts = state
      foundIndex   = state.findIndex(x => x.id === action.post.id)
      currentPosts[foundIndex] = action.post;
      return [
        ...currentPosts
      ]
    case DELETE_POST:
      return [
        ...state.filter((x) => x.id !== action.id),
      ]
    case VOTE_POST:
      currentPosts = state
      foundIndex   = state.findIndex(x => x.id === action.post.id)
      currentPosts[foundIndex] = action.post;
      return [
        ...currentPosts
      ]
    default:
      return state
  }
}

export default posts