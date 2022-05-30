import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Login from 'Pages/Login'
import Register from 'Pages/Register'
import NotFound from 'Pages/NotFound';
import useUser from 'Hooks/useUser';

function App() {
  useUser()

  return (
      <Router>
        <Routes>
          <Route path="/auth/login" element={<Login/>}/>
          <Route path="/auth/register" element={<Register/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
  );
}

export default App;
