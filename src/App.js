<<<<<<< HEAD
=======
import "./App.css";
>>>>>>> kamal
import React from 'react'
import { Route, BrowserRouter as Router } from "react-router-dom";
import UserLogin from './components/userLogin';
import Home from './components/home';
import UserSignup from './components/signup';
import Product from './components/product';
import AdminLogin from './components/adminlogin';
import AdminPanel from './components/adminpanel.js';
import AddCategory from './components/addcategory.js';
import AddProduct from './components/addproduct.js';
import AboutUs from './components/aboutus.js';
import ContactUs from './components/contactus.js';
import ResetPassword from './components/resetpassword';
import NewPassword from './components/newpassword';
import Stats from './components/stats';
import Users from './components/users';

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Router>
         <Route path='/' exact>
          <Home/>
        </Route>
        <Route path='/userlogin' exact>
          <UserLogin/>
        </Route>
        <Route path='/adminlogin' exact>
          <AdminLogin/>
        </Route>
        <Route path='/signup' exact>
          <UserSignup/>
        </Route>
        <Route path='/adminpanel' exact>
          <AdminPanel/>
        </Route>
        <Route path='/addcategory' exact>
          <AddCategory/>
        </Route>
        <Route path='/addproduct' exact>
          <AddProduct/>
        </Route>
        <Route path='/about' exact>
          <AboutUs/>
        </Route>
        <Route path='/contact' exact>
          <ContactUs/>
        </Route>
        <Route path='/resetpassword' exact>
          <ResetPassword/>
        </Route>
        <Route path='/newpassword'>
          <NewPassword/>
        </Route>
        <Route path='/stats'>
          <Stats/>
        </Route>
        <Route path='/users'>
          <Users/>
        </Route>
      </Router>
    </>
  );
}

export default App;
