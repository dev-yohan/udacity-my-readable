export const SORT_POSTS      = 'SORT_POSTS'
export const ADD_POST        = 'ADD_POST'
export const EDIT_POST       = 'EDIT_POST'
export const DELETE_POST     = 'DELETE_POST'
export const ADD_COMMENT     = 'ADD_COMMENT'
export const EDIT_COMMENT    = 'EDIT_COMMENT'
export const DELETE_COMMENT  = 'DELETE_COMMENT'

export function sortPosts () {
  return {
    type: SORT_POSTS
  }
}

export function addPost () {
  return {
    type: ADD_POST
  }
}

export function editPost () {
  return {
    type: EDIT_POST
  }
}

export function deletePost () {
  return {
    type: DELETE_POST
  }
}

export function addComment () {
  return {
    type: ADD_COMMENT
  }
}

export function editComment () {
  return {
    type: EDIT_COMMENT
  }
}

export function deleteComment () {
  return {
    type: DELETE_COMMENT
  }
}
