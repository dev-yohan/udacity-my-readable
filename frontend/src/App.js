import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  sortPosts,
  addPost,
  editPost,
  deletePost,
  addComment,
  editComment,
  deleteComment
} from './actions'
import { Route } from 'react-router-dom';
import Header from './components/shared/Header'

class App extends Component {
  render() {
    console.log('props '+ JSON.stringify(this.props))
    return (
      <div>
        <Header/>
        <Route exact path="/" render={() => (
					<div>
            hola mundo
            <button onClick={() => this.props.sortPosts()}>Cilck Me</button>
          </div>
  			)} />
      </div>
    );
  }
}

function mapStateToProps (data) {
  return {
    categories: data.categories,
    posts: data.posts
  }
}

function mapDispatchToProps (dispatch) {
  return {
    sortPosts: () => dispatch(sortPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
