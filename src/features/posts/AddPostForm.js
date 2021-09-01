import { nanoid } from '@reduxjs/toolkit'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { postAdded } from './postsSlice'

export default function AddPostform() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const dispatch = useDispatch()

  const ontitleChanged = (e) => setTitle(e.target.value)
  const onContentChanged = (e) => setContent(e.target.value)

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content,
        })
      )
      setTitle('')
      setContent('')
    }
  }

  return (
    <>
      <section>
        <h2>Add Postform</h2>
        <form>
          <label htmlFor="postTitle"> post Title </label>
          <input
            type="text"
            name="postTitle"
            value={title}
            id="postTitle"
            placeholder="Enter title"
            onChange={ontitleChanged}
          />
          <label htmlFor="postContent">Content:</label>
          <textarea
            id="postContent"
            name="postContent"
            value={content}
            onChange={onContentChanged}
          />
          <button type="button" onClick={onSavePostClicked}>
            Save Post
          </button>
        </form>
      </section>
    </>
  )
}
