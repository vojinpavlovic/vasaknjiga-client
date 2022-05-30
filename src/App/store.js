import { configureStore } from '@reduxjs/toolkit'
import usersReducer from "Features/user/userSlice"

export default configureStore({
    reducer: {
        user: usersReducer
    }
});
