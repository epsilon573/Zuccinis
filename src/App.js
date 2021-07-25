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
      <div>
      <Router>
          <Route path="/" exact component={Home} /> 
          <Route path="/login" component={login} />
          <Route path="/reg" component={Reg} />
          <Route path="/product" component={Product} />
          <Route path="/admin" component={Admin} />
           
          
        </Router>
      </div>
    </>
  );
}

export default App;
