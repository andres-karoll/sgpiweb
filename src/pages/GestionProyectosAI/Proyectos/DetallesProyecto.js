import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
export default class DetallesProyecto extends Component {

  state = {
    proyecto: {}
    , status: false
  }

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
                <section className="content-header">
                  <div className="container-fluid">
                    <div className="row mb-2">
                      <div className="col-sm-6">
                        <h1>Detalles del Proyecto</h1>
                      </div>
                      <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                          <li className="breadcrumb-item"><a href="/ProyectosGrado">Proyecto</a></li>
                          <li className="breadcrumb-item active">Detalles del proyecto</li>
                        </ol>
                      </div>
                    </div>
                  </div>{/* /.container-fluid */}
                </section>
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
                            <div className="col-12 col-sm-4">
                              <div className="info-box bg-light">
                                <div className="info-box-content">
                                  <span className="info-box-text text-center text-muted">Fecha inicio</span>
                                  <span className="info-box-number text-center text-muted mb-0">{this.state.proyecto.fecha_inicio}</span>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-sm-4">
                              <div className="info-box bg-light">
                                <div className="info-box-content">
                                  <span className="info-box-text text-center text-muted">Fecha fin</span>
                                  <span className="info-box-number text-center text-muted mb-0">{this.state.proyecto.fecha_fin}</span>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-sm-4">
                              <div className="info-box bg-light">
                                <div className="info-box-content">
                                  <span className="info-box-text text-center text-muted">Estado</span>
                                  <span className="info-box-number text-center text-muted mb-0">{this.state.proyecto.estado}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">

                              <div className="post">
                                <div >
                                  <span className="username">
                                    <a >Descripcion</a>
                                  </span>

                                </div>
                                {/* /.user-block */}
                                <p>
                                  {this.state.proyecto.descripcion}
                                </p>
                                <p>

                                </p>
                              </div>
                              <div className="post clearfix">
                                <div >

                                  <span className="username">
                                    <a>justificacion</a>
                                  </span>

                                </div>
                                {/* /.user-block */}
                                <p>
                                  {this.state.proyecto.justificacion}
                                </p>
                                <p>

                                </p>
                              </div>
                              <div className="post clearfix">
                                <div >

                                  <span className="username">
                                    <a>Metodologia</a>
                                  </span>

                                </div>
                                {/* /.user-block */}
                                <p>
                                  {this.state.proyecto.metodologia}
                                </p>
                                <p>

                                </p>
                              </div>

                            </div>


                          </div>

                          <td className="project-actions text-right" style={{ width: '40%' }}>
                            <div className=" mt-3 pb-3 mb-3 d-flex">
                              {/* <NavLink to={"/DetallesGruposInvestigacion/" + proye.id} className="btn btn-primary">Detalles</NavLink> */}
                              <NavLink style={{ width: '50%' }} className="btn btn-success" to={"/ParticipantesProyecto/" + this.state.proyecto.id} >Participantes</NavLink>
                              <NavLink style={{ width: '50%' }} className="btn btn-success" to={"/ProductosProyecto/" + this.state.proyecto.id} >Productos</NavLink>
                            </div>
                          </td>
                        </div>
                        <div className="col-12 col-md-12 col-lg-4 order-1 order-md-2">
                          <h3 className="text-primary"><i className="fas fa-graduation-cap" /> Titulo: {this.state.proyecto.titulo}</h3>
                          <p className="text-muted"> {this.state.proyecto.descripcion}</p>
                          <br />
                          <div className="text-muted">
                            <p className="text-sm">Justificación
                              <b className="d-block">{this.state.proyecto.justificacion}</b>
                            </p>
                            <p className="text-sm">Retroalimentación
                              <b className="d-block">{this.state.proyecto.retroalimentacion_final}</b>
                            </p>
                            <p className="text-sm">Conclusiones
                              <b className="d-block">{this.state.proyecto.conclusiones}</b>
                            </p>

                          </div>
                          <h5 className="mt-5 text-muted">Archivos del proyecto</h5>
                          <ul className="list-unstyled">

                            <li>
                              <div>
                                <br />
                              </div>
                              <NavLink style={{ width: '50%' }} className="btn btn-success" to={"/Participaciones/" + this.state.proyecto.id} >eventos</NavLink>
                            </li>
                            <li>

                              <div>
                                <br />
                              </div>

                              <NavLink style={{ width: '50%' }} className="btn btn-success" to={"/AreasConocimientoProyecto/" + this.state.proyecto.id} >Areas de conocimiento </NavLink>
                            </li>
                            <li>
                              <div>
                                <br />
                              </div>
                              {
                                rol === "Egresado" || rol === "Estudiante inactivo" ? (
                                  <></>
                                ) : (
                                  <NavLink style={{ width: '50%' }} className="btn btn-success" to={"/ActualizarProyecto/" + this.state.proyecto.id} >Modificar Proyecto</NavLink>
                                )
                              } 
                                </li>
                              <li>
                              <div>
                                <br />
                              </div>
                              {
                                rol === "Docentes"  ? (
                                  <NavLink style={{ width: '50%' }} className="btn btn-success" to={"/EliminarProyecto/" + this.state.proyecto.id} >Eliminar  Proyecto</NavLink>
                               
                                ) : (
                                  <></>
                              )
                              }
                                              {
                                rol === "Docente investigador"  ? (
                                  <NavLink style={{ width: '50%' }} className="btn btn-success" to={"/ParticiparConvocatoria"} >Participa en una Convocatoria</NavLink>
                               
                                ) : (
                                  <></>
                              )
                              }
                               
                                              {
                                rol === "Docente lider semillero"  ? (
                                  <NavLink style={{ width: '50%' }} className="btn btn-success" to={"/ParticiparConvocatoria"} >Participa en una Convocatoria</NavLink>
                               
                                ) : (
                                  <></>
                              )
                              }
                            </li>

                            <li>
                              <div>
                                <br />
                              </div>

                              <NavLink style={{ width: '50%' }} className="btn btn-success" to={"/Antecedentes/" + this.state.proyecto.id} >Antecedentes</NavLink>
                            </li>

                            <li>
                              <a href className="btn-link text-secondary"><i className="far fa-fw fa-file-word" /> Contract-10_12_2014.docx</a>
                            </li>
                          </ul>

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
