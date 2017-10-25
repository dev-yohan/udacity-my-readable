import React from 'react'
import Moment             from 'react-moment'
import moment             from 'moment'

export default function CommentBlock({ comment, addCommentVote }) {
  const commentDate = comment ? moment(new Date(comment.timestamp)) : null;

  return (
    <blockquote className='comment'>
      <p>{comment.body}</p>
      <small>
        <Moment format="YYYY/MM/DD">
          {commentDate}
        </Moment>
        <cite>{` by ${comment.author}`}</cite>
      </small>
      <ul className="nav nav-pills">
        <li className="active">
          <a href="#">
            Votes <span className="badge">{comment.voteScore}</span>
          </a>
        </li>
        <li>
          <a onClick={e => addCommentVote(comment.id, {parentId:comment.parentId, option: 'upVote'})}>
            <span className="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>
          </a>
        </li>
        <li>
          <a  onClick={e => addCommentVote(comment.id, {parentId:comment.parentId, option: 'downVote'})}>
            <span className="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span>
          </a>
        </li>
      </ul>
    </blockquote>
  )
}
