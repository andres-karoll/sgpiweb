import React, { Component, useState } from 'react';
import axios from 'axios';

import { Link, NavLink } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
export default class Clases extends Component {

  state = {
    clases: []
    , status: false
  }
  /**
   * cargar clases de un profesor 
   */
  cargarClases = () => {
    var url = "http://localhost:8080";
    var request = "/gestioninstitucional/listarclasesporprofesor/" + localStorage.getItem("cedula");

    axios.get(url + request).then(res => {

      this.setState({

        clases: res.data
        , status: true
      });

    });
  }

  /**
   * metodo de inicio 
   */
  componentDidMount = () => {
    this.cargarClases();
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
                <h1><i class="fas fa-chalkboard nav-icon"></i>Clases</h1>
              </div>
            </section>
          </div>
          { /*<NavLink className="btn btn-info" style={{width: "100%"}} to={"/InsertarClase"} >Insertar</NavLink>*/}
          {this.state.status === true &&
            (
              this.state.clases.map((cla) => {
                return (
                  <section className="content">
                    {/* Default box */}
                    <div className="card">

                      <div className="card-header">
                        <h3 className="card-title">Nombre: {cla.nombre}</h3>
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
                              <th style={{ width: '15%' }}>
                                Numero
                              </th>
                              <th style={{ width: '15%' }}>
                                Nombre
                              </th>
                              <th style={{ width: '15%' }}>
                                Semestre
                              </th>
                              <th style={{ width: '15%' }}>
                                Materia
                              </th>
                              <th style={{ width: '15%' }}>
                                Profesor
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                {cla.numero}
                              </td>
                              <td>
                                <a>
                                  {cla.nombre}
                                </a>
                              </td>
                              <td>
                                <a>
                                  {cla.semestre}
                                </a>
                              </td>
                              <td>
                                <a>
                                  {cla.materia}
                                </a>
                              </td>
                              <td>
                                <a>
                                  {cla.profesor}
                                </a>
                              </td>
                              <td className="project-actions text-right" style={{ width: '30%' }}>
                                {/* <NavLink to={"/DetallesGruposInvestigacion/" + proye.id} className="btn btn-primary">Detalles</NavLink> */}
                                <NavLink style={{ width: '50%' }} className="btn btn-success" to={"/ProyectosPropuesta/" + cla.numero} >Ver Proyectos</NavLink>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      {/* /.card-body */}
                    </div>
                    {/* /.card */}
                  </section>
                );
              })
            )}
        </div>
      </div>
    )
  }
}