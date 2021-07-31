import React, {useState, useEffect} from 'react'
import {Grid,Card,CardContent,TextField,Button,Typography } from '@material-ui/core'
import {Link, useHistory} from 'react-router-dom';
import {createTheme, ThemeProvider, responsiveFontSizes} from '@material-ui/core/styles'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import Axios from 'axios';

function Users() {
  
    let theme = createTheme();
    theme = responsiveFontSizes(theme);
    const history = useHistory();

    const [users, setUsers] = useState([]);
    const [email, setEmail] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

  const getUsers = () => {
    Axios.get('http://localhost:5000/getUsers').then((res)=>{
        setUsers(res.data);
    });
  };

  const removeUser = () => {
    console.log('Removing User');
    var MyObj = {
      userEmail: email,
    };
    console.log(MyObj);
    Axios.post('http://localhost:5000/removeUser',MyObj).then((res)=>{
        if(res.data==="User Removed")
            history.push('/users');
        else
        {
            setErrorMsg(res.data);
        }
    });
  }

  useEffect(()=>{
    getUsers();
  },[]);

  return (
    <>
      <div>
      <ThemeProvider theme={theme}>
        <Grid container> 
          <Grid container xs={12} sm={6} justify="center" style={{color: "#FFFFFF", backgroundColor: "#2c2e43", minHeight: "100vh", padding: "5%"}}>
            <Card style={{width:"90%", height:"auto"}}>
              <CardContent>
            <TableContainer component={Paper} >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                              <Typography variant="h6"> Name </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography variant="h6"> Email </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography variant="h6"> Contact </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                      {
                        users.map((row)=>(
                          <TableRow key={row._id}>
                            <TableCell>
                              <Typography> {row.name} </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography> {row.email} </Typography>
                            </TableCell> 
                            <TableCell>
                              <Typography> {row.contact} </Typography>
                            </TableCell>   
                          </TableRow>
                        ))
                      }
                    </TableBody>
                </Table>
            </TableContainer>
            </CardContent>
            </Card>
          </Grid>
          <Grid container xs={12} sm={6} justify="center" alignItems="center" style={{padding: '5%'}}>
            <Card style={{width:"50%"}}>
             <CardContent>
              <Typography align="center" variant="h4"> Remove User </Typography> 
            </CardContent>
            <CardContent>
            <TextField 
                fullWidth
                id="outlined-email-input"
                label="Email"
                variant="outlined"
                onChange={(event)=>{setEmail(event.target.value)}}
                helperText={errorMsg}
              />
            </CardContent>
              <CardContent>
              <Button fullWidth variant="contained" color="primary" onClick={removeUser}> Remove </Button>
              </CardContent>
              <CardContent>
              <Typography variant="h6" align="center"> <Link to='/adminpanel'>  Admin Panel </Link> </Typography> 
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        </ThemeProvider>
      </div>
    </>
  );
}

export default Users;
