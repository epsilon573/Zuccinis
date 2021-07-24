import React from 'react'
import {Link, Route, BrowserRouter as Router} from 'react-router-dom';
import UserLogin from './components/userlogin'
import AdminLogin from './components/adminlogin'
import Signup from './components/signup'

function App() {
  return (
    <>
      <Router>
        <Route path='/userlogin' exact>
          <UserLogin/>
        </Route>
        <Route path='/adminlogin' exact>
          <AdminLogin/>
        </Route>
        <Route path='/signup' exact>
          <Signup/>
        </Route>
      </Router>
    </>
  );
}

export default App;
