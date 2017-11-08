import React, {Component} from 'react'
import PostsList          from '../posts/PostsList'
import PostsFilter        from '../shared/PostsFilter'
import { Link }           from 'react-router-dom'

class CategoryHome extends Component {

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
      this.props.getPostsByCategory(this.props.category)
    }
  }

  componentDidMount() {
    this.props.getPostsByCategory(this.props.category)
  }

  componentWillReceiveProps(nextProps) {
    var nextCategory = nextProps.category;
    if (nextCategory !== this.props.category) {
      this.props.getPostsByCategory(nextCategory)
    }
  }

  render() {

    const category = this.props.categories.filter(x => x.name === this.props.category)[0]

    return (
      <div>
        <div className='row'>
          <div className='col-lg-10 col-md-10 col-sm-12 col-xs-12'>
            <ul className="breadcrumb">
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li className="active">{category.name}</li>
            </ul>
          </div>
          <div className='col-lg-2 col-md-2 col-sm-12 col-xs-12'>
            <PostsFilter 
              value={this.state.sortBy}
              changeHandler={this.filterBy}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
            <h1>{category.name}</h1>
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

export default CategoryHome
