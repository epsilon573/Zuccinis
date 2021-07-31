import React, {useState, useEffect} from 'react'
import {Grid,Card,CardContent,TextField,Button,Typography, MenuItem } from '@material-ui/core'
import {Link, useHistory} from 'react-router-dom';
import {createTheme, ThemeProvider, responsiveFontSizes} from '@material-ui/core/styles'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import Axios from 'axios';

function AddProduct() {
  
    let theme = createTheme();
    theme = responsiveFontSizes(theme);

    const history = useHistory();
    const [products, setProducts] = useState([]);
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [type, setType] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');

    const [categoryList, setCategoryList] = useState([]);
    
    const getCategory = () => {
      Axios.get('http://localhost:5000/getCategory').then((res)=>{
          console.log(res.data);
          setCategoryList(res.data);
      });
    };

  const getProducts = () => {
    Axios.get('http://localhost:5000/getProducts').then((res)=>{
        console.log(res.data);
        setProducts(res.data);
    });
  };

  const addProduct = () => {
    console.log('Adding Product');
    var MyObj = {
      prodName: name,
      prodCategory: category,
      prodType: type,
      prodPrice: parseInt(price),
      prodDescription: description
    };
    console.log(MyObj);
    Axios.post('http://localhost:5000/addProduct',MyObj).then((res)=>{
      history.push('/addproduct');
    });
  }

  useEffect(()=>{
    getProducts();
    getCategory();
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
                              <Typography variant="h6"> Category </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography variant="h6"> Type </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography variant="h6"> Price (Rs.) </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography variant="h6"> Description </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                      {
                        products.map((row)=>(
                          <TableRow key={row._id}>
                            <TableCell>
                              <Typography> {row.name} </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography> {row.category} </Typography>
                            </TableCell> 
                            <TableCell>
                              <Typography> {row.type} </Typography>
                            </TableCell> 
                            <TableCell>
                              <Typography> {row.price} </Typography>
                            </TableCell> 
                            <TableCell>
                              <Typography> {row.description} </Typography>
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
              <Typography align="center" variant="h4"> Add Product </Typography> 
            </CardContent>
            <CardContent>
            <TextField 
                fullWidth
                id="outlined-name-input"
                label="Name"
                variant="outlined"
                onChange={(event)=>{setName(event.target.value)}}
              />
            </CardContent>
            <CardContent>
            <TextField 
                fullWidth
                select
                id="select-category-input"
                label="Category"
                onChange={(event)=>{setCategory(event.target.value)}}
                value={category}
              >
              {
                categoryList.map((item)=>(
                  <MenuItem key={item._id} value={item.name}>
                    {item.name}
                  </MenuItem>
                ))
              }
              </TextField>
            </CardContent>
            <CardContent>
            <TextField 
                fullWidth
                select
                id="select-type-input"
                label="Type"
                onChange={(event)=>{setType(event.target.value)}}
                value={type}
              >
              <MenuItem key="veg" value="Veg"> Veg </MenuItem>
              <MenuItem key="nonveg" value="Non-Veg"> Non-Veg </MenuItem>
              </TextField>
            </CardContent>
            <CardContent>
            <TextField 
                fullWidth
                id="outlined-price-input"
                label="Price"
                type="number"
                variant="outlined"
                onChange={(event)=>{setPrice(event.target.value)}}
              />
              </CardContent>
              <CardContent>
            <TextField 
                fullWidth
                multiline
                id="outlined-description-input"
                label="Description"
                variant="outlined"
                maxRows={4}
                onChange={(event)=>{setDescription(event.target.value)}}
              />
              </CardContent>
              <CardContent>
              <Button fullWidth variant="contained" color="primary" onClick={addProduct}> Insert </Button>
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

export default AddProduct;
