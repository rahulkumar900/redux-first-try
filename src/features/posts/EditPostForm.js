import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { postUpdated } from './postsSlice'

export default function EditPostForm({ match }) {
  const { postId } = match.params
  const post = useSelector((state) => state.posts.find((p) => p.id === postId))
  const [title, setTitle] = useState(post.title)
  const [content, setContent] = useState(post.content)
  const dispatch = useDispatch()
  const history = useHistory()
  console.log(post)

  const onTitleChanged = (e) => setTitle(e.target.value)
  const onContentChanged = (e) => setContent(e.target.value)

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postUpdated({ id: post.id, title, content }))
      history.push(`/posts/${post.id}`)
    }
  }
  return (
    <section>
      <h2>Edit Post Postform</h2>
      <form>
        <label htmlFor="postTitle"> post Title </label>
        <input
          type="text"
          name="postTitle"
          value={title}
          id="postTitle"
          placeholder="Enter title"
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSavePostClicked}>
          edit post
        </button>
      </form>
    </section>
  )
}
