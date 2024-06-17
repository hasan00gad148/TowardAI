import { configureStore, createSlice  } from '@reduxjs/toolkit'


export const userSlice = createSlice({
    name: 'user',
    initialState: {
      user: null
      ,
    },
    reducers: {
        signin: (state,action) => {
        state.user = action.payload
      },
      logout: (state) => {
        state.user = null
      },
    },
  })


const userStore = configureStore({reducer:{userState: userSlice.reducer}})


export const { signin, logout} = userSlice.actions
export default userStore
