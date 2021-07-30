import React,{ useState } from 'react'
import {Grid,Card,CardContent,TextField,Button,Typography} from '@material-ui/core'
import Particles from 'react-particles-js'
import particleConfig from '../config/particle-config'
import {Link} from 'react-router-dom';
import {makeStyles, createTheme, ThemeProvider, responsiveFontSizes} from '@material-ui/core/styles'
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
  },
}));

function ResetPassword() {
  
  const classes = useStyles();
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const SendOTP = () =>{
    var myObj = {
      userEmail : email
    };

    console.log(myObj);

    Axios.post('http://localhost:5000/SendOTP',myObj).then((res)=>{
        if(res.data === "User Found")
        {
          window.location.href = '/newPassword/?email='+email ;
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
          <Grid container xs={12} sm={6} justify="center" style={{color: "#FFFFFF", backgroundColor: "#2c2e43", minHeight: "100vh"}}>
            <Particles height="100vh" width="100%" params={particleConfig} />
            <Typography variant="h1" className={clsx(classes.title, classes.tokyo)}> Zuccini's </Typography>
          </Grid>
          <Grid container xs={12} sm={6} justify="center" alignItems="center" style={{padding: '5%'}}>
            <Card style={{width:"50%"}}>
            <CardContent>
              <Typography align="center" variant="h4"> Reset Password </Typography> 
            </CardContent>
            <CardContent>
              <TextField 
                fullWidth
                id="outlined-email-input"
                label="Email"
                type="email"
                variant="outlined"
                onChange={(event)=>{ setEmail(event.target.value) }}
                helperText={errorMsg}
              />
              </CardContent>
              <CardContent>
              <Button fullWidth variant="contained" color="primary" onClick={SendOTP}> Send OTP </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        </ThemeProvider>
      </div>
    </>
  );
}

export default ResetPassword;
