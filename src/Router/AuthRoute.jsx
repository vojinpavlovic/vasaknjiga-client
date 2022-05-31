import { Navigate, Outlet } from 'react-router-dom'

import useUser from 'Hooks/useUser'
import Spinner from 'Components/Spinner'

const AuthRoute = ({ redirectPath = '/', children }) => {
    const { user, loading } = useUser()

    if (loading) return <Spinner/>

    if (user) {
        return <Navigate to={redirectPath} replace/>
    }

    return children ? children : <Outlet/>
}

export default AuthRoute