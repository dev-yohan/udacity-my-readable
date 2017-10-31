import React, {Component} from 'react'
import PostsList from './posts/PostsList'
import { Link } from 'react-router-dom'

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
    this.props.getAllPosts()
  }

  render() {

    return (
      <div>
        <div className='row'>
          <div className='col-lg-10 col-md-10 col-sm-12 col-xs-12'>
            <ul className="breadcrumb">
              <li className="active">Home</li>
            </ul>
          </div>
          <div className='col-lg-2 col-md-2 col-sm-12 col-xs-12'>
            <div className="dropdown sorter pull-right">
              {`Sort by ` }
              <select  onChange={this.filterBy} value={this.state.sortBy}>
                <option value="select">Select</option>
                <option value="date">Date</option>
                <option value="score">Vote score</option>
              </select>
            </div>
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
        />
      </div>
    )
  }
}

export default Home
