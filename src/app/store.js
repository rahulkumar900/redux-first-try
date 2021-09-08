import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/users/userSlice'

import postsReducer from '../features/posts/postsSlice'

export default configureStore({
  reducer: {
    posts: postsReducer,
    users: userReducer,
  },
})
