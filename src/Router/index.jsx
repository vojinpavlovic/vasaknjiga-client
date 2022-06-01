import { BrowserRouter, Route, Routes } from 'react-router-dom'

/* My libs */
import AuthRoute from './AuthRoute'
import ProtectedRoute from './ProtectedRoute'
import useUser from 'Hooks/useUser'
import Spinner from 'Components/Spinner'

/* Auth Pages */
import Login from 'Pages/Login'
import Register from 'Pages/Register'

/* Protected Pages */
import VerifyVerification from 'Pages/Verification/verifyVerification'
/* Other Pages */
import NotFound from 'Pages/NotFound'

const Router = () => {
    const { user, loading } = useUser()

    if (loading) return <Spinner/>

    return (
        <BrowserRouter>
            <Routes>
                {/* Routes that does not allows authorized users */}
                <Route element={<AuthRoute user={user}/>}>
                    <Route path="/auth/login" element={<Login/>}/>
                    <Route path="/auth/register" element={<Register/>}/>
                </Route>
                {/* Routes that only allows authorized users*/}
                <Route element={<ProtectedRoute user={user}/>}>
                    <Route path="/test" element={<NotFound/>}/>
                </Route>
                {/*Routes that can access both authorized and unauthorized users*/}
                <Route path="/account/verify" element={<VerifyVerification/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router