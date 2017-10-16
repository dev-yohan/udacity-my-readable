import React, {Component} from 'react'
import PostsList from './posts/PostsList'

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
        <PostsList
          posts={this.props.posts}
          categories={this.props.categories}/>
      </div>
    )
  }
}

export default Home
