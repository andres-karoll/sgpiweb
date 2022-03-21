import React, { Component } from 'react';
import axios from 'axios';

import { NavLink } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
import swal from 'sweetalert';
export default class SemillerosGrupoI extends Component {

  state = {
    status: false,
    semilleros: []
  }
//funcion para listar los semilleros de un grupo de investigacion
  cargarGrupos = () => {
    var url = "http://localhost:8080";
    var request = "/gestioninstitucional/listarsemillerosporgrupo/" + this.props.id;
    axios.get(url + request).then(res => {
      this.setState({
        semilleros: res.data
        , status: true
      });
      if (this.state.semilleros.length === 0) {
        swal({
          title: "este grupo de investigacion no tiene semilleros asociados",
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
                <h1><i class="fas fa-user-friends nav-icon"></i>Semilleros Del grupo: </h1>
              </div>
            </section>
          </div>
          {this.state.status === true &&
            (
              this.state.semilleros.map((semi, i) => {

                return (

                  <section className="content">
                    {/* Default box */}
                    <div className="card">

                      <div className="card-header">
                        <h3 className="card-title">Grupo de Investigacion: {this.props.id}</h3>
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
                              <th style={{ width: '30%' }}>
                                Nombre de semillero
                              </th>
                              <th style={{ width: '30%' }}>
                                Descripcion
                              </th>
                              <th style={{ width: '30%' }}>
                                Fecha fun
                              </th>

                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                {semi.id}
                              </td>
                              <td>
                                {semi.nombre}
                              </td>
                              <td>

                                {semi.descripcion}

                              </td>
                              <td>

                                {semi.fecha_fun}

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