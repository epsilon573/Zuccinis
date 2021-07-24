import React from 'react'
import {Link, Route, BrowserRouter as Router} from 'react-router-dom';
import UserLogin from './components/userlogin'

function App() {
  return (
    <>
      <Router>
        <Route path='/userlogin' exact>
          <UserLogin/>
        </Route>
      </Router>
    </>
  );
}

export default App;
