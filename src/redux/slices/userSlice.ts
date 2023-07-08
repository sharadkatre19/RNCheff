import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export interface UserState {
  user: object | null;
}

const initialState: UserState = {
  user: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<object>) => {
      state.user = action.payload
    }
  }
})

export const { incrementByAmount } = userSlice.actions

export const selectCount = (state: RootState) => state.users.user;

export default userSlice.reducer;
