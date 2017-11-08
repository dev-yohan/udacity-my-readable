import React from 'react'
import CommentBlock from './CommentBlock'

export default function CommentsList ({ comments, addCommentVote, deleteComment, editComment, category, post }) {
  return (
    <div className='row'>
      <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
        {comments && comments.map((comment) => (
          <CommentBlock 
            key={comment.id} 
            comment={comment}
            addCommentVote={addCommentVote}
            deleteComment={deleteComment}
            editComment={editComment}
            category={category}
            post={post}
          />
        ))}
      </div>
    </div>
  )
}
