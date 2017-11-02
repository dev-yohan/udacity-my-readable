import React, {Component} from 'react'
import Commentslist       from '../comments/CommentsList'
import { Link }           from 'react-router-dom'
import Moment             from 'react-moment'
import moment             from 'moment'
import PostComment        from './PostComment'
import EditPost           from './EditPost'

class PostDetail extends Component {

  constructor(props) {
    super(props);
    this.triggerVote = this.triggerVote.bind(this)
  }

  triggerVote (vote){ 
    this.props.addPostVote(
      this.props.postId,
      {option: vote}
    )
  }

  componentDidMount() {
    this.props.getPost(this.props.postId)
    this.props.getPostComments(this.props.postId)
  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    const { post, comments } = this.props
    const category = this.props.categories.filter(x => x.name === this.props.category)[0]
    const postDate = post ? moment(new Date(post.timestamp)) : null;

    return (
      <div>
        {category && post && Object.keys(post).length !== 0 && !post.error &&
          <div className='row'>
            <div className='col-lg-10 col-md-10 col-sm-12 col-xs-12'>
              <ul className="breadcrumb">
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to={`/${category.path}`}>{category.name}</Link>
                </li>
                <li className="active">
                  {post.title}
                </li>
              </ul>
            </div>
            <div className='col-lg-2 col-md-2 col-sm-12 col-xs-12 vote_block'>
              Rate this post
              <a onClick={() => this.triggerVote("upVote")}>
                <span className="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>
              </a>
              <a onClick={() => this.triggerVote("downVote")}>
                <span className="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span>
              </a>
            </div>
          </div>    
        }
        {post && Object.keys(post).length !== 0 && !post.error &&
          <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
              <span className="badge">{` ${post.voteScore} votes`}</span>
              &nbsp;
              <span className="badge">{` ${post.commentCount} comments`}</span>              
              <h1>{post.title}</h1>
              <h4>
                {`By ${post.author} `}
                <Moment format="YYYY/MM/DD">
                  {postDate}
                </Moment>
              </h4>
              <p>
                {post.body}
              </p>
            </div>
            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
              <button 
              className='btn btn-success btn-xs' 
              data-toggle="modal" 
              data-target="#myModal">
                <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                Add new comment
              </button>
              &nbsp;
              <button 
              className='btn btn-success btn-xs' 
              data-toggle="modal" 
              data-target={`#editModal_${post.id}`}>
                <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                Edit post
              </button>
            </div>
          </div>  
        }
        {((post && post.error) || (post && Object.keys(post).length === 0)) &&
          <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
              <h1>Oops, Post not found!!</h1>
              <Link to='/'>Back to home</Link>
            </div>
          </div>    
        } 
        <div className='row'>
          <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
            <Commentslist 
            comments={comments}
            addCommentVote={this.props.addCommentVote}
            deleteComment={this.props.deleteComment}
            editComment={this.props.editComment}/>
          </div>
        </div>
        {post &&
          <div>
            <PostComment 
            createPostComment={this.props.createPostComment} 
            postId={post.id}
            category={category}/>
            <EditPost 
            id={post.id}
            post={post}
            editPost={this.props.editPost}/>
          </div>  
        }
      </div>
    )
  }
}

export default PostDetail
