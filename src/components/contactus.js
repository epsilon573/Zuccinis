import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import FB from "../components/images/fb.svg";

function ContactUs() {
  return (
    <>
      <nav class="navbar navbar-inverse navbar-fixed">
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
            <a class="navbar-brand" href="/">
              Zuccinis
            </a>
          </div>
          <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav">
              <li className="list">
                <a className="menu" href="/">
                  Home
                </a>
              </li>
              <li className="list">
                <a className="menu" href="/product">
                  Products
                </a>
              </li>
              <li className="list">
                <a className="menu" href="/contact">
                  Contact
                </a>
              </li>
              <li className="list">
                <a className="menu" href="/about">
                  About
                </a>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="list">
                <Link className="menu" to="/reg">
                  <span className="glyphicon glyphicon-glass"></span> Book a
                  table
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h1 className="heading3">Contact Us</h1>
            <h3 className="heading4">
              Making a reservation at Delicious restaurant is easy and takes
              just a couple of minutes
            </h3>
          </div>
        </div>
      </div>
      <br></br>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-lg-offset-1">
            <h2 className="heading3">Get in Touch</h2>
            <form>
              <div class="form-row">
                <div class="form-group col-lg-12">
                  <label className="guests" for="guests">
                    Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="guests"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div class="form-group col-lg-12">
                  <label className="guests" for="contact">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="contact"
                    placeholder="Enter Your Email"
                  />
                </div>
                <div class="form-group col-lg-12">
                  <label className="guests" for="comment">
                    Message:
                  </label>
                  <textarea
                    class="form-control"
                    rows="5"
                    id="comment"
                    placeholder="Enter Your Message"
                  ></textarea>
                </div>
              </div>
              <div class="form-group col-lg-12">
                <label className="guests" for="guests">
                  Subject
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="guests"
                  placeholder="Enter Subject"
                />
              </div>
              <br></br>

              <button type="button" class="btn btn-primary">
                Send
              </button>
            </form>
          </div>
          <div className="col-lg-3 col-lg-offset-1 ">
            <h2 className="heading3">Details:</h2>
            <br></br>
            <h3 className="cheading1">Buttonwood, California.</h3>
            <p className="cpara1">Rosemead, CA 91770</p>
            <br></br>
            <h3 className="cheading1">+1 253 565 2365</h3>
            <p className="cpara1">Mon to Fri 9am to 6pm</p>
            <br></br>
            <h3 className="cheading1">support@zuccinis.com</h3>
            <p className="cpara1">Send us your query anytime!</p>
          </div>
        </div>
        <br></br><hr></hr>
      </div>
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
            <h4 className="footer">
              Copyright @2021 All rights reserved to Zuccinis
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
