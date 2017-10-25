const CONTENT_API = 'http://localhost:3001'
const AUTH_TOKEN  = 'my-very-secret-token'

const headers = {
  'Authorization': AUTH_TOKEN,
  'Content-type':  'application/json'
}

export function  getCategories () {
  return fetch(`${CONTENT_API}/categories`, { headers })
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      return data.categories
    })
}

export function getPosts() {
  return fetch(`${CONTENT_API}/posts`, { headers })
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      return data
    })
}

export function getPostsByCategory(category) {
  return fetch(`${CONTENT_API}/${category}/posts`, { headers })
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      return data
    })
}

export function getPost(id) {
  return fetch(`${CONTENT_API}/posts/${id}`, { headers })
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      return data
    })
}

export function getPostComments(id) {
  return fetch(`${CONTENT_API}/posts/${id}/comments`, { headers })
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      return data
    })
}

export function addPost(body) {
  return fetch(`${CONTENT_API}/posts`, { 
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

export function deletePost(id) {
  return fetch(`${CONTENT_API}/posts/${id}`, { 
    method: 'delete',
    headers: headers })
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    return data
  })
}

export function addPostComment(body) {
  return fetch(`${CONTENT_API}/comments`, { 
    method: 'post',
    body:   JSON.stringify(body),
    headers: headers })
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    return data
  })
}

export function addPostVote(postId, body) {
  return fetch(`${CONTENT_API}/posts/${postId}`, { 
    method: 'post',
    body:   JSON.stringify(body),
    headers: headers })
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    return data
  })
}

export function addCommentVote(commentId, body) {
  return fetch(`${CONTENT_API}/comments/${commentId}`, { 
    method: 'post',
    body:   JSON.stringify(body),
    headers: headers })
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    return data
  })
}