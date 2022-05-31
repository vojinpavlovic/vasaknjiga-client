import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { getUser } from 'Features/user/userSlice'

const useUser = () => {
    const { user, loading } = useSelector((state) => state.user)
    
    const location = useLocation()

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getUser())
    }, [dispatch, location])
    
    return {user, loading}
}

export default useUser