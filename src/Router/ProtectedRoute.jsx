import { Navigate, Outlet } from 'react-router-dom'

import useUser from 'Hooks/useUser'
import Spinner from 'Components/Spinner'
import { Verification, Suspended } from 'Pages/Status'

const ProtectedRoute = ({ redirectPath = '/auth/login', children }) => {
    const { user, loading } = useUser()

    if (loading) return <Spinner/>

    if (!user) {
        return <Navigate to={redirectPath} replace/>
    }

    console.log(user.status)
    if (user.status === 'verification') {
        return <Verification/>
    } 

    if (user.status === 'suspended') {
        return <Suspended/>
    }

    return children ? children : <Outlet/>
}

export default ProtectedRoute