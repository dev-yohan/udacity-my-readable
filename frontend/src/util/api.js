const CONTENT_API = 'http://localhost:3001'
const AUTH_TOKEN  = 'my-very-secret-token'

const headers = {
  'Authorization': AUTH_TOKEN,
  'Content-type':  'application/json'
}

function getRequest(path) {
  return fetch(path, { headers })
}

function postRequest(path, body) {
  return fetch(path, { 
    method: 'post',
    body:    JSON.stringify(body),
    headers: headers })
}

function putRequest(path, body) {
  return fetch(path, { 
    method: 'put',
    body:    JSON.stringify(body),
    headers: headers })
}

function deleteRequest(path) {
  return fetch(path, { 
    method: 'delete',
    headers: headers })
}

export function  getCategories () {
  return getRequest(`${CONTENT_API}/categories`)
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      return data.categories
    })
}

export function getPosts() {
  return getRequest(`${CONTENT_API}/posts`)
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      return data
    })
}

export function getPostsByCategory(category) {
  return getRequest(`${CONTENT_API}/${category}/posts`)
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      return data
    })
}

export function getPost(id) {
  return getRequest(`${CONTENT_API}/posts/${id}`)
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      return data
    })
}

export function getPostComments(id) {
  return getRequest(`${CONTENT_API}/posts/${id}/comments`)
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      return data
    })
}

export function addPost(body) {
  return postRequest(`${CONTENT_API}/posts`, body)  
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    return data
  })
}

export function editPost(id, body) {
  return putRequest(`${CONTENT_API}/posts/${id}`, body)  
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    return data
  })
}

export function deletePost(id) {
  return deleteRequest(`${CONTENT_API}/posts/${id}`)  
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    return data
  })
}

export function addPostComment(body) {
  return postRequest(`${CONTENT_API}/comments`, body)
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    return data
  })
}

export function addPostVote(postId, body) {
  return postRequest(`${CONTENT_API}/posts/${postId}`, body)
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    return data
  })
}

export function addCommentVote(commentId, body) {
  return postRequest(`${CONTENT_API}/comments/${commentId}`, body)
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    return data
  })
}

export function deleteComment(id) {
  return deleteRequest(`${CONTENT_API}/comments/${id}`)
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    return data
  })
}

export function editComment(id, body) {
  return putRequest(`${CONTENT_API}/comments/${id}`, body)
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    return data
  })
}