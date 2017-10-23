import React, {Component} from 'react'
import Commentslist       from '../comments/CommentsList'
import { Link }           from 'react-router-dom'
import Moment             from 'react-moment'
import moment             from 'moment'
import PostComment        from './PostComment'

class PostDetail extends Component {

  constructor(props) {
    super(props);
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
        {category && post &&
          <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
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
        }
        <div className='row'>
          {post &&
            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
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
          }
        </div>
        <div className='row'>
          <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
            <button 
            className='btn btn-success btn-xs' 
            data-toggle="modal" 
            data-target="#myModal">
              <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
              Add new comment
            </button>
          </div>
        </div>    
        <div className='row'>
          <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
            <Commentslist comments={comments}/>
          </div>
        </div>
        <PostComment createPostComment={this.props.createPostComment}/>
      </div>
    )
  }
}

export default PostDetail
