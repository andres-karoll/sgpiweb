import React, { Component } from 'react';
import axios from 'axios';

import { NavLink } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
import swal from 'sweetalert';
export default class ProgramasGrupoI extends Component {

  state = {
    status: false,
    programas: []
  }
//funcion para listar los programas de un grupo de investigacion
  cargarGrupos = () => {
    var rol = localStorage.getItem("tipo");
    var url = "http://localhost:8080";
    var request = "/gestioninstitucional/listarprogramadelgrupo/" + this.props.id;
    axios.get(url + request).then(res => {
      this.setState({
        programas: res.data
        , status: true
      });
      if (this.state.programas.length === 0) {
        swal({
          title: "este grupo de investigacion no tiene programas asociados",
          icon:"error"
        });
        window.history.back();
    }
    });

  }

  componentDidMount = () => {
    this.cargarGrupos();
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
                <h1><i class="fas fa-eye nav-icon"></i>Programas Del grupo con id: {this.props.id}</h1>
              </div>
            </section>
          </div>
          {this.state.status === true &&
            (
              this.state.programas.map((pro, i) => {

                return (

                  <section className="content">
                    {/* Default box */}
                    <div className="card">

                      <div className="card-header">

                        <h3 className="card-title">programa del Grupo de Investigacion con id: {this.props.id}</h3>

                        {localStorage.getItem("tipo") === "profesor" &&
                          <h3 className="card-title">Grupo de Investigacion: {pro.grupo_investigacion}</h3>
                        }
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
                                ID
                              </th>
                              <th style={{ width: '50%' }}>
                                Nombre del Programa
                              </th>
                              <th style={{ width: '50%' }}>
                                Director del programa
                              </th>
                              <th style={{ width: '50%' }}>
                                Facultad
                              </th>

                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                {pro.id}
                              </td>
                              <td>
                                {pro.nombre}
                              </td>
                              <td>

                                {pro.Director}

                              </td>
                              <td>

                                {pro.Facultad}

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