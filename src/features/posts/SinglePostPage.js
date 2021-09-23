import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectPostById } from './postsSlice'
export default function SinglePostPage({ match }) {
  const { postId } = match.params
  const post = useSelector((state) => selectPostById(state, postId))

  if (!post) {
    return (
      <section>
        <h2>Post not found</h2>
      </section>
    )
  }

  return (
    <section className="post">
      <h2>{post.title}</h2>
      <p classNmae="post-content">{post.content}</p>
      <Link to={`/editPost/${post.id}`} className="button">
        Ediit Post
      </Link>
    </section>
  )
}
