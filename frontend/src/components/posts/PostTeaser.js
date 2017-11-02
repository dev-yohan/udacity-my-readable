import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Moment   from 'react-moment'
import moment   from 'moment'
import EditPost from './EditPost'

class PostTeaser extends Component {
  constructor(props) {
    super(props);
    this.truncate = this.truncate.bind(this)
    this.triggerVote = this.triggerVote.bind(this)
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
    if (str.length > 100) {
      return str.substr(0, 99);
    }
    return str;
  }

  render() {
    const { category, post, fetchDeletePost } = this.props
    const { title, body, author, id, commentCount, voteScore } = post
    const postDate = moment(new Date(post.timestamp));

    return (
      <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
        <div className='thumbnail postTeaser-category'>
          <div className='caption'>
            {category &&
              <Link to={`${category.path}/${id}`}>
                <h3>
                {title}  
                </h3>
              </Link>
            }
            <h4>{`By ${author}`}</h4>
            <h5>
              <Moment format="YYYY/MM/DD">
                {postDate}
              </Moment>
            </h5>
            <p>
              {this.truncate(body)}
            </p>
            <ul className="nav nav-pills">
              <li className="active">
                <a>
                  Votes <span className="badge">{voteScore}</span>
                </a>
              </li>
              <li className="active">
                <a>
                  Comments <span className="badge">{commentCount}</span>
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
                <button className='btn btn-danger btn-xs' onClick={() => fetchDeletePost(id)}>
                  <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
                  Delete post
                </button>
              
                <button className='btn btn-success btn-xs' onClick={() => this.triggerVote("upVote")}>
                  <span className="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>
                </button>
              
                <button className='btn btn-warning btn-xs' onClick={() => this.triggerVote("downVote")}>
                  <span className="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span>
                </button>
              
                <button className='btn btn-info btn-xs' data-toggle="modal" data-target={`#editModal_${id}`}>
                  <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>  
                  Edit post
                </button>
                <EditPost 
                id={id}
                post={post}
                editPost={this.props.editPost}/>
              </div>  
            </div>  
          </div>
        </div>
      </div>    
    )
  }
}

export default PostTeaser

