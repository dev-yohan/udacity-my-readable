import * as ContentApi from '../util/api'

export const RECEIVE_CATEGORIES    = 'RECEIVE_CATEGORIES'
export const RECEIVE_POSTS         = 'RECEIVE_POSTS'
export const FETCH_CATEGORY_POSTS  = 'FETCH_CATEGORY_POSTS'
export const RECEIVE_POST          = 'RECEIVE_POST'
export const RECEIVE_POST_COMMENTS = 'RECEIVE_POST_COMMENTS'
export const SORT_POSTS_BY_DATE    = 'SORT_POSTS_BY_DATE'
export const SORT_POSTS_BY_SCORE   = 'SORT_POSTS_BY_SCORE'
export const ADD_POST              = 'ADD_POST'
export const EDIT_POST             = 'EDIT_POST'
export const DELETE_POST           = 'DELETE_POST'
export const VOTE_POST             = 'VOTE_POST'
export const ADD_COMMENT           = 'ADD_COMMENT'
export const EDIT_COMMENT          = 'EDIT_COMMENT'
export const DELETE_COMMENT        = 'DELETE_COMMENT'
export const VOTE_COMMENT          = 'VOTE_COMMENT'

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

export function fetchCategories (dispatch) {
  ContentApi
    .getCategories()
    .then(categories => dispatch(receiveCategories(categories)))
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

export function fetchPostComments (dispatch, post) {
  ContentApi
  .getPostComments(post)
  .then(comments => dispatch(receivePostComments(comments)))
}

export function createPostComment(dispatch, body) {
  ContentApi
  .addPostComment(body)
  .then(comment => {
    dispatch(addComment(comment))
    fetchPostComments (dispatch, body.parentId)
    fetchPost (dispatch, body.parentId)    
  })
}

export function addPostVote(dispatch, post, body) {
  ContentApi
  .addPostVote(post, body)
  .then(post => {
    dispatch(votePost(post))
    fetchPost (dispatch, post.id)
  })
}

export function addCommentVote(dispatch, comment, body) {
  ContentApi
  .addCommentVote(comment, {option: body.option})
  .then(vote => {
    dispatch(voteComment())
    fetchPostComments (dispatch, body.parentId)
  })
}

export function fetchDeleteComment(dispatch, id) {
  ContentApi
  .deleteComment(id)
  .then(comment => {
    dispatch(deleteComment(comment))
    fetchPost (dispatch, comment.parentId)
  })
}

export function fetchEditComment(dispatch, commentId, body) {
  ContentApi
  .editComment(commentId, body)
  .then(comment => {
    dispatch(editComment(comment))
    fetchPostComments (dispatch, comment.parentId)
  })
}

export function receivePostByCategory(posts) {
  return {
    type: FETCH_CATEGORY_POSTS,
    posts
  }
}

export function receiveCategories (categories) {
  return {
    type: RECEIVE_CATEGORIES,
    categories
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

export function addComment (comment) {
  return {
    type: ADD_COMMENT,
    comment
  }
}

export function editComment (comment) {
  return {
    type: EDIT_COMMENT,
    comment
  }
}

export function deleteComment (comment) {
  return {
    type: DELETE_COMMENT,
    comment
  }
}

export function voteComment () {
  return {
    type: VOTE_COMMENT
  }
}


