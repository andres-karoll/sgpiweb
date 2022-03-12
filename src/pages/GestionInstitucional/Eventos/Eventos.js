import React, { Component } from 'react';
import axios from 'axios';

import { Link, NavLink } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
export default class Eventos extends Component {

  state = {
    eventos: []
    , status: false
  }
//metodo para obtener todos los eventos se agregaria a "eventos"
  cargarEventos = () => {
    var url = "http://localhost:8080";
    var request = "/gestioninstitucional/listareventos";
    axios.get(url + request).then(res => {
      this.setState({
        eventos: res.data
        , status: true
      });
    });
  }

  componentDidMount = () => {
    this.cargarEventos();
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
                <h1><i class="fas fa-calendar-check nav-icon"></i>Eventos</h1>
              </div>
            </section>
          </div>
          <NavLink className="btn btn-info" style={{ width: "100%" }} to={"/InsertarEvento"} >Insertar</NavLink>
          {this.state.status === true &&
            (
              this.state.eventos.map((eve, i) => {

                return (
                  <section className="content">
                    {/* Default box */}
                    <div className="card">

                      <div className="card-header">
                        <h3 className="card-title">Nombre: {eve.nombre}</h3>
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
                              <th style={{ width: '5%' }}>
                                id
                              </th>
                              <th style={{ width: '10%' }}>
                                Nombre
                              </th>
                              <th style={{ width: '10%' }}>
                                Entidad
                              </th>
                              <th style={{ width: '10%' }}>
                                Fecha del evento
                              </th>
                              <th style={{ width: '10%' }}>
                                Sitio web
                              </th>
                              <th style={{ width: '10%' }}>
                                URL memoria
                              </th>
                              <th style={{ width: '5%' }}>
                                Estado
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                {eve.id}
                              </td>
                              <td>
                                <a>
                                  {eve.nombre}
                                </a>
                              </td>
                              <td>
                                <a>
                                  {eve.entidad}
                                </a>
                              </td>
                              <td>
                                <a>
                                  {eve.fecha}
                                </a>
                              </td>
                              <td>
                                <a>
                                  {eve.sitio_web}
                                </a>
                              </td>
                              <td>
                                <a>
                                  {eve.url_memoria}
                                </a>
                              </td>
                              <td>
                                <a>
                                  {eve.estado}
                                </a>
                              </td>
                              <td className="project-actions text-right" style={{ width: '30%' }}>
                                {/* <NavLink to={"/DetallesGruposInvestigacion/" + proye.id} className="btn btn-primary">Detalles</NavLink> */}
                                <NavLink style={{ width: '50%' }} className="btn btn-success" to={"/ActualizarEvento/" + eve.id} >Modificar</NavLink>
                                <NavLink style={{ width: '50%' }} className="btn btn-danger" to={"/EliminarEvento/" + eve.id} >Eliminar</NavLink>

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