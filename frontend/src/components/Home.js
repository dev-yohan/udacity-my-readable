import React, {Component} from 'react'
import PostsList          from './posts/PostsList'
import PostsFilter        from './shared/PostsFilter'
import { Link }           from 'react-router-dom'

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sortBy: 'select'
    }
    this.filterBy = this.filterBy.bind(this)
  }

  filterBy(event) {
    this.setState({sortBy: event.target.value})
    if(event.target.value === 'date')
    {this.props.sortPostsByDate()}
    else if(event.target.value === 'score')
    {this.props.sortPostsByScore()}
    else {
      this.props.getAllPosts()
    }
  }

  componentDidMount() {
    if(this.props.category === null){
      this.props.getAllPosts()
    } else {
      this.props.getPostsByCategory(this.props.category)
    }
  }

  componentWillReceiveProps(nextProps) {
    var nextCategory = null
    if(this.props.category !== null){
      nextCategory = nextProps.category;
      if (nextCategory !== this.props.category) {
        this.props.getPostsByCategory(nextCategory)
      }
    }
  }

  render() {

    return (
      <div>
        <div className='row'>
          <div className='col-lg-10 col-md-10 col-sm-12 col-xs-12'>
              {this.props.category === null &&
                <ul className="breadcrumb">
                  <li className="active">Home</li>
                </ul>  
              }
              {this.props.category !== null &&
                <ul className="breadcrumb">
                  <li>
                    <Link to='/'>Home</Link>
                  </li>
                  <li className="active">{this.props.category}</li>
                </ul>  
              }
          </div>
          <div className='col-lg-2 col-md-2 col-sm-12 col-xs-12'>
            <PostsFilter 
              value={this.state.sortBy}
              changeHandler={this.filterBy}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-10 col-md-10 col-sm-10 col-xs-10'>
            <h1>Posts</h1>
          </div>
          <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2'>
            <Link to='/admin/posts/new-post' className="btn btn-primary add_post pull-right">Create Post</Link>
          </div>   
        </div>  
        <PostsList
          posts={this.props.posts}
          categories={this.props.categories}
          fetchDeletePost={this.props.fetchDeletePost}
          addPostVote={this.props.addPostVote}
          editPost={this.props.editPost}
        />
      </div>
    )
  }
}

export default Home
