import React, { Component } from 'react';
import axios from 'axios';
import { NavLink, Link } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
export default class DetallesProyecto extends Component {

  state = {
    proyecto: {}
    , status: false
  }
  /**
   * datos de in proyecti 
   */
  mostrarProyecto = () => {
    var request = "/gestionproyectosaulaintegrador/listarporid/" + this.props.id;
    var url = "http://localhost:8080" + request;
    axios.get(url).then(res => {
      this.setState({
        proyecto: res.data
        , status: true
      });
    });
  }
  /**
   * metodo de inicio
   */
  componentDidMount = () => {
    this.mostrarProyecto();
  }

  render() {
    var rol = localStorage.getItem("tipo");
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
                      <h1><i class="fab fa-safari  nav-icon"></i>Informacion del Proyecto</h1>
                    </div>
                  </section>
                </div>

                {/* Main content */}
                <section className="content">
                  {/* Default box */}
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Titulo : {this.state.proyecto.titulo}</h3>
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
                                  <span className="info-box-number text-center mb-0">{this.state.proyecto.fecha_inicio}</span>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-sm-6">
                              <div className="info-box bg-secondary">
                                <span class="info-box-icon"><i class="fas fa-calendar-alt nav-icon"></i></span>

                                <div className="info-box-content">
                                  <span className="info-box-text text-center ">Fecha fin</span>
                                  <span className="info-box-number text-center mb-0">{this.state.proyecto.fecha_fin}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">

                              <div className="post">

                                <div >
                                  <span className="username">
                                    <h1 >Descripcion</h1>
                                  </span>

                                </div>
                                {/* /.user-block */}
                                <h3>
                                  {this.state.proyecto.descripcion}
                                </h3>
                                <p>

                                </p>
                              </div>
                              <div className="post clearfix">
                                <div >

                                  <span className="username">
                                    <h1>justificacion</h1>
                                  </span>

                                </div>
                                {/* /.user-block */}
                                <h3>
                                  {this.state.proyecto.justificacion}
                                </h3>
                                <p>

                                </p>
                              </div>
                              <div className="post clearfix">
                                <div >

                                  <span className="username">
                                    <h1>Retroalimentacion final</h1>
                                  </span>

                                </div>
                                {/* /.user-block */}
                                <h3>
                                  {
                                    this.state.proyecto.retroalimentacion_final === null ? (
                                      <h3>Este proyecto aun no a finalizado</h3>
                                    ) : (
                                      this.state.proyecto.retroalimentacion_final
                                    )
                                  }                                   
                                </h3>
                                <p>
                                </p>
                              </div>
                              <div className="post clearfix">
                                <div>
                                  <span className="username">
                                    <h1>Conclusiones</h1>
                                  </span>

                                </div>
                                {/* /.user-block */}
                                <h3>
                                {
                                    this.state.proyecto.conclusiones === null ? (
                                      this.state.proyecto.estado==="Finalizado" ?(
                                      <div>
                                      <h3>Este proyecto ya finalizo por favor agrege la conclusion</h3>
                                      <h4>Esto lo puede hacer en la opcion de modicicar proyecto </h4>
                                      </div>
                                      ):(
                                        <h3>Este proyecto aun no a finalizado</h3>
                                      )
                                    
                                      ) : (
                                      this.state.proyecto.conclusiones
                                    )
                                  }
                                   
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
                              <span class="info-box-text">Estado</span>
                              <span class="info-box-number">{this.state.proyecto.estado}</span>
                            </div>
                          </div>
                          <div class="info-box mb-3 bg-info">
                            <span class="info-box-icon"><i class="fas fa-globe-americas"></i></span>
                            <div class="info-box-content">
                              <span class="info-box-text">Ciudad</span>
                              <span class="info-box-number">{this.state.proyecto.ciudad}</span>
                            </div>
                          </div>
                          <div class="info-box mb-3 bg-info">
                            <span class="info-box-icon"><i class="fas fa-book"></i></span>
                            <div class="info-box-content">
                              <span class="info-box-text">Metologia</span>
                              <span class="info-box-number">{this.state.proyecto.metodologia}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <td className="project-actions text-right" style={{ width: '100%' }}>
                      <div className=" mt-3 pb-3 mb-3 d-flex">
                        {/* <NavLink to={"/DetallesGruposInvestigacion/" + proye.id} className="btn btn-primary">Detalles</NavLink> */}
                        <NavLink style={{ width: '100%', margin: "20px" }} className="btn btn-primary" to={"/ParticipantesProyecto/" + this.state.proyecto.id} >Participantes</NavLink>
                        <NavLink style={{ width: '100%', margin: "20px" }} className="btn btn-primary" to={"/ProductosProyecto/" + this.state.proyecto.id} >Productos</NavLink>
                        {
                          rol === "Estudiante activo" || rol === "Docente"  || rol === "Investigador formacion" || rol === "Docente investigador" || rol === "Docente lider semillero" ? (
                            <NavLink style={{ width: '100%', margin: "20px" }} className="btn btn-primary" to={"/ActualizarProyecto/" + this.state.proyecto.id} >Modificar Proyecto</NavLink>
                          ) : (
                            <></>
                          )
                        }
                       
                      </div>
                    </td>
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                      <li className="nav-item">
                        <a href="#" className="nav-link ">
                          <i className="fas fa-lightbulb nav-icon" />
                          <p style={{ width: '20%' }}>
                            Funciones
                            <i className="right fas fa-angle-left" />
                          </p>

                        </a>
                        <ul className="nav nav-treeview">

                          <Link to={"/Participaciones/" + this.state.proyecto.id} >
                            <li className="nav-item" >
                              <a className="nav-link">
                                <i className="fas fa-eye nav-icon" />

                                <p>
                                  Eventos
                                </p>

                              </a>
                            </li>
                          </Link>
                          {
                          rol === "Docente" ? (
                            <Link to={"/EliminarProyecto/" + this.state.proyecto.id} >
                            <li className="nav-item" >
                              <a className="nav-link">
                                <i className="fas fa-eye nav-icon" />

                                <p>
                                  Eliminar Proyecto 
                                </p>

                              </a>
                            </li>
                          </Link>
                           
                          ) : (
                            <></>
                          )
                        }
                          <Link to={"/AreasConocimientoProyecto/" + this.state.proyecto.id} >
                            <li className="nav-item" >
                              <a className="nav-link">
                                <i className="fas fa-eye nav-icon" />

                                <p>
                                  Areas de conocimiento
                                </p>

                              </a>
                            </li>
                          </Link>

                
                          <Link to={"/Antecedentes/" + this.state.proyecto.id} >
                            <li className="nav-item" >
                              <a className="nav-link">
                                <i className="fas fa-eye nav-icon" />

                                <p>
                                  Antecedentes
                                </p>

                              </a>
                            </li>
                          </Link>



                        </ul>
                      </li>
                    </ul>
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