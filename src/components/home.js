import React,{ useState } from 'react'
import {Grid,Card,CardContent,TextField,Button,Typography} from '@material-ui/core'
import Particles from 'react-particles-js'
import particleConfig from '../config/particle-config'
import {Link, BrowserRouter as Router} from 'react-router-dom';

function home() {

  return (
    <>
      <div>
       <h1>Welcome to home</h1>
       <Link to="/login">Login page</Link>;
      </div>
    </>
  );
}

export default home;
