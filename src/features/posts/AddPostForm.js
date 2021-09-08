// import { nanoid } from '@reduxjs/toolkit'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { postAdded } from './postsSlice'

export default function AddPostform() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [userId, setUserId] = useState('')

  const users = useSelector((state) => state.users)
  const dispatch = useDispatch()

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

  const ontitleChanged = (e) => setTitle(e.target.value)
  const onContentChanged = (e) => setContent(e.target.value)
  const onAuthorChanged = (e) => setUserId(e.target.value)
  console.log(userId)
  const onSavePostClicked = () => {
    if (title && content && userId) {
      dispatch(
        postAdded({
          title,
          content,
          userId,
        })
      )

      setTitle('')
      setContent('')
      setUserId('')
    }
  }
  const canSave = Boolean(title) && Boolean(content)
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
          <label htmlFor="PostAuthor">Author</label>
          <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
            <option value=""></option>
            {userOptions}
          </select>
          <label htmlFor="postContent">Content:</label>
          <textarea
            id="postContent"
            name="postContent"
            value={content}
            onChange={onContentChanged}
          />
          <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
            Save Post
          </button>
        </form>
      </section>
    </>
  )
}
