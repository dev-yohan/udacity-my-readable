import * as ContentApi from '../util/api'

import {
  ADD_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
  VOTE_COMMENT
} from './action_types'

import {
  receivePostComments,
  fetchPost
} from './posts_actions'

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
