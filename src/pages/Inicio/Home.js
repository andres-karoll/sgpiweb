import React from 'react'
import Navar from '../../components/Navar'

import Footer from '../../components/Footer'
const Home = () => (
  <div>
    
    {/*==========================
  Header
  ============================*/}
    <header id="header">
    <Navar/>
      
    </header>

    {/* #header */}
    {/*==========================
    Intro Section
  ============================*/}
    <section id="intro" className="clearfix">
  <div className="container d-flex h-100">
    <div className="row justify-content-center align-self-center">
      <div className="col-md-6 intro-info order-md-first order-last">
        <h2>Sistema de Gestion de proyectos<br /></h2>
      </div>
      <div className="col-md-6 intro-img order-md-last order-first">
      <div className="container d-flex h-100">
        <div className="row justify-content-center align-self-center">
          <div className="container ">
            <div
              id="myCarousel"
              className="carousel slide"
              data-ride="carousel"
            >
              
              {/* Wrapper for slides */}
              <div className="carousel-inner">
                <div className="item active">
                  <img
                    src="https://i.ibb.co/WvYtWzn/766e6bc96d79ef50337cb2893e74222e.jpg"
                    alt="Los Angeles"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="item">
                  <img
                    src="https://i.ibb.co/sCmfMgV/5e2f0d839dc40.jpg"
                    alt="Chicago"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="item">
                  <img
                    src="https://i.ibb.co/DkRjzX3/usb-bogota-01.jpg"
                    alt="New york"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              {/* Left and right controls */}
              <a
                className="left carousel-control"
                href="#myCarousel"
                data-slide="prev"
              >
                <span className="glyphicon glyphicon-chevron-left" />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="right carousel-control"
                href="#myCarousel"
                data-slide="next"
              >
                <span className="glyphicon glyphicon-chevron-right" />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</section>

    <Footer/>
  </div>
  

);

export default Home