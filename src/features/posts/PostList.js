import React from 'react'

import { useSelector } from 'react-redux'

export default function PostsList() {
  const posts = useSelector((state) => state.posts)
  const renderedPost = posts.map((post) => (
    <article className="post-excerpt" id={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>
    </article>
  ))

  return (
    <>
      <section clssName="post-list">
        <h2>Posts</h2>
        {renderedPost}
      </section>
    </>
  )
}
