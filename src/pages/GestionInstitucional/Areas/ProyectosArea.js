import React, { Component } from 'react';
import axios from 'axios';

import { NavLink } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
import swal from 'sweetalert';
export default class ProyectosArea extends Component {

  state = {
    status: false,
    proyectos: []
  }
//metodo para obtener los proyectos asociados a un area en concreto
  cargarProyectos = () => {
    var url = "http://localhost:8080";
    var request = "/gestionfiltroproyecto/listarproyectosporarea/" + this.props.id;
    axios.get(url + request).then(res => {
      this.setState({
        proyectos: res.data
        , status: true
      });
      if (this.state.proyectos.length === 0) {
        swal({
          title: "esta area no tiene proyectos relacionados",
          icon:"error"
        });
        window.history.back();
    }
     
    });

  }

  componentDidMount = () => {
    this.cargarProyectos();
    //this.cargarLineas();

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
                <h1 style={{ fontSize: "x-large" }} >< i style={{ fontSize: "x-large" }} class="fas fa-eye nav-icon"></i>Proyectos del Area con ID: {this.props.id}</h1>
              </div>
            </section>
          </div>
          {this.state.status === true &&
            (
              this.state.proyectos.map((pro, i) => {

                return (

                  <section className="content">
                    {/* Default box */}
                    <div className="card">

                      <div className="card-header">
                        <h3 className="card-title">Id del area: {this.props.id}</h3>
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
                            <tr style={{ fontSize: "large" }}>

                             
                              <th style={{ width: '20%' }}>
                                Titulo de proyecto
                              </th>
                              <th style={{ width: '20%' }}>
                                descripci??n
                              </th>
                              <th style={{ width: '20%' }}>
                                justificaci??n
                              </th>
                              <th style={{ width: '20%' }}>
                                visibilidad
                              </th>

                            </tr>
                          </thead>
                          <tbody style={{ fontSize: "large" }}>
                            <tr>

                              <td>
                                {pro.titulo}
                              </td>
                              <td>
                                {pro.descripcion}
                              </td>
                              <td>
                                {pro.justificacion}
                              </td>
                              <td>
                                {pro.visibilidad}
                              </td>
                              <td className="project-actions text-right" style={{ width: '40%' }}>

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