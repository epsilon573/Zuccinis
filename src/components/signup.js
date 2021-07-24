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

function Signup() {

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
              <Typography align="center" variant="h4"> Sign Up </Typography> 
            </CardContent>
            <CardContent>
              <TextField id="outlined-name-input" label="Name"  variant="outlined" fullWidth  />
              </CardContent>
            <CardContent>
              <TextField id="outlined-email-input" label="Email" variant="outlined" fullWidth />
              </CardContent>
              <CardContent>
              <TextField id="outlined-password-input" label="Password" type="password" variant="outlined" fullWidth />
              </CardContent>
              <CardContent>
              <TextField id="outlined-contact-input" label="Contact" variant="outlined" fullWidth />
              </CardContent>
              <CardContent>
              <Button fullWidth variant="contained" color="primary" onclick="window.location.href='./product'"> Sign Up</Button>
              </CardContent>
              <CardContent>
              <Typography align="center">  Already a Member? <Router> <Link to='/login'> Log In </Link> </Router> </Typography> 
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Signup;