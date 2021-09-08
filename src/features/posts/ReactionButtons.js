import React from 'react'
import { useDispatch } from 'react-redux'
import { reactionAdded } from './postsSlice'

const reactionEmoji = {
  thumbsUp: '👍',
  hooray: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀',
}

export default function ReactionButtons({ post }) {
  const dispatch = useDispatch()
  const reactionButtons = Object.entries(reactionEmoji).map(
    ([name, reaction]) => {
      return (
        <button
          key={name}
          onClick={() =>
            dispatch(reactionAdded({ postId: post.id, reaction: name }))
          }
        >
          {reaction}
          {post.reactions[name]}
        </button>
      )
    }
  )

  return <div className="reactionButtons">{reactionButtons}</div>
}
