import React, { Component } from 'react';
import axios from 'axios';
import { NavLink, Link } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
import swal from 'sweetalert';
export default class ProyectosConvocatorias extends Component {
  state = {
    status: false,
    proye: []
  }
  /**
   * metodo de carga de proyectos 
   */
  cargarProyecto = () => {
    var url = "http://localhost:8080";
    var request = "/gestioninstitucional/ProyectosPostuladosConvocatorias/" + this.props.id;
    axios.get(url + request).then(res => {
      this.setState({
        proye: res.data
        , status: true
      });
      if (this.state.proye.length === 0) {
        swal({
          title:"No tiene proyectos para evaluar",
          icon:"error"
        });
        window.history.back();
      }
    });
  }
  /**
   * metodo de inciio
   */
  componentDidMount = () => {
    this.cargarProyecto();
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
                <h1><i class="fas fa-eye nav-icon"></i>Proyectos de la Convocatoria con id: {this.props.id}</h1>
              </div>
            </section>
          </div>
          {this.state.status === true &&
            (
              this.state.proye.map((pro, i) => {
                return (
                  <section className="content">
                    {/* Default box */}
                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title">Proyecto de la convocatoria con ID: {this.props.id}</h3>
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
                                Titulo del proyecto
                              </th>
                              <th style={{ width: '25%' }}>
                                Descripción
                              </th>
                              <th style={{ width: '10%' }}>
                                Convocatoria
                              </th>
                              <th style={{ width: '10%' }}>
                                Estado en la convocatoria
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                {pro.titulo}
                              </td>
                              <td>
                                {pro.descripcion}
                              </td>
                              <td>
                                {pro.nombre_convocatoria}
                              </td>
                              <td>
                                {pro.id_proyecto}
                              </td>
                              <td className="project-actions text-right">
                                <NavLink to={"/DetallesProyectoSemillero/" + pro.id} className="btn btn-primary">Detalles</NavLink>
                                <NavLink className="btn btn-warning" to={"/EvaluacionConvocatorias/" + pro.id} >Evaluar</NavLink>
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