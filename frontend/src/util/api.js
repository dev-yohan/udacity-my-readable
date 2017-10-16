const CONTENT_API = process.env.CONTENT_API
const AUTH_TOKEN  = process.env.AUTH_TOKEN

const headers = {
  'Authorization': 'sdasdd'
}

export function  getCategories () {
  return fetch(`http://localhost:3001/categories`, { headers })
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      return data.categories
    })
}

export function getPosts() {
  return fetch(`http://localhost:3001/posts`, { headers })
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      return data
    })
}

export function getPostsByCategory(category) {
  return fetch(`http://localhost:3001/${category}/posts`, { headers })
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      return data
    })
}

export function getPost(id) {
  return fetch(`http://localhost:3001/posts/${id}`, { headers })
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      return data
    })
}

export function getPostComments(id) {
  return fetch(`http://localhost:3001/posts/${id}/comments`, { headers })
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      return data
    })
}
