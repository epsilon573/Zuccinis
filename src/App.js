import "./App.css";
import React,{ useState } from 'react'
import {Grid,Card,CardContent,TextField,Button,Typography} from '@material-ui/core'
import Particles from 'react-particles-js'
import particleConfig from './config/particle-config'
import { Route, BrowserRouter as Router } from "react-router-dom";
import {Link} from 'react-router-dom';
import login from './components/login';
import Home from './components/home';
import Reg from './components/signup';
import Product from './components/product';
import Admin from './components/adminlogin';
import "bootstrap/dist/css/bootstrap.min.css";

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
