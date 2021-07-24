import React from 'react'
import {Link, Route, BrowserRouter as Router} from 'react-router-dom';
import UserLogin from './components/userLogin'

function App() {
  return (
    <>
      <Router>
        <Route path='/userLogin' exact>
          <UserLogin/>
        </Route>
      </Router>
    </>
  );
}

export default App;
