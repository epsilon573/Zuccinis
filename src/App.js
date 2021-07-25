import React from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom';
import UserLogin from './components/userlogin'
import AdminLogin from './components/adminlogin'
import Signup from './components/signup'
import AdminPanel from './components/adminpanel';

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
        <Route path='/adminpanel' exact>
          <AdminPanel/>
        </Route>
      </Router>
    </>
  );
}

export default App;
