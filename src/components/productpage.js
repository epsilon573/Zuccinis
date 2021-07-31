import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Header from './Header'
import Section from './Section'
import {DataProvider} from './Context'


function Productpage(){
    return(
      <DataProvider>
        <div className="app">
          <Router>
            <Header />
            <Section />
          </Router>
        </div>
      </DataProvider>
    );
  }

export default Productpage;