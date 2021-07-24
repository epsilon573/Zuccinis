import React,{ useState } from 'react'
import {Grid,Card,CardContent,TextField,Button,Typography} from '@material-ui/core'
import Particles from 'react-particles-js'
import particleConfig from '../config/particle-config'
import {Link, BrowserRouter as Router} from 'react-router-dom';

function login() {

  return (
    <>
      <div>
        <Grid container>
          <Grid item xs={12} sm={6}  style={{color: "#FFFFFF", backgroundColor: "#2c2e43", minHeight: "100vh"}}>
            <Particles height="100vh" params={particleConfig} />
            Zuccini's
          </Grid>
          <Grid container xs={12} sm={6} justify="center" alignItems="center">
            <Card style={{width:"50%"}}>
            <CardContent>
              <Typography align="center" variant="h4"> Login </Typography> 
            </CardContent>
            <CardContent>
              <TextField id="outlined-email-input" label="Email" variant="outlined" fullWidth/>
              </CardContent>
              <CardContent>
              <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" variant="outlined" fullWidth/>
              </CardContent>
              <CardContent>
              <Button fullWidth variant="contained" color="primary" > Log In</Button>
              </CardContent>
              <CardContent>
              <Typography align="center">  Not a Member? <Router> <Link to='/reg'> Signup </Link> </Router> </Typography> 
              </CardContent>
              <CardContent>
              <Typography align="center">  Are you admin? <Router> <Link to='/admin'> click here </Link> </Router> </Typography> 
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default login;
