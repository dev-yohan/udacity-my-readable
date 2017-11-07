import * as ContentApi from '../util/api'

import {
  RECEIVE_POSTS,
  FETCH_CATEGORY_POSTS,
  RECEIVE_POST,
  RECEIVE_POST_COMMENTS,
  SORT_POSTS_BY_DATE,
  SORT_POSTS_BY_SCORE,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  VOTE_POST
} from './action_types'

export function createPost(dispatch, body) {
  ContentApi
  .addPost(body)
  .then(post => {
    dispatch(addPost(post))
  })
}

export function fetchEditPost(dispatch, postId, body) {
  ContentApi
  .editPost(postId, body)
  .then(post => {
    dispatch(editPost(post))
    fetchPost (dispatch, postId)
  })
}

export function fetchDeletePost(dispatch, id) {
  ContentApi
  .deletePost(id)
  .then(post => dispatch(deletePost(post.id)))
}

export function fetchPosts (dispatch) {
  ContentApi
    .getPosts()
    .then(posts => dispatch(receivePosts(posts)))
}

export function fetchPostsByCategory (dispatch, category) {
  ContentApi
  .getPostsByCategory(category)
  .then(posts => dispatch(receivePostByCategory(posts)))
}

export function fetchPost (dispatch, post) {
  ContentApi
  .getPost(post)
  .then(post => dispatch(receivePost(post)))
}

export function addPostVote(dispatch, post, body) {
  ContentApi
  .addPostVote(post, body)
  .then(post => {
    dispatch(votePost(post))
    fetchPost (dispatch, post.id)
  })
}

export function receivePostByCategory(posts) {
  return {
    type: FETCH_CATEGORY_POSTS,
    posts
  }
}

export function receivePosts (posts) {
  return {
    type: RECEIVE_POSTS,
    posts
  }
}

export function receivePost (post) {
  return {
    type: RECEIVE_POST,
    post
  }
}

export function receivePostComments (comments) {
  return {
    type: RECEIVE_POST_COMMENTS,
    comments
  }
}

export function sortPostsByDate () {
  return {
    type: SORT_POSTS_BY_DATE
  }
}

export function sortPostsByScore () {
  return {
    type: SORT_POSTS_BY_SCORE
  }
}

export function addPost (post) {
  return {
    type: ADD_POST,
    post
  }
}

export function editPost (post) {
  return {
    type: EDIT_POST,
    post
  }
}

export function deletePost (id) {
  return {
    type: DELETE_POST,
    id
  }
}

export function votePost (post) {
  return {
    type: VOTE_POST,
    post
  }
}

