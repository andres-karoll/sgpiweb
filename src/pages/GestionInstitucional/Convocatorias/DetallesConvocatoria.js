import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
export default class DetallesConvocatoria extends Component {

  state = {
    convocatoria: {}
    , status: false
  }
//funcion para obtener la informacion de una convocatoria
  mostrarConvocatoria = () => {
    var request = "/gestioninstitucional/convocatoriaporid/" + this.props.id;
    var url = "http://localhost:8080" + request;
    axios.get(url).then(res => {
      this.setState({
        convocatoria: res.data
        , status: true
      });
    });
  }

  componentDidMount = () => {
    this.mostrarConvocatoria();
  }

  render() {
    return (
      <div>
        <Aside />
        <Header />
        {this.state.status === true &&
          (
            <React.Fragment>

              <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <div>
                  <section className="content">
                    <br />
                    <div class="alert alert-info alert-dismissible">
                      <h1><i class="fab fa-safari  nav-icon"></i>Detalles de la convocatoria</h1>
                    </div>
                  </section>
                </div>

                {/* Main content */}
                <section className="content">
                  {/* Default box */}
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Nombre de convocatoria : {this.state.convocatoria.nombre_convocatoria}</h3>
                      <div className="card-tools">
                        <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                          <i className="fas fa-minus" />
                        </button>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-12 col-md-12 col-lg-8 order-2 order-md-1">
                          <div className="row">
                            <div className="col-12 col-sm-6">

                              <div className="info-box bg-secondary">

                                <span class="info-box-icon"><i class="fas fa-calendar-alt nav-icon"></i></span>

                                <div className="info-box-content">
                                  <span className="info-box-text text-center ">Fecha inicio</span>
                                  <span className="info-box-number text-center mb-0">{this.state.convocatoria.fecha_inicio}</span>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-sm-6">
                              <div className="info-box bg-secondary">
                                <span class="info-box-icon"><i class="fas fa-calendar-alt nav-icon"></i></span>

                                <div className="info-box-content">
                                  <span className="info-box-text text-center ">Fecha final</span>
                                  <span className="info-box-number text-center mb-0">{this.state.convocatoria.fecha_final}</span>
                                </div>
                              </div>
                            </div>


                          </div>
                          <div className="row">
                            <div className="col-12">

                              <div className="post">

                                <div >
                                  <span className="username">
                                    <h1 >
                                      Contexto
                                    </h1>
                                  </span>

                                </div>
                                {/* /.user-block */}
                                <h3>
                                {this.state.convocatoria.contexto}
                                </h3>
                                <p>

                                </p>
                              </div>
                              <div className="post clearfix">
                                <div >

                                  <span className="username">
                                    <h1>Numero de productos</h1>
                                  </span>

                                </div>
                                {/* /.user-block */}
                                <h3>
                                {this.state.convocatoria.numero_productos}
                                </h3>
                                <p>

                                </p>
                              </div>


                            </div>


                          </div>


                        </div>





                        <div class="col-md-4">

                          <div class="info-box mb-3 bg-info">
                            <span class="info-box-icon"><i class="fas fa-tasks"></i></span>

                            <div class="info-box-content">
                              <h3 class="info-box-text">Tipo</h3>
                              <h3 class="info-box-number">{this.state.convocatoria.tipo}</h3>
                            </div>

                          </div>

                          <div class="info-box mb-3 bg-info">
                            <span class="info-box-icon"><i class="fas fa-globe-americas"></i></span>

                            <div class="info-box-content">
                              <h3 class="info-box-text">Entidad</h3>
                              <h3 class="info-box-number">{this.state.convocatoria.entidad}</h3>
                            </div>

                          </div>

                          <div class="info-box mb-3 bg-info">
                            <span class="info-box-icon"><i class="fas fa-book"></i></span>

                            <div class="info-box-content">
                              <h3 class="info-box-text">Estado</h3>
                              <h3 class="info-box-number">{this.state.convocatoria.estado}</h3>
                            </div>

                          </div>







                        </div>




                      </div>
                    </div>
                    {/* /.card-body */}
                  </div>
                  {/* /.card */}
                </section>
                {/* /.content */}
              </div>
            </React.Fragment>
          )}
      </div>
    )
  }
}
