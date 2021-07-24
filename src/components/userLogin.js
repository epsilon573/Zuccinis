import React,{ useState } from 'react'
import {Grid,Card,CardContent,TextField,Button,Typography} from '@material-ui/core'
import Particles from 'react-particles-js'
import particleConfig from '../config/particle-config'
import {Link, BrowserRouter as Router} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles((theme)=>({
  title: {
    position: 'absolute',
    left: '15%',
    top: '40%',
    color: 'white',
    fontSize: '6rem',
  },
  tokyo: {
    fontFamily: ['Zen Tokyo Zoo', 'cursive'].join(',')
  }
}));

function UserLogin() {
  
  const classes = useStyles();

  return (
    <>
      <div>
        <Grid container> 
          <Grid item xs={12} sm={6}  style={{color: "#FFFFFF", backgroundColor: "#2c2e43", minHeight: "100vh"}}>
            <Particles height="100vh" params={particleConfig} />
            <Typography className={clsx(classes.title, classes.tokyo)}> Zuccini's </Typography>
          </Grid>
          <Grid container xs={12} sm={6} justify="center" alignItems="center">
            <Card style={{width:"50%"}}>
            <CardContent>
              <Typography align="center" variant="h4"> Login </Typography> 
            </CardContent>
            <CardContent>
              <TextField 
                fullWidth
                id="outlined-email-input"
                label="Email"
                variant="outlined"
              />
              </CardContent>
              <CardContent>
              <TextField
                fullWidth
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
              />
              </CardContent>
              <CardContent>
              <Button fullWidth variant="contained" color="primary"> Login </Button>
              </CardContent>
              <CardContent>
              <Typography align="center">  Not a Member? <Router> <Link to='/Signup'> Signup </Link> </Router> </Typography> 
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default UserLogin;
