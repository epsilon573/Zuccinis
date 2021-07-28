import React,{ useState } from 'react'
import {Grid,Card,CardContent,TextField,Button,Typography} from '@material-ui/core'
import Particles from 'react-particles-js'
import particleConfig from '../config/particle-config'
import {Link} from 'react-router-dom';
import {makeStyles, createTheme, responsiveFontSizes, ThemeProvider} from '@material-ui/core/styles'
import clsx from 'clsx'
import Axios from 'axios'

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

function AdminLogin() {
  
  const classes = useStyles();
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const Login = () =>{
    var myObj = {
      adminEmail : email,
      adminPassword : password
    };

    console.log(myObj);

    Axios.post('http://localhost:5000/adminLogin',myObj).then((res)=>{
        if(res.data === "User Found")
        {
          window.location.href = '/adminpanel';
        }
        else
        {
          setErrorMsg(res.data);
        }
    })
  }

  return (
    <>
      <div>
        <ThemeProvider theme={theme}>
        <Grid container>
          <Grid container xs={12} sm={6} justify = "center" style={{color: "#FFFFFF", backgroundColor: "#2c2e43", minHeight: "100vh" }}>
            <Particles height="100vh" width="100%" params={particleConfig} />
            <Typography variant="h1" className={clsx(classes.title, classes.tokyo)}> Zuccini's </Typography>
          </Grid>
          <Grid container xs={12} sm={6} justify="center" alignItems="center" style={{padding: '5%'}}>
            <Card style={{width:"50%"}}>
            <CardContent>
              <Typography align="center" variant="h4"> Admin Login </Typography> 
            </CardContent>
            <CardContent>
              <TextField id="outlined-email-input" label="Email" variant="outlined" fullWidth 
                onChange={(event)=>{ setEmail(event.target.value) }} />
              </CardContent>
              <CardContent>
              <TextField id="outlined-password-input" label="Password" type="password" variant="outlined" fullWidth
                onChange={(event)=>{ setPassword(event.target.value) }} 
                helperText = {errorMsg} />
              </CardContent>
              <CardContent>
              <Button fullWidth variant="contained" color="primary" onClick={Login} > Log In </Button>
              </CardContent>
              <CardContent>
              <Typography variant="h6" align="center">  Not Admin? <Link to='/userlogin'> Login Here </Link> </Typography> 
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        </ThemeProvider>
      </div>
    </>
  );
}

export default AdminLogin;
