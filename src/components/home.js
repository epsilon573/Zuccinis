import React, { useState } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import Robert from "../components/images/robert.jpg";
import Burger from "../components/images/burger.jpg";
import Meal from "../components/images/meal.jpg";
import Coffee from "../components/images/coffee.jpg";
import Table from "../components/images/table.jpg";
import Starc from "../components/images/starc.jpg";
import Alex from "../components/images/Alex.jpg";
import David from "../components/images/david.jpg";
import Res1 from "../components/images/restaurant1.jpg";
import Res2 from "../components/images/restaurant2.jpg";
import Res3 from "../components/images/restaurant3.jpg";
import Res4 from "../components/images/restaurant4.jpg";
import Axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css";


function home() {

  function sendmail() {
    var email = document.getElementById("email").value;
    var guest = document.getElementById("guest").value;
    var date = document.getElementById("date").value;
    var contact = document.getElementById("contact").value;
    var inputfood = document.getElementById("inputFood").value;
    var comment = document.getElementById("comment").value;
    if (email == "") {
      alert("Please fill your email");
    } else {
      Axios.post("http://localhost:5000/sendMail1", { email: email , guest: guest , date: date, contact: contact , inputfood:inputfood , comment:comment}).then(
        function (succ) {
          console.log(succ.data);
          if (succ.data == "noemail") {
            alert("Sry this email is not registered");
          } else if (succ.data == "error") {
            alert("Something went wrong, please try again later");
          } else {
            alert("Mail has been send, please check");
          }
        }
      );
    }
  }

  return (
    <>
      <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container-fluid">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">
              Zuccinis
            </a>
            
          </div>
          <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav">
              <li className="list">
              <a className="menu" href="/">Home</a>
              </li>
              <li className="list">
              <a className="menu" href="/contact">Products</a>
              </li>
              <li className="list">
                <a className="menu" href="/contact">Contact</a>
              </li>
              <li className="list">
                 <a className="menu" href="/about">About</a>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="list">
              <a className="menu" href="#booktable">
                  <span className="glyphicon glyphicon-glass"></span> Book a
                  table
                  </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-fluid container1">
        <div className="row row1">
          <div className="col-lg-6 col-lg-offset-3 box1">
            <h1 className="welcometext1">
              Meet Eat & Enjoy the true taste
            </h1>
            <h2 className="welcometext2">
                Making a reservation at Delicious restaurant is easy and takes
                just a couple of minutes
            </h2>
          </div>
        </div>
        <div className="col-lg-4 col-lg-offset-8 box2">
          <div className="col-lg-4 text-center">
            <img src={Robert} alt="" width="60%" className="img-fluid img1" />
          </div>
          <div className="col-lg-8 ">
            <h4 className="review1">
              Zuccinis restaurent is easy and takes just a couple
            </h4>
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
            <h1 className="heading1 text-center text4">
              Best Way to Eat Healthy Food
            </h1>
            <h3 className="heading2 text-center text5">
              Making a reservation at Delicious restaurant is easy and takes
              just a couple of minutes
            </h3>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="container container3 ">
        <div className="col-lg-4 box4">
          <div className="box41 text-center">
            <img src={Meal} width="40%" className="img-fluid img1" alt=""/>
            <h3>
              <strong>Healthy meal</strong>
            </h3>
            <br></br>
            <p className="text1">
              Making a reservation at Delicious restaurant is easy and takes
              just a couple of minutes
            </p>
          </div>
        </div>
        <div className="col-lg-4 box4">
          <div className="box41 text-center">
            <img src={Burger} width="40%" className="img-fluid img1" alt="" />
            <h3>
              <strong>Fast Food</strong>
            </h3>
            <br></br>
            <p className="text1">
              Making a reservation at Delicious restaurant is easy and takes
              just a couple of minutes
            </p>
          </div>
        </div>
        <div className="col-lg-4 box4">
          <div className="box41 text-center">
            <img src={Coffee} width="40%" className="img-fluid img1" alt="" />
            <h3>
              <strong>Delicious Coffee</strong>
            </h3>
            <br></br>
            <p className="text1">
              Making a reservation at Delicious restaurant is easy and takes
              just a couple of minutes
            </p>
          </div>
        </div>
      </div>
      <br></br>
      <hr></hr>
      <div className="container-fluid container4">
        <div className="col-lg-5 col-lg-offset-1">
          <div className="box5">
            <img src={Table} width="100%" className="img-fluid tablebookimg" alt="" />
          </div>
        </div>
        <div className="col-lg-4 col-lg-offset-1" id="booktable">
          <div className="box5">
            <h1 className="tablebookhead1">Book a Table</h1>
            <br></br>
            <h4 className="tablebookhead2">
              Making a reservation at Delicious restaurant is easy and takes
              just a couple of minutes
            </h4>
            <br></br>
            
              <div class="form-row">
                <div class="form-group col-lg-12">
                  <label className="guests" for="guests">No of Guests</label>
                  <input
                    type="text"
                    class="form-control form1"
                    id="guest"
                    placeholder="no of guests"
                  />
                </div>
                <div class="form-group col-lg-6">
                  <label className="guests" for="date">Date</label>
                  <input
                    type="date"
                    class="form-control form1"
                    id="date"
                    placeholder="Date"
                  />
                </div>
                <div class="form-group col-lg-6">
                  <label className="guests" for="food">Food Type</label>
                  <select id="inputFood" class="form-control form1">
                    <option selected>Dinner</option>
                    <option>Break-fast</option>
                    <option>Lunch</option>
                    <option>Dinner</option>
                  </select>
                </div>
                <div class="form-group col-lg-12">
                  <label className="guests" for="contact">Contact</label>
                  <input
                    type="text"
                    class="form-control form1"
                    id="contact"
                    placeholder="fill your contact details"
                  />
                </div>
                <div class="form-group col-lg-12">
                  <label className="guests" for="email">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control form1"
                    id="email"
                    placeholder="Enter Your Email"
                  />
                </div>
                <div class="form-group col-lg-12">
                  <label className="guests" for="comment">Message:</label>
                  <textarea
                    class="form-control form1"
                    rows="5"
                    id="comment"
                  ></textarea>
                </div>
              </div>

              <button type="button" class="btn btn5 btn-primary" onClick={sendmail}>
                Send Request
              </button>
            
          </div>
        </div>
      </div>
      <br></br>
      <hr></hr>
      <div className="container-fluid container5">
        <div className="row">
          <div className="col-lg-12 box3">
            <h1 className="heading3 text-center">What Our Customer Says</h1>
            <h3 className="heading4 text-center">
              Making a reservation at Delicious restaurant is easy and takes
              just a couple of minutes
            </h3>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="container">
        <div className="col-lg-4 box6">
          <div className="box61 text-center">
            <img src={Starc} width="50%" className="img-fluid img1" alt=""/>
          </div>
          <div className="box61 text-center ">
            <h4 className="review1">
              Zuccinis restaurant is easy and takes just a couple
            </h4>
            <p>
              <span>
                <i class="glyphicon glyphicon-star"></i>
                <i class="glyphicon glyphicon-star"></i>
                <i class="glyphicon glyphicon-star"></i>
                <i class="glyphicon glyphicon-star"></i>
                <i class="glyphicon glyphicon-star"></i>
              </span>
              -- Starc
            </p>
          </div>
        </div>

        <div className="col-lg-4 box6">
          <div className="box61 text-center">
            <img src={Alex} width="50%" className="img-fluid img1" alt="" />
          </div>
          <div className="box61 text-center ">
            <h4 className="review1">
              Zuccinis restaurant is easy and takes just a couple
            </h4>
            <p>
              <span>
                <i class="glyphicon glyphicon-star"></i>
                <i class="glyphicon glyphicon-star"></i>
                <i class="glyphicon glyphicon-star"></i>
                <i class="glyphicon glyphicon-star"></i>
                <i class="glyphicon glyphicon-star"></i>
              </span>
              -- Alex
            </p>
          </div>
        </div>
        <div className="col-lg-4 box6">
          <div className="box61 text-center">
            <img src={David} width="50%" className="img-fluid img1" alt=""/>
          </div>
          <div className="box61 text-center ">
            <h4 className="review1">
              Zuccinis restaurant is easy and takes just a couple
            </h4>
            <p>
              <span>
                <i class="glyphicon glyphicon-star"></i>
                <i class="glyphicon glyphicon-star"></i>
                <i class="glyphicon glyphicon-star"></i>
                <i class="glyphicon glyphicon-star"></i>
                <i class="glyphicon glyphicon-star"></i>
              </span>
              -- David
            </p>
          </div>
        </div>
      </div>
      <br></br>
      <hr></hr>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-lg-12 row3">
            <img src={Res1} width="25%" className="img-fluid" alt=""/>
            <img src={Res2} width="25%" className="img-fluid" alt="" />
            <img src={Res3} width="25%" className="img-fluid" alt="" />
            <img src={Res4} width="25%" className="img-fluid" alt="" />
            <div className>
              {" "}
              <button type="button" class="btn btn2 btn-primary">
                Insta-Handle - @Zuccinis
              </button>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <hr></hr>
      <div className="container-fluid container6" id="contactus">
        <div className="row">
          <div className="col-lg-4 col-lg-offset-1">
            <div>
              <h1 className="heading5">Zuccinis</h1>
              <br></br>
              <p className="para1 text-left">
                Zuccinis restaurent is easy and takes just a couple Zuccinis
                restaurent is easy and takes just a coupleZuccinis restaurent is
                easy and takes just a couple
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div>
              <h2 className="heading5">Quick Links</h2>
              <ul>
                <li>
                  <a className="list1" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a className="list1" href="/about">
                    About
                  </a>
                </li>
                <li>
                  <a className="list1" href="/products">
                    Products
                  </a>
                </li>
                <li>
                  <a className="list1" href="/contact">
                    Contact
                  </a>
                </li>
                <li>
                  <a className="list1" href="/">
                    Book A Table
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <diV>
              <h1 className="heading5">Contact Us</h1>
              <h3 className="Address">76/A, Green Lane, Dhanmondi, NYC</h3>
              <p className="contact">+10 (78) 738-9083 </p>
              <p className="email"> restaurco89@gmail.com</p>
            </diV>
          </div>
          <div className="col-lg-12">
            <br></br>
            <hr></hr>
            <h4 className="footer">Copyright @2021 All rights reserved to Zuccinis</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default home;
