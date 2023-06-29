import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface UserInfo {
    userInfo: unknown | null
}

const storedUserInfo = localStorage.getItem('userInfo')
const initialState: UserInfo = {
    userInfo: storedUserInfo ? JSON.parse(storedUserInfo) : null
}

const authslice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
     setCredentials: (state, action: PayloadAction<UserInfo>) => {
        state.userInfo = action.payload;
        localStorage.setItem('userInfo', JSON.stringify(action.payload))
     },
     clearCredentials: (state, action: PayloadAction<UserInfo>) => {
        state.userInfo = null
        localStorage.removeItem('userInfo')
     }
   }
})

export const { setCredentials, clearCredentials } = authslice.actions

export default authslice.reducer 