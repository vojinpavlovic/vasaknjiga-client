import { Navigate, Outlet } from 'react-router-dom'

const AuthRoute = ({ user, redirectPath = '/test', children }) => {
    if (user) {
        return <Navigate to={redirectPath} replace/>
    }

    return children ? children : <Outlet/>
}

export default AuthRoute