import { useNavigate } from 'react-router'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import fetchAPI from 'Helpers/fetchAPI'

const getUser = createAsyncThunk('user/getDetails', async () => {
    const result = await fetchAPI({
        endpoint: 'user/getDetails',
        method: 'GET',
        credentials: true
    })

    return result
})

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        loading: true
    },
    extraReducers: {
        [getUser.pending]: (state) => {
            state.loading = true;
        },
        [getUser.fulfilled]: (state, action) => {
            state.loading = false;
            // In case result is undefined we want it to be null
            state.user = action.payload.result || null
        },
        [getUser.rejected]: (state) => {
            state.user = null
            state.loading = false
        },
    }
})

export { getUser }

export const { set } = userSlice.actions

export const selectUser = (state) => { 
    return { user: state.user.user, loading: state.user.loading }
}

export default userSlice.reducer;