import React, { Component } from 'react';
import axios from 'axios';

import { NavLink, Link } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
export default class TusProyectos extends Component {


  state = {
    proyctos: []
    , status: false,
    pro: []
  }
  /**
   * metodo de carga de grupos de investigacopn 
   */
  cargarGruposI = () => {
    var url = "http://localhost:8080";
    var request = "/gestionproyectosaulaintegrador/proyectosAI/" + localStorage.getItem("cedula");
    axios.get(url + request).then(res => {
      this.setState({
        proyectos: res.data
        , status: true
      });
    });
  }
  /**
   * metodo de inicio 
   */
  componentDidMount = () => {
    this.cargarGruposI();
    this.setState({ pro: this.state.proyectos })
  }
  render() {
    return (
      <div>
        <Aside />
        <Header />
        <div className="content-wrapper">
          <div>
            <section className="content">
              <br />
              <div class="alert alert-info alert-dismissible">
                <h1><i class="fas fa-user-friends nav-icon"></i>Tus Proyectos</h1>
              </div>
            </section>
          </div>
          <NavLink className="btn btn-info" style={{ width: "31%", margin: "10px 1% 1em" }} to={"/CrearProyectoFacultad"} >crear un poryecto</NavLink>
          {this.state.status === true &&
            (
              this.state.proyectos.map((pro) => {
                return (
                  <section className="content">
                    {/* Default box */}
                    <div className="card">

                      <div className="card-header">
                        <div className="card-tools">
                          <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                            <i className="fas fa-minus" />
                          </button>
                          {/* 
                          <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                            <i className="fas fa-times" />
                          </button>*/}
                        </div>
                      </div>
                      <div className="card-body p-0">
                        <table className="table table-striped projects">
                          <thead>
                            <tr>
                              <th style={{ width: '1%' }}>
                                # ID
                              </th>
                              <th style={{ width: '15%' }}>
                                Titulo
                              </th>
                              <th style={{ width: '15%' }}>
                                Descripcion
                              </th>
                              <th style={{ width: '15%' }}>
                                fecha de inicio
                              </th>
                              <th style={{ width: '15%' }}>
                                Tu rol
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                # {pro.id}
                              </td>
                              <td>
                                <a>
                                  {pro.titulo}
                                </a>
                                <br />
                              </td>

                              <td className="project_progress">
                                <a>
                                  {pro.descripcion}
                                </a>
                              </td>
                              <td className="project_progress">
                                <a>
                                  {pro.estado}
                                </a>
                              </td>
                              <td className="project_progress">
                                <a>
                                  {pro.rol}
                                </a>
                              </td>

                              <td className="project-actions text-right" style={{ width: '40%' }}>
                                <div className=" mt-3 pb-3 mb-3 d-flex">
                                  {/* <NavLink to={"/DetallesGruposInvestigacion/" + proye.id} className="btn btn-primary">Detalles</NavLink> */}
                                  <NavLink style={{ width: '50%' }} className="btn btn-success" to={"/DetallesProyectoAI/" + pro.id} >Detalles</NavLink>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                          <li className="nav-item">
                            <a href="#" className="nav-link ">
                              <i className="fas fa-lightbulb nav-icon" />
                              <p>
                                Funciones
                                <i className="right fas fa-angle-left" />
                              </p>

                            </a>
                            <ul className="nav nav-treeview">
                              <Link to={"/AsignarLineaGrupoI/" + pro.id}>
                                <li className="nav-item">
                                  <a className="nav-link">
                                    <i className="fas fa-check nav-icon"> </i>

                                    <p>Asignar Linea al grupo de investigación</p>

                                  </a>
                                </li>
                              </Link>
                              <Link to={"/AsignarProgramaGrupoI/" + pro.id}>
                                <li className="nav-item">
                                  <a className="nav-link">
                                    <i className="fas fa-check nav-icon" />

                                    <p>Asignar Programa al grupo de investigación</p>

                                  </a>
                                </li>
                              </Link>
                              <Link to={"/LineasGrupoI/" + pro.id}>
                                <li className="nav-item">
                                  <a className="nav-link">
                                    <i className="fas fa-check nav-icon" />

                                    <p>Ver lineas de este grupo de investigación</p>

                                  </a>
                                </li>
                              </Link>
                              <Link to={"/ProgramasGrupoI/" + pro.id}>
                                <li className="nav-item">
                                  <a className="nav-link">
                                    <i className="fas fa-check nav-icon" />

                                    <p>Ver programa de este grupo de investigación</p>

                                  </a>
                                </li>
                              </Link>
                            </ul>
                          </li>

                        </ul>

                      </div>
                      {/* /.card-body */}
                    </div>

                    {/* /.card */}
                  </section>
                )
              })
            )}
        </div>
      </div>
    )

  }
}