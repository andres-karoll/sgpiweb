import React, { Component } from 'react';
import axios from 'axios';

import { NavLink, Link } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
export default class Participaciones extends Component {


  state = {
    evento: []
    , status: false,
    pro: []
  }

  Eventos = () => {
    var url = "http://localhost:8080";
    var request = "/gestionproyectosaulaintegrador/participacionesproyecto/"+this.props.id;
    axios.get(url + request).then(res => {
      this.setState({
        evento: res.data
        , status: true
      });
    });
  }
  componentDidMount = () => {
    this.Eventos();
    this.setState({ eve: this.state.evento })
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
                <h1><i class="fas fa-user-friends nav-icon"></i>Tus Proyectos</h1>
              </div>
            </section>
          </div>
          
           {
             rol==="Egresado"?(
           <></>
              ) :(
                <NavLink style={{ width: '50%' }} className="btn btn-success" to={"/ParticiparEvento/" + this.props.id} >Participa en un evento</NavLink>
             )
           }
            

          {this.state.status === true &&
            (
              this.state.evento.map((eve) => {
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
                                Proyecto
                              </th>
                              <th style={{ width: '15%' }}>
                                Nombre del evento
                              </th>
                              <th style={{ width: '15%' }}>
                                reconocimiento
                              </th>
                              <th style={{ width: '15%' }}>
                                fecha de la participacion
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                # {eve.proyecto}
                              </td>
                              <td>
                                <a>
                                  {eve.evento}
                                </a>
                                <br />
                              </td>

                              <td className="project_progress">
                                <a>
                                  {eve.reconocimientos}
                                </a>
                              </td>
                              <td className="project_progress">
                                <a>
                                  {eve.fecha_part}
                                </a>
                              </td>
                              <td className="project-actions text-right" style={{ width: '40%' }}>
                                <div className=" mt-3 pb-3 mb-3 d-flex">
                                  {/* <NavLink to={"/DetallesGruposInvestigacion/" + proye.id} className="btn btn-primary">Detalles</NavLink> */}
                                  <NavLink style={{ width: '50%' }} className="btn btn-success" to={"/ParticiparEvento/" + eve.id} >Participar en este evento</NavLink>
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