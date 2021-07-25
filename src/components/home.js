import React,{ useState } from 'react'
import {Link, BrowserRouter as Router} from 'react-router-dom';
import image1 from '../components/images/Homefood.jpg';
import image2 from '../components/images/Homefood2.jpg';


function home() {

  return (
    <>
      <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Zuccinis</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li className="list"><Link to='/adminlogin'>Home</Link></li>
        <li className="list"><Link to='/address'>Address</Link></li>
        <li className="list"><Link to='/reg'>Registration</Link></li>
        <li className="list"><Link to='/login'>Login</Link></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
          <li className="list"><Link to='/reg'><span className="glyphicon glyphicon-glass"></span> Book a table</Link></li>
      </ul>
      
    </div>
  </div>
</nav>
        <div className="container-fluid container1">
            <div className="row row1">
              <div className="col-lg-6 col-lg-offset-3 box1">
                <h1 className="welcometext1"><strong>Meet Eat & Enjoy the true taste</strong></h1>
                <h2 className="welcometext2"><strong>Making a reservation at Delicious restaurant is easy and takes just a couple of minutes </strong></h2>
              </div>
            </div>
            <div className="col-lg-4 box2">
                <div className="col-lg-4 text-center">
                    <img src={image2} width="60%" className="img-fluid img1"/>
                </div>
                <div className="col-lg-8 ">
                   <h4 className="review1">Zuccinis restaurent is easy and takes just a couple</h4>
                   <p>
                     <span>
                            <i class="glyphicon glyphicon-star"></i>
                            <i class="glyphicon glyphicon-star"></i>
                            <i class="glyphicon glyphicon-star"></i>
                            <i class="glyphicon glyphicon-star"></i>
                            <i class="glyphicon glyphicon-star"></i>
                     </span>
                     -- Robert
                  </p>
                
                </div>
            </div>
        </div>
                
    </>
  );
}

export default home;
