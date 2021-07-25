import React from 'react'
import {Grid,Card,CardContent,Button,Typography} from '@material-ui/core'
import Particles from 'react-particles-js'
import particleConfig from '../config/particle-config'
import {Link} from 'react-router-dom';
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

function AdminPanel() {
  
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
                <Typography align="center" variant="h4"> Admin Panel </Typography> 
              </CardContent>
              <CardContent>
              <Link to='/addcategory'>
                <Button fullWidth variant="contained" color="primary"> Add Category </Button> 
              </Link>
              </CardContent>
              <CardContent>
              <Link to='/addproduct'>
              <Button fullWidth variant="contained" color="primary"> Add Product </Button>
              </Link>
              </CardContent>
              <CardContent>
              <Button fullWidth variant="contained" color="primary"> Show Users </Button>
              </CardContent>
              <CardContent>
              <Button fullWidth variant="contained" color="primary"> Show Orders </Button>
              </CardContent>
              <CardContent>
              <Button fullWidth variant="contained" color="primary"> Show Stats </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        </ThemeProvider>
      </div>
    </>
  );
}

export default AdminPanel;
