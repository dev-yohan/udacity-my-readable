import {
  RECEIVE_POSTS,
  RECEIVE_POST,
  RECEIVE_POST_COMMENTS,
  SORT_POSTS_BY_DATE,
  SORT_POSTS_BY_SCORE,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  VOTE_POST,
  FETCH_CATEGORY_POSTS
} from '../actions';

let posts
let foundIndex

function postsManager (state = {}, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return {
        categories: state.categories,
        posts:      action.posts.sort(function(a, b) {
         return b.timestamp - a.timestamp;
        })
      }
    case RECEIVE_POST:
      return {
        categories: state.categories,
        posts:      state.posts,
        post:       action.post,
        comments:   state.comments
      }
    case RECEIVE_POST_COMMENTS:
      return {
        categories: state.categories,
        posts:      state.posts,
        post:       state.post,
        comments:   action.comments.sort(function(a, b) {
          return b.timestamp - a.timestamp;
         })
      }
    case SORT_POSTS_BY_DATE:
      return {
        categories: state.categories,
        posts:      state.posts.sort(function(a, b) {
         return b.timestamp - a.timestamp;
        })
      }
    case SORT_POSTS_BY_SCORE:
      return {
        categories: state.categories,
        posts:      state.posts.sort(function(a, b) {
         return b.voteScore - a.voteScore;
        })
      }
    case FETCH_CATEGORY_POSTS:
      return {
        categories: state.categories,
        posts:      action.posts
      }
    case ADD_POST:
      let oldPosts = state.posts
      oldPosts.push(action.post)
      return {
        categories: state.categories,
        posts:      oldPosts,
        post:       state.post,
        comments:   state.comments
      }
    case EDIT_POST:
      posts      = state.posts
      foundIndex = state.posts.findIndex(x => x.id === action.post.id)
      posts[foundIndex] = action.post;
      return {
        categories: state.categories,
        posts:      posts,
        post:       state.post,
        comments:   state.comments
      }
    case DELETE_POST:
      return {
        categories: state.categories,
        posts:      state.posts.filter((x) => x.id !== action.id),
        post:       state.post,
        comments:   state.comments
      }
    case VOTE_POST:
      posts      = state.posts
      foundIndex = state.posts.findIndex(x => x.id === action.post.id)
      posts[foundIndex] = action.post;
      return {
        categories: state.categories,
        posts:      posts,
        post:       state.post,
        comments:   state.comments
      } 
    default:
      return state
  }
}

export default postsManager