import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getUser } from 'Features/user/userSlice'

const useUser = () => {
    const { user, loading } = useSelector((state) => state.user)
    
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getUser())
    }, [dispatch])
    
    return {user, loading}
}

export default useUser