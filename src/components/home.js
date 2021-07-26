import React,{ useState } from 'react'
import {Link, BrowserRouter as Router} from 'react-router-dom';
import image1 from '../components/images/Homefood.jpg';
import image2 from '../components/images/Homefood2.jpg';
import Robert from '../components/images/robert.jpg';
import Burger from '../components/images/burger.jpg';
import Meal from '../components/images/meal.jpg';
import Coffee from '../components/images/coffee.jpg';
import Table from '../components/images/table.jpg';


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
        <li className="list"><Link to='/'>Home</Link></li>
        <li className="list"><Link to='/products'>Products</Link></li>
        <li className="list"><Link to='/contact'>Contact</Link></li>
        <li className="list"><Link to='/about'>About</Link></li>
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
                    <img src={Robert} width="60%" className="img-fluid img1"/>
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
        <br></br> <br></br>

        <div className="container-fluid container2">
            <div className="row row2">
               <div className="col-lg-12 box3">
                 <h1 className="heading1 text-center">Best Way to Eat Healthy Food</h1>
                 <h3 className="heading2 text-center">Making a reservation at Delicious restaurant is easy and takes just a couple of minutes</h3>
               </div>
            </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="container container3 ">
          <div className="col-lg-4 box4">
            <div className="box41 text-center">
                <img src={Meal} width="40%" className="img-fluid img1"/>
                <h3><strong>Healthy meal</strong></h3>
                <br></br>
               <p className="text1"> 
                  Making a reservation at Delicious restaurant is easy and takes just a couple of minutes
               </p>
            </div>
          </div>
          <div className="col-lg-4 box4">
            <div className="box41 text-center">
                <img src={Burger} width="40%" className="img-fluid img1"/>
                <h3><strong>Fast Food</strong></h3>
                <br></br>
               <p className="text1"> 
                  Making a reservation at Delicious restaurant is easy and takes just a couple of minutes
               </p>
            </div>
          </div>
          <div className="col-lg-4 box4">
            <div className="box41 text-center">
                <img src={Coffee} width="40%" className="img-fluid img1"/>
                <h3><strong>Delicious Coffee</strong></h3>
                <br></br>
               <p className="text1"> 
                  Making a reservation at Delicious restaurant is easy and takes just a couple of minutes
               </p>
            </div>
          </div>
        </div>

        <hr></hr>

        <div className="container-fluid container4">
          <div className="col-lg-5 col-lg-offset-1">
            <div className="box5">
               <img src={Table} width="100%" className="img-fluid tablebookimg"/>
            </div>
          </div>
          <div className="col-lg-4 col-lg-offset-1">
            <div className="box5">
               <h1 className="tablebookhead1">Book a Table</h1><br></br>
               <h4 className="tablebookhead2">Making a reservation at Delicious restaurant is easy and takes just a couple of minutes</h4>
                  <br></br>
                  <form>
                  <div class="form-row">
                      <div class="form-group col-lg-12">
                        <label for="guests">No of Guests</label>
                        <input type="text" class="form-control" id="guests" placeholder="no of guests"/>
                      </div>
                      <div class="form-group col-lg-6">
                        <label for="date">Date</label>
                        <input type="date" class="form-control" id="date" placeholder="Date"/>
                      </div>
                      <div class="form-group col-lg-6">
                         <label for="food">Food Type</label>
                         <select id="inputFood" class="form-control">
                           <option selected>Dinner</option>
                           <option>Break-fast</option>
                           <option>Lunch</option>
                           <option>Dinner</option>
                         </select>
                        
                      </div>
                      <div class="form-group col-lg-12">
                        <label for="contact">Contact</label>
                        <input type="text" class="form-control" id="contact" placeholder="fill your contact details"/>
                      </div>
                      <div class="form-group col-lg-12">
                        <label for="comment">Message:</label>
                        <textarea class="form-control" rows="5" id="comment"></textarea>
                      </div>
                    </div>

                    <button type="button" class="btn btn-primary">Send Request</button>

                  </form>

               
            </div>
          </div>
        </div>
                
    </>
  );
}

export default home;
