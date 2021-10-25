import React, { Component, useState } from 'react';
import axios from 'axios';

import { Link,NavLink } from 'react-router-dom';
import Aside from '../../components/Global/Aside';
import Header from '../../components/Global/Header';

export default class HomeInstitucional extends Component {

  state = {
    convocatorias: []
    , status: false
  }

  cargarConvocatorias = () => {
    var url = "http://localhost:8080";
    var request = "/gestioninstitucional/listarconvocatoria";
    
    axios.get(url + request).then(res => {
      
      this.setState({
        
        info: res.data
        , status: true
      });
      
    });
  }
  

  componentDidMount = () => {
    this.cargarConvocatorias();
  }

  render() {
    return (

    <div>
      <Aside/>
      <Header/>
      <div className="content-wrapper">
      <div>
            <section className="content">
                <br />
                <div class="alert alert-info alert-dismissible">
                  <h1><i class="fas fa-home  nav-icon"></i>Home Gestion Institucional</h1>
                  </div>
                  </section>
      </div>

      <div className="row">
  <div className="col-lg-3 col-6">
    {/* small box */}
    <div className="small-box bg-info">
      <div className="inner">
        <h1>150</h1>
        <h3>New Orders</h3>
      </div>
      <div className="icon">
        <i className="ion ion-bag" />
      </div>
      <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
    </div>
  </div>
  {/* ./col */}
  <div className="col-lg-3 col-6">
    {/* small box */}
    <div className="small-box bg-success">
      <div className="inner">
        <h1>53</h1>
        <h3>Bounce Rate</h3>
      </div>
      <div className="icon">
        <i className="ion ion-stats-bars" />
      </div>
      <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
    </div>
  </div>
  {/* ./col */}
  <div className="col-lg-3 col-6">
    {/* small box */}
    <div className="small-box bg-warning">
      <div className="inner">
        <h1>44</h1>
        <h3>User Registrations</h3>
      </div>
      <div className="icon">
        <i className="ion ion-person-add" />
      </div>
      <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
    </div>
  </div>
  {/* ./col */}
  <div className="col-lg-3 col-6">
    {/* small box */}
    <div className="small-box bg-danger">
      <div className="inner">
        <h1>65</h1>
        <h3>Unique Visitors</h3>
      </div>
      <div className="icon">
        <i className="ion ion-pie-graph" />
      </div>
      <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
    </div>
  </div>
  {/* ./col */}
</div>

      {this.state.status === true &&
        (
          this.state.info.map((con) => {
           
            return (
<div className="row">
  <div className="col-lg-3 col-6">
    {/* small box */}
    <div className="small-box bg-info">
      <div className="inner">
        <h3>150</h3>
        <p>New Orders</p>
      </div>
      <div className="icon">
        <i className="ion ion-bag" />
      </div>
      <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
    </div>
  </div>
  {/* ./col */}
  <div className="col-lg-3 col-6">
    {/* small box */}
    <div className="small-box bg-success">
      <div className="inner">
        <h3>53<sup style={{fontSize: 20}}>%</sup></h3>
        <p>Bounce Rate</p>
      </div>
      <div className="icon">
        <i className="ion ion-stats-bars" />
      </div>
      <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
    </div>
  </div>
  {/* ./col */}
  <div className="col-lg-3 col-6">
    {/* small box */}
    <div className="small-box bg-warning">
      <div className="inner">
        <h3>44</h3>
        <p>User Registrations</p>
      </div>
      <div className="icon">
        <i className="ion ion-person-add" />
      </div>
      <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
    </div>
  </div>
  {/* ./col */}
  <div className="col-lg-3 col-6">
    {/* small box */}
    <div className="small-box bg-danger">
      <div className="inner">
        <h3>65</h3>
        <p>Unique Visitors</p>
      </div>
      <div className="icon">
        <i className="ion ion-pie-graph" />
      </div>
      <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
    </div>
  </div>
  {/* ./col */}
</div>

            );
        })
      )}

<div className="card card-success">
  <div className="card-body">
    <div className="row">
      <div className="col-md-12 col-lg-6 col-xl-4">
        <div className="card mb-2 bg-gradient-dark">
          <img className="card-img-top" src="https://i.ibb.co/zVyJ13S/usbbogota1.jpg" alt="Dist Photo 1" />
          <div className="card-img-overlay d-flex flex-column justify-content-end">
            <h5 className="card-title text-primary text-white">Card Title</h5>
            <p className="card-text text-white pb-2 pt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor.</p>
            <a href="#" className="text-white">Last update 2 mins ago</a>
          </div>
        </div>
      </div>
      <div className="col-md-12 col-lg-6 col-xl-4">
        <div className="card mb-2">
          <img className="card-img-top" src="https://i.ibb.co/pzynQ3t/5e2f0d839dc40.jpg" alt="Dist Photo 2" />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <h5 className="card-title text-white mt-5 pt-2">Card Title</h5>
            <p className="card-text pb-2 pt-1 text-white">
              Lorem ipsum dolor sit amet, <br />
              consectetur adipisicing elit <br />
              sed do eiusmod tempor.
            </p>
            <a href="#" className="text-white">Last update 15 hours ago</a>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>




</div>
</div>
)
}
}