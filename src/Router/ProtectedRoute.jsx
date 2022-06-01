import { Navigate, Outlet } from 'react-router-dom'

// Statuses
import Suspended from 'Pages/Suspended/suspended'
import VerificationNeeded from 'Pages/Verification/verificationNeeded'

const ProtectedRoute = ({user, redirectPath = '/auth/login', children }) => {
    if (!user) {
        return <Navigate to={redirectPath} replace/>
    }

    if (user.status === 'verification') {
        return <VerificationNeeded/>
    } 

    if (user.status === 'suspended') {
        return <Suspended/>
    }

    return children ? children : <Outlet/>
}

export default ProtectedRoute