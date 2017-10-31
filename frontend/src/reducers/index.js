import {
  RECEIVE_CATEGORIES,
  RECEIVE_POSTS,
  RECEIVE_POST,
  RECEIVE_POST_COMMENTS,
  SORT_POSTS_BY_DATE,
  SORT_POSTS_BY_SCORE,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  VOTE_POST,
  ADD_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
  VOTE_COMMENT,
  FETCH_CATEGORY_POSTS
} from '../actions';

const initialState = {
  categories: [],
  posts:      []
}

function readableManager (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return {
        categories: action.categories,
        posts:      state.posts,
        post:       state.post,
        comments:   state.comments
      }
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
      return state
    case DELETE_POST:
      return {
        categories: state.categories,
        posts:      state.posts.filter((x) => x.id !== action.id),
        post:       state.post,
        comments:   state.comments
      }
    case VOTE_POST:
      let posts      = state.posts
      let foundIndex = state.posts.findIndex(x => x.id == action.post.id)
      posts[foundIndex] = action.post;
      return {
        categories: state.categories,
        posts:      posts,
        post:       state.post,
        comments:   state.comments
      }
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

export default readableManager
