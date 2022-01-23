import React, { Component, useState } from 'react';
import axios from 'axios';

import { Link,NavLink } from 'react-router-dom';
import Aside from '../../components/Global/Aside';
import Header from '../../components/Global/Header';

export default class HomeInstitucional extends Component {

  state = {
    con: []
    , status: false
  }

  cargarEventos = () => {
    var url = "http://localhost:8080";
    var request = "/gestioninstitucional/contareventos";
    
    axios.get(url + request).then(res => {

      this.setState({
        
        info: res.data
        , status: true
      });
      
    });
  }
  cargarSemilleros = () => {
    var url = "http://localhost:8080";
    var request = "/gestioninstitucional/contarsemilleros";
    
    axios.get(url + request).then(res => {

      this.setState({
        con: res.data
        , status: true
      });
      
    });
  }
  

  componentDidMount = () => {
    this.cargarEventos();
    this.cargarSemilleros();
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

      {this.state.status === true &&
        (
          this.state.info.map((con) => {
           
            return (

  <div className="col-lg-6 col-6">
    {/* small box */}
    <div className="small-box bg-info">
      <div className="inner">
        <h1>{con.eventos_contados}</h1>
        <h3># Eventos</h3>
      </div>
      <div className="icon">
        <i className="ion ion-stats-bars" />
      </div>
    </div>
  </div>
            );
        })
      )}

{this.state.status === true &&
        (
          this.state.con.map((co) => {
           
            return (
  <div className="col-lg-6 col-6">
    {/* small box */}
    <div className="small-box bg-success">
      <div className="inner">
        <h1>{co.semilleros_contados}</h1>
        <h3># Semilleros</h3>
      </div>
      <div className="icon">
        <i className="ion ion-stats-bars" />
      </div>
    </div>
  </div>


            );
        })
      )}
</div>



      <div class="card">
        <div class="card-body row">
          <div class="col-6 text-center align-items-center justify-content-center">
            <div class="">
            <img className="card-img-top" src="https://i.ibb.co/pvf2JFY/banner-facultad-ingenieria.png" />
             
            
            </div>
          </div>
          <div class="col-6 text-center d-flex align-items-center justify-content-center">
           
           <h2>

Los ingenieros de Sistemas, bonaventurianos, son profesionales emprendedores, éticos, con pensamiento crítico, espíritu creativo e investigativo y un alto compromiso social, capaces de diseñar, construir, implementar y administrar de forma segura y confiable, soluciones informáticas a través del uso de las TIC.<strong></strong></h2>
          </div>
        </div>
      </div>


<div className="card card-success">
  <div className="card-body">
    <div className="row">
      <div className="col-md-12 col-lg-6 col-xl-4">
        <div className="card mb-2 bg-gradient-dark">
          <img className="card-img-top" src="https://i.ibb.co/zVyJ13S/usbbogota1.jpg" alt="Dist Photo 1" />
          <div className="card-img-overlay d-flex flex-column justify-content-end">

          </div>
        </div>
      </div>
      <div className="col-md-12 col-lg-6 col-xl-4">
        <div className="card mb-2">
          <img className="card-img-top" src="https://i.ibb.co/pzynQ3t/5e2f0d839dc40.jpg" alt="Dist Photo 2" />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
          </div>
        </div>
      </div>
      <div className="col-md-12 col-lg-6 col-xl-4">
        <div className="card mb-2">
          <img className="card-img-top" src="https://i.ibb.co/vhpXwjW/usb-bogota-38.jpg" alt="Dist Photo 2" />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
          </div>
        </div>
      </div>

    </div>
  </div>
</div>

<div className="card card-success">
  <div className="card-body">
    <div className="row">
      <div className="col-md-12 col-lg-6 col-xl-4">
        <div className="card mb-2 bg-gradient-dark">
          <img className="card-img-top" src="https://i.ibb.co/W3v7RNm/usb-bogota-26.jpg" alt="Dist Photo 1" />
          <div className="card-img-overlay d-flex flex-column justify-content-end">

          </div>
        </div>
      </div>
      <div className="col-md-12 col-lg-6 col-xl-4">
        <div className="card mb-2">
          <img className="card-img-top" src="https://i.ibb.co/vhpXwjW/usb-bogota-38.jpg" alt="Dist Photo 2" />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
          </div>
        </div>
      </div>
      <div className="col-md-12 col-lg-6 col-xl-4">
        <div className="card mb-2">
          <img className="card-img-top" src="https://i.ibb.co/DkRjzX3/usb-bogota-01.jpg" alt="Dist Photo 2" />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
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