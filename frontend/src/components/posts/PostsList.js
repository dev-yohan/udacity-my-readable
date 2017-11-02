import React from 'react'
import PostTeaser from './PostTeaser'

export default function PostsList ({ posts, categories, comments, fetchDeletePost, addPostVote, editPost }) {
  return (
    <div className='row'>
      <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
        {posts.map((post) => (
          <PostTeaser
            key={post.id}
            post={post}
            category={categories.filter(x => x.name === post.category)[0]}
            fetchDeletePost={fetchDeletePost}
            addPostVote={addPostVote}
            editPost={editPost}
          />
        ))}
      </div>
    </div>
  )
}
