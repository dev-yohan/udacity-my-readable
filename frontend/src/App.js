import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
  receiveCategories,
  fetchCategories,
  createPost,
  createPostComment,
  fetchDeletePost,
  receivePosts,
  fetchPosts,
  fetchPost,
  fetchPostsByCategory,
  fetchPostComments,
  sortPostsByDate,
  sortPostsByScore,
  addPost,
  editPost,
  deletePost,
  addComment,
  editComment,
  deleteComment
} from './actions'

import { Route }      from 'react-router-dom'
import Header         from './components/shared/Header'
import NewPost        from './components/posts/NewPost' 
import PostsList      from './components/posts/PostsList'
import PostDetail     from './components/posts/PostDetail'
import Home           from './components/Home'
import CategoryHome   from './components/categories/CategoryHome'

class App extends Component {

  constructor(props) {
    super(props)
    this.getAllPosts        = this.getAllPosts.bind(this)
    this.getPost            = this.getPost.bind(this)
    this.getPostComments    = this.getPostComments.bind(this)
    this.getPostsByCategory = this.getPostsByCategory.bind(this)
    this.sortPostsByDate    = this.sortPostsByDate.bind(this)
    this.sortPostsByScore   = this.sortPostsByScore.bind(this)
    this.createPost         = this.createPost.bind(this)
    this.deletePost         = this.deletePost.bind(this)
  }

  componentDidMount() {
    this.props.fetchCategories()
  }

  deletePost(id) {
    this.props.fetchDeletePost(id)
  }

  getAllPosts() {
    this.props.fetchPosts()
  }

  createPost(body) {
    this.props.createPost(body)
  } 

  createPostComment(body) {
    this.props.createPostComment(body)
  }

  getPost(post) {
    this.props.fetchPost(post)
  }

  getPostComments(post) {
    this.props.fetchPostComments(post)
  }

  getPostsByCategory(category) {
    this.props.fetchPostsByCategory(category)
  }

  sortPostsByDate() {
    this.props.sortPostsByDate()
  }

  sortPostsByScore() {
    this.props.sortPostsByScore()
  }

  render() {
    const { categories, posts, post, comments } = this.props

    return (
      <div>
        <Header categories={categories}/>
        <div className='container'>
          <Route exact path="/" render={() => (
            <Home
              posts={posts}
              categories={categories}
              getAllPosts={this.getAllPosts}
              sortPostsByDate={this.sortPostsByDate}
              sortPostsByScore={this.sortPostsByScore}
              fetchDeletePost={this.deletePost}
            />
  			  )} />
          <Route strict path="/admin/posts/new-post" render={({match}) => (
            <NewPost
             categories={categories}
             createPost={this.createPost}
            />
          )} />
          <Route exact path="/:category" render={({match}) => (
            <CategoryHome
              posts={posts}
              categories={categories}
              category={match.params.category}
              getPostsByCategory={this.getPostsByCategory}
              sortPostsByDate={this.sortPostsByDate}
              sortPostsByScore={this.sortPostsByScore}
              fetchDeletePost={this.deletePost}
            />
          )} />
          <Route exact path="/:category/:post_id" render={({match}) => (
            <PostDetail
              categories={categories}
              category={match.params.category}
              postId={match.params.post_id}
              post={post}
              comments={comments}
              getPost={this.getPost}
              getPostComments={this.getPostComments}
              createPostComment={this.createPostComment}/>
          )} />
          
        </div>
      </div>
    );
  }
}

function mapStateToProps (data) {
  return {
    categories: data.categories,
    posts:      data.posts,
    post:       data.post,
    comments:   data.comments
  }
}

function mapDispatchToProps (dispatch) {
  return {
    sortPostsByDate:      () => dispatch(sortPostsByDate()),
    sortPostsByScore:     () => dispatch(sortPostsByScore()),
    fetchCategories:      () => fetchCategories(dispatch),
    fetchPosts:           () => fetchPosts(dispatch),
    fetchPost:            (post) => fetchPost(dispatch, post),
    fetchPostComments:    (post) => fetchPostComments(dispatch, post),
    fetchPostsByCategory: (category) => fetchPostsByCategory(dispatch, category),
    createPost:           (body) => createPost(dispatch, body), 
    fetchDeletePost:      (post) => fetchDeletePost(dispatch, post),
    createPostComment:    (comment) => createPostComment(dispatch, comment)
  }
}

export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
