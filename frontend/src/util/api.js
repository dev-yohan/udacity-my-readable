const CONTENT_API = 'http://localhost:3001'
const AUTH_TOKEN  = 'my-very-secret-token'

const headers = {
  'Authorization': AUTH_TOKEN,
  'Content-type':  'application/json'
}

function getRequest(path) {
  return fetch(path, { headers })
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      return data
    })
}

function postRequest(path, body) {
  return fetch(path, { 
    method: 'post',
    body:    JSON.stringify(body),
    headers: headers })
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      return data
    })
}

function putRequest(path, body) {
  return fetch(path, { 
    method: 'put',
    body:    JSON.stringify(body),
    headers: headers })
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      return data
    })
}

function deleteRequest(path) {
  return fetch(path, { 
    method: 'delete',
    headers: headers })
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      return data
    })
}

export function  getCategories () {
  return getRequest(`${CONTENT_API}/categories`)
}

export function getPosts() {
  return getRequest(`${CONTENT_API}/posts`)
}

export function getPostsByCategory(category) {
  return getRequest(`${CONTENT_API}/${category}/posts`)
}

export function getPost(id) {
  return getRequest(`${CONTENT_API}/posts/${id}`)
}

export function getPostComments(id) {
  return getRequest(`${CONTENT_API}/posts/${id}/comments`)
}

export function addPost(body) {
  return postRequest(`${CONTENT_API}/posts`, body)  
}

export function editPost(id, body) {
  return putRequest(`${CONTENT_API}/posts/${id}`, body)  
}

export function deletePost(id) {
  return deleteRequest(`${CONTENT_API}/posts/${id}`)  
}

export function addPostComment(body) {
  return postRequest(`${CONTENT_API}/comments`, body)
}

export function addPostVote(postId, body) {
  return postRequest(`${CONTENT_API}/posts/${postId}`, body)
}

export function addCommentVote(commentId, body) {
  return postRequest(`${CONTENT_API}/comments/${commentId}`, body)
}

export function deleteComment(id) {
  return deleteRequest(`${CONTENT_API}/comments/${id}`)
}

export function editComment(id, body) {
  return putRequest(`${CONTENT_API}/comments/${id}`, body)
}