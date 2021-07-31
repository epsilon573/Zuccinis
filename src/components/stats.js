import React,{ useEffect, useState } from 'react'
import {Grid,Button} from '@material-ui/core'
import {createTheme, ThemeProvider, responsiveFontSizes} from '@material-ui/core/styles'
import Axios from 'axios'
import {Pie} from 'react-chartjs-2';
import {Link} from 'react-router-dom';

function Stats() {

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  const [category,setCategory] = useState([]);
  var dict = {};

  var category_data = {
      labels: category,
      datasets: [
          {
            backgroundColor: [
                'rgba(0, 116, 217, 0.2)',
                'rgba(255, 65, 54, 0.2)',
                'rgba(46, 204, 64, 0.2)',
                'rgba(255, 133, 27, 0.2)',
                'rgba(127, 219, 255, 0.2)',
                'rgba(177, 13, 201, 0.2)',
                'rgba(255, 220, 0, 0.2)',
                'rgba(0, 31, 63, 0.2)',
                'rgba(57, 204, 204, 0.2)',
                'rgba(1, 255, 112, 0.2)',
                'rgba(133, 20, 75, 0.2)',
                'rgba(240, 18, 190, 0.2)',
                'rgba(61, 153, 112, 0.2)',
                'rgba(17, 17, 17, 0.2)',
                'rgba(170, 170, 170, 0.2)'
              ],
            borderColor: [
                'rgba(0, 116, 217, 1)',
                'rgba(255, 65, 54, 1)',
                'rgba(46, 204, 64, 1)',
                'rgba(255, 133, 27, 1)',
                'rgba(127, 219, 255, 1)',
                'rgba(177, 13, 201, 1)',
                'rgba(255, 220, 0, 1)',
                'rgba(0, 31, 63, 1)',
                'rgba(57, 204, 204, 1)',
                'rgba(1, 255, 112, 1)',
                'rgba(133, 20, 75, 1)',
                'rgba(240, 18, 190, 1)',
                'rgba(61, 153, 112, 1)',
                'rgba(17, 17, 17, 1)',
                'rgba(170, 170, 170, 1)'
              ],
              borderWidth: 1,
            label: 'Number of Orders per Category',
            data: [1,2,3,4,5,6,7,6,5,4,3,2]
          }
      ]
  }

  var type_data = {
    labels: ['Veg','Non-Veg'],
    datasets: [
        {
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(75, 192, 192, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
              ],
          label: 'Number of Orders per Type',
          borderWidth: 1,
          data: [15,23]
        }
    ]
  }

  const getCategory = () => {
    Axios.get('http://localhost:5000/getCategory').then((res)=>{
        var category_names = res.data.map((item)=>item.name)
        setCategory(category_names);
        category.forEach((item)=>{
            dict[item] = 0;
        });
    });
  };

  useEffect(()=>{
    getCategory();
  },[]);

  return (
    <>
      <div>
      <ThemeProvider theme={theme}>
        <Grid container justify="center" alignItems="center" style={{padding:'2%'}}>
            <Link to='/adminpanel'>
            <Button variant="contained" color="primary"> Admin Panel </Button>
            </Link>
        </Grid>
        <Grid container> 
          <Grid container xs={12} sm={6} justify="center" alignItems="center" style={{padding:'10%', minHeight: "100vh"}}>
                <Pie data={category_data}
                    options={{
                        responsive: true,
                        maintainAspectRatio: true,
                }}/>
          </Grid>
          <Grid container xs={12} sm={6} justify="center" alignItems="center" style={{padding: '10%'}}>
            <Pie data={type_data}         
                options={{
                    responsive: true,
                    maintainAspectRatio: true,
            }}/>
          </Grid>
        </Grid>
        </ThemeProvider>
      </div>
    </>
  );
}

export default Stats;
