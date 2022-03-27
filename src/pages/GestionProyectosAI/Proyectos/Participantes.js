import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
export default class Participantes extends Component {
  state = {
    participantes: {}
    , status: false
    , pra: []
  }
  /**
   * metodo para mostrar participantes de un proyecto 
   */
  mostrarParticipantes = () => {
    var request = "/gestionproyectosaulaintegrador/listarparticipantesporporyecto/" + this.props.id;
    var url = "http://localhost:8080" + request;
    axios.get(url).then(res => {
      this.setState({
        participantes: res.data
        , status: true
      });
    });
  }
  /**
   * metodo de inicio
   */
  componentDidMount = () => {
    this.mostrarParticipantes();
    this.setState({ pra: this.state.participantes })
  }
  render() {
    var rol = localStorage.getItem("tipo")
    return (
      <div>
        <Aside />
        <Header />
        <div className="content-wrapper">
          <div>
            <section className="content">
              <br />
              <div class="alert alert-info alert-dismissible">
                <h1><i class="fas fa-user-friends nav-icon"></i>Participantes</h1>
              </div>
            </section>
          </div>
          {this.state.status === true &&
            (
              this.state.participantes.map((pra) => {
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
                                Programa
                              </th>
                              <th style={{ width: '15%' }}>
                                nombre
                              </th>
                              <th style={{ width: '15%' }}>
                                fecha de fin
                              </th>
                              <th style={{ width: '15%' }}>
                                Rol
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                # {pra.programa}
                              </td>
                              <td>
                                <a>
                                  {pra.nombre}
                                </a>
                                <br />
                              </td>

                              <td className="project_progress">
                                <a>
                                  {pra.fecha_fin}
                                </a>
                              </td>
                            
                              <td className="project_progress">
                                <a>
                                  {pra.rol}
                                </a>
                              </td>
                              <td className="project-actions text-right" style={{ width: '40%' }}>
                                <div className=" mt-3 pb-3 mb-3 d-flex">
                                  {/* <NavLink to={"/DetallesGruposInvestigacion/" + proye.id} className="btn btn-primary">Detalles</NavLink> */}
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
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
