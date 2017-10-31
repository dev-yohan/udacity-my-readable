import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import moment from 'moment'
import {
  fetchPostComments
} from '../../actions'

class PostTeaser extends Component {
  constructor(props) {
    super(props);
    this.truncate = this.truncate.bind(this)
    this.triggerVote = this.triggerVote.bind(this)
  }

  componentDidMount() {
  }

  getPostComments(post) {
    this.props.fetchPostComments(post)
  }

  triggerVote (vote){ 
    this.props.addPostVote(
      this.props.post.id,
      {option: vote}
    )
  }

  truncate(str) {
    if (str.length > 100)
      return str.substr(0, 99)
     else
      return str
  }

  render() {
    const { category, post, fetchDeletePost, comments } = this.props
    const postDate = moment(new Date(post.timestamp));

    return (
      <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
        <div className='thumbnail postTeaser-category'>
          <div className='caption'>
            {category &&
              <Link to={`${category.path}/${post.id}`}>
                <h3>
                {post.title}  
                </h3>
              </Link>
            }
            <h4>{`By ${post.author}`}</h4>
            <h5>
              <Moment format="YYYY/MM/DD">
                {postDate}
              </Moment>
            </h5>
            <p>
              {this.truncate(post.body)}
            </p>
            <ul className="nav nav-pills">
              <li className="active">
                <a>
                  Votes <span className="badge">{post.voteScore}</span>
                </a>
              </li>
              <li className="active">
                <a>
                  Comments <span className="badge">{post.commentCount}</span>
                </a>
              </li>
              <li>
                {category &&
                  <Link to={category.path}>{category.name}</Link>
                }
              </li>
            </ul>
            <div className='row post_controls'>
              <div className='col-lg-12 col-md-2 col-sm-12 col-xs-12'>
                <button className='btn btn-danger btn-xs' onClick={() => fetchDeletePost(post.id)}>
                  <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
                  Delete post
                </button>
              
                <button className='btn btn-success btn-xs' onClick={() => this.triggerVote("upVote")}>
                  <span className="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>
                </button>
              
                <button className='btn btn-warning btn-xs' onClick={() => this.triggerVote("downVote")}>
                  <span className="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span>
                </button>
              
                <button className='btn btn-info btn-xs'>
                  <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>  
                  Edit post
                </button>
              </div>  
            </div>  
          </div>
        </div>
      </div>    
    )
  }
}

export default PostTeaser

