import { BrowserRouter, Route, Routes } from 'react-router-dom'

/* My libs */
import AuthRoute from './AuthRoute'
import ProtectedRoute from './ProtectedRoute'


/* Auth Pages */
import Login from 'Pages/Login'
import Register from 'Pages/Register'

/* Protected Pages */
import Status from 'Pages/Status'

/* Other Pages */
import NotFound from 'Pages/NotFound'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Routes that does not allows authorized users */}
                <Route element={<AuthRoute/>}>
                    <Route path="/auth/login" element={<Login/>}/>
                    <Route path="/auth/register" element={<Register/>}/>
                </Route>
                {/* Routes that only allows authorized users*/}
                <Route element={<ProtectedRoute/>}>
                    <Route path="/test" element={<NotFound/>}/>
                </Route>
                {/*Routes that can access both authorized and unauthorized users*/}
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router