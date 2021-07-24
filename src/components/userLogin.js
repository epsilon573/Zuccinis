import React from 'react'
import {Grid,Card,CardContent,TextField,Button,Typography} from '@material-ui/core'
import Particles from 'react-particles-js'
import particleConfig from '../config/particle-config'
import {Link, BrowserRouter as Router} from 'react-router-dom';
import {makeStyles, createTheme, ThemeProvider, responsiveFontSizes} from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles((theme)=>({
  title: {
    position: 'absolute',
    top: '40%',
    color: 'white',
  },
  tokyo: {
    fontFamily: ['Zen Tokyo Zoo', 'cursive'].join(',')
  }
}));

function UserLogin() {
  
  const classes = useStyles();
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <>
      <div>
      <ThemeProvider theme={theme}>
        <Grid container> 
          <Grid container xs={12} sm={6} justify="center" style={{color: "#FFFFFF", backgroundColor: "#2c2e43", minHeight: "100vh"}}>
            <Particles height="100vh" width="100%" params={particleConfig} />
            <Typography variant="h1" className={clsx(classes.title, classes.tokyo)}> Zuccini's </Typography>
          </Grid>
          <Grid container xs={12} sm={6} justify="center" alignItems="center" style={{padding: '5%'}}>
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
              <Typography variant="h6" align="center">  Not a Member? <Router> <Link to='/signup'> Signup </Link> </Router> </Typography> 
              </CardContent>
              <CardContent>
              <Typography variant="h6" align="center">  An Admin? <Router> <Link to='/adminlogin'> Login Here </Link> </Router> </Typography> 
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        </ThemeProvider>
      </div>
    </>
  );
}

export default UserLogin;
