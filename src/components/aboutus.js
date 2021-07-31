import React, { useState } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import Starc from "../components/images/starc.jpg";
import Alex from "../components/images/Alex.jpg";
import David from "../components/images/david.jpg";
import Trophy1 from "../components/images/trophy1.jpg";
import Trophy2 from "../components/images/trophy2.jpeg";
import Trophy3 from "../components/images/trophy3.jpg";

function About(){

    return(
    <>
        <nav class="navbar navbar-inverse">
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
              <a className="menu" href="/">Home</a>
              </li>
              <li className="list">
              <a className="menu" href="/product">Products</a>
              </li>
              <li className="list">
                <a className="menu" href="/contact">Contact</a>
              </li>
              <li className="list">
                 <a className="menu" href="/about">About</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 aboutcont1">

                </div>
            </div>

        </div>
         <br/><br/>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 abox1">
                    <div className="abox11">
                        <h1 className="aheading1 text-center">Who We Are</h1>
                        <p className="apara1"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
                <div className="col-lg-6 abox1">
                    <div className="abox11">
                        <h1 className="aheading1 text-center">Our Dream</h1>
                        <p className="apara1"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
            </div>
        </div>
        <br></br><hr></hr>
        
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="aheading1 text-center">Our Achievements</h1>
                    <p className="apara1">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
        </div>
        <br></br>
        <div className="container">
        <div className="col-lg-4 abox2">
        <div className="abox11">
          <div className="text-center">
            <img src={Trophy1} width="50%" className="img-fluid img1" alt=""/>
          </div>
          <div className="text-center ">
            <h4 className="review1">
            2019 Best International Restaurant
            </h4>
          </div>
          </div>
        </div>

        <div className="col-lg-4 abox2">
        <div className="abox11">
          <div className="text-center">
            <img src={Trophy2} width="50%" className="img-fluid img1" alt="" />
          </div>
          <div className="text-center ">
          <h4 className="review1">
            2020 Best International Restaurant
            </h4>
          </div>
          </div>
        </div>
        <div className="col-lg-4 abox2">
        <div className="abox11">
          <div className="text-center">
            <img src={Trophy3} width="50%" className="img-fluid img1" alt=""/>
          </div>
          <div className="text-center ">
          <h4 className="review1">
            2021 Best International Restaurant
            </h4>
          </div>
          </div>
        </div>
        <br></br><br></br>
        <div className="container text-center">
          <a href="/contact">
          <button type="button" class="btn3 btn-primary">
                Contact Us
              </button>
          </a>
        
        </div>
        <br></br>
      </div>


    </>
    );
}

export default About;