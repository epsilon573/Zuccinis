import React,{ useState } from 'react'
import {Link, BrowserRouter as Router} from 'react-router-dom';
import image1 from '../components/images/Homefood.jpg';
import image2 from '../components/images/Homefood2.jpg';


function home() {

  return (
    <>
      <nav className="navbar navbar-default navbar1 navbar-fixed-top">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">WebSiteName</a>
              </div>
                <ul className="navbar-nav nav">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/product'>Product</Link></li>
                    <li><Link to='/product'>About</Link></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                   <li><Link to='/reg'><span className="glyphicon glyphicon-glass"></span> Book a table</Link></li>
                 </ul>
            </div>
        </nav>
        <div className="container-fluid container1">
            <div className="row">
                <div className="col-lg-5 row1box1">
                    <h1>Meet Eat & Enjoy the true taste</h1>

                </div>
                <div className="col-lg-7 row1box2">
                    <img src={image2} alt="image1" width="100%"/>
                </div>
            </div>
        </div>
    </>
  );
}

export default home;
