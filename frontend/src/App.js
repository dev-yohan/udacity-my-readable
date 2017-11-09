import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import {
  createPost,
  fetchDeletePost,
  fetchEditPost,
  fetchPosts,
  fetchPost,
  fetchPostsByCategory,
  addPostVote,
  sortPostsByDate,
  sortPostsByScore,
} from './actions/posts_actions'

import {
  createPostComment,
  fetchDeleteComment,
  fetchEditComment,
  fetchPostComments,
  addCommentVote,
} from './actions/comments_actions'

import {
  fetchCategories,
} from './actions/categories_actions'

import { Route }      from 'react-router-dom'
import Header         from './components/shared/Header'
import NewPost        from './components/posts/NewPost' 
import PostDetail     from './components/posts/PostDetail'
import Home           from './components/Home'

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
    this.deleteComment      = this.deleteComment.bind(this)
    this.createPostComment  = this.createPostComment.bind(this)
    this.addPostVote        = this.addPostVote.bind(this)
    this.addCommentVote     = this.addCommentVote.bind(this)    
    this.editPost           = this.editPost.bind(this)
    this.editComment        = this.editComment.bind(this)
  }

  componentDidMount() {
    this.props.fetchCategories()
  }

  deletePost(id) {
    this.props.fetchDeletePost(id)
  }

  deleteComment(id) {
    this.props.fetchDeleteComment(id)
  }

  getAllPosts() {
    this.props.fetchPosts()
  }

  createPost(body) {
    this.props.createPost(body)
  }
  
  editPost(post, body){
    this.props.fetchEditPost(post, body)
  }

  editComment(comment, body){
    this.props.fetchEditComment(comment, body)
  }

  createPostComment(body) {
    this.props.createPostComment(body)
  }

  addPostVote(post, body) {
    this.props.addPostVote(post, body)
  }

  addCommentVote(comment, body) {
    this.props.addCommentVote(comment, body)
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
              category={null}
              getAllPosts={this.getAllPosts}
              sortPostsByDate={this.sortPostsByDate}
              sortPostsByScore={this.sortPostsByScore}
              fetchDeletePost={this.deletePost}  
              addPostVote={this.addPostVote} 
              editPost={this.editPost}  
              getPostsByCategory={this.getPostsByCategory}  
            />
  			  )} />
          <Route strict path="/admin/posts/new-post" render={({match}) => (
            <NewPost
             categories={categories}
             createPost={this.createPost}
            />
          )} />
          <Route exact path="/:category" render={({match}) => (
            <Home
              posts={posts}
              categories={categories}
              category={match.params.category}
              getAllPosts={this.getAllPosts}
              sortPostsByDate={this.sortPostsByDate}
              sortPostsByScore={this.sortPostsByScore}
              fetchDeletePost={this.deletePost}  
              addPostVote={this.addPostVote} 
              editPost={this.editPost}  
              getPostsByCategory={this.getPostsByCategory}  
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
              createPostComment={this.createPostComment}
              addPostVote={this.addPostVote}
              addCommentVote={this.addCommentVote}
              deleteComment={this.deleteComment}
              editPost={this.editPost}
              editComment={this.editComment}
              fetchDeletePost={this.deletePost}
              history={this.props.history}/>
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
    createPostComment:    (comment) => createPostComment(dispatch, comment),
    addPostVote:          (post, body) => addPostVote(dispatch, post, body),
    addCommentVote:       (comment, body) => addCommentVote(dispatch, comment, body),
    fetchDeleteComment:   (comment) => fetchDeleteComment(dispatch, comment),
    fetchEditPost:        (post, body) => fetchEditPost(dispatch, post, body),
    fetchEditComment:     (comment, body) => fetchEditComment(dispatch, comment, body)
  }
}

export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
