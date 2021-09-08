import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '0', name: 'Rahul kumar' },
  { id: '1', name: 'Tianna jenkins' },
  { id: '2', name: 'Kevin Grant' },
  { id: '3', name: 'Jonathan volvano' },
]

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
})

export const users = (state) => state.users
export default userSlice.reducer
