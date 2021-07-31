import React,{ useState } from 'react'
import {Grid,Card,CardContent,TextField,Button,Typography} from '@material-ui/core'
import Particles from 'react-particles-js'
import particleConfig from '../config/particle-config'
import {useHistory} from 'react-router-dom';
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

function NewPassword() {
  
  const classes = useStyles();
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  const history = useHistory();

  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const email = params.get('email');

  const [OTP, setOTP] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const SendOTP = () =>{
    var myObj = {
      userEmail : email,
      userPassword : password,
      userOTP : OTP
    };

    console.log(myObj);

    Axios.post('http://localhost:5000/newPass',myObj).then((res)=>{
        if(res.data === "Password Reset")
        {
          history.push('/userlogin');
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
              <Typography align="center" variant="h4"> New Password </Typography> 
            </CardContent>
            <CardContent>
              <TextField 
                fullWidth
                id="outlined-otp-input"
                label="OTP"
                type="number"
                variant="outlined"
                onChange={(event)=>{ setOTP(event.target.value) }}
              />
              </CardContent>
              <CardContent>
              <TextField 
                fullWidth
                id="outlined-password-input"
                label="New Password"
                type="password"
                variant="outlined"
                onChange={(event)=>{ setPassword(event.target.value) }}
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

export default NewPassword;
