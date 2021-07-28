import React, {useState, useEffect} from 'react'
import {Grid,Card,CardContent,TextField,Button,Typography } from '@material-ui/core'
import {Link} from 'react-router-dom';
import {createTheme, ThemeProvider, responsiveFontSizes} from '@material-ui/core/styles'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import Axios from 'axios';

function AddCategory() {
  
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  const [category, setCategory] = useState([]);
  const [newCategory, setNewCategory] = useState('');

  const getCategory = () => {
    Axios.get('http://localhost:5000/getCategory').then((res)=>{
        console.log(res.data);
        setCategory(res.data);
    });
  };

  const addCategory = () => {
    console.log("Adding new Cateogry "+newCategory);
    Axios.post('http://localhost:5000/addCategory',{ newCategory: newCategory}).then((res)=>{
      getCategory();
    });
  }

  useEffect(()=>{
    getCategory();
  },[category]);

  return (
    <>
      <div>
      <ThemeProvider theme={theme}>
        <Grid container> 
          <Grid container xs={12} sm={6} justify="center" style={{color: "#FFFFFF", backgroundColor: "#2c2e43", minHeight: "100vh", padding: "5%"}}>
            <Card style={{width:"50%", height:"auto"}}>
              <CardContent>
            <TableContainer component={Paper} >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                              <Typography variant="h6"> Category </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                      {
                        category.map((row)=>(
                          <TableRow key={row._id}>
                            <TableCell>
                              <Typography> {row.name} </Typography>
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
              <Typography align="center" variant="h4"> Add Category </Typography> 
            </CardContent>
            <CardContent>
              <TextField 
                fullWidth
                id="outlined-category-input"
                label="Category"
                variant="outlined"
                onChange={(event)=>{setNewCategory(event.target.value)}}
              />
              </CardContent>
              <CardContent>
              <Button fullWidth variant="contained" color="primary" onClick={addCategory}> Insert </Button>
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

export default AddCategory;
