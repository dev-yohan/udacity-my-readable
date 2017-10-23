import React from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import moment from 'moment'

function truncate(str) {
  if (str.length > 100)
    return str.substr(0, 99)
   else
    return str
}


export default function PostsTeaser ({ post, category, fetchDeletePost }) {
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
            {truncate(post.body)}
          </p>
          <ul className="nav nav-pills">
            <li className="active">
              <a>
                Votes <span className="badge">{post.voteScore}</span>
              </a>
            </li>
            <li>
              {category &&
                <Link to={category.path}>{category.name}</Link>
              }
            </li>
          </ul>
          <div className='row post_controls'>
            <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
              <button className='btn btn-danger btn-xs' onClick={() => fetchDeletePost(post.id)}>
                <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
                Delete post
              </button>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
              <button className='pull-right btn btn-info btn-xs'>
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
