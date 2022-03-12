import React, { Component } from 'react';
import axios from 'axios';

import { NavLink, Link } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
import EliminarArea from '../../GestionInstitucional/Areas/EliminarArea';
export default class AreasConocimientoProyecto extends Component {


  state = {
    area: []
    , status: false
  }
  /**
   * definicion de varibles
   */
  cajaArea = React.createRef();
  /**
   * metodo para elliminar un area de conocimiento 
   * @param {*} e 
   */
  EliminarArea = (e) => {
    e.preventDefault();
    var areaC = this.cajaArea.current.value;
    var paquete = {
      proyecto: this.props.id,
      areasConocimiento: areaC
    }
    var url = 'http://localhost:8080/gestionproyectosaulaintegrador/eliminarArea';
    axios.post(url, paquete).then(res => {
      this.setState({ status: true });
      if (res.data.respuesta === "Se eliminado la area") {
        alert("El proyecto fue creado correctamente")
        window.location.href = "/ProyectosAulaIntegrador"
      } else {
        alert("la area no fue eliminada")
        window.location.href = "/ProyectosAulaIntegrador"
      }
    });
  }
  /**
   * lista de area de conocmiento de un proyecto 
   */
  AreasConocimiento = () => {
    var url = "http://localhost:8080";
    var request = "/gestionproyectosaulaintegrador/areasconocimientoproyecto/" + this.props.id;
    axios.get(url + request).then(res => {
      this.setState({
        area: res.data
        , status: true
      });
    });
  }
  /**
   * metodo para cargar metodos al inicio 
   */
  componentDidMount = () => {
    this.AreasConocimiento();
    this.setState({ are: this.state.area })
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
                <h1><i class="fas fa-user-friends nav-icon"></i>Areas de conocimiento del proyecto</h1>
              </div>
            </section>
          </div>
          {
            rol === "Semillerista" || rol === "Estudiante activo" || rol === "Docente investigador" || rol === "Docente" || rol === "Docente lider semillero" || rol === "Investigador formacion" ? (
              <NavLink style={{ width: '20%', margin: "10px" }} className="btn btn-success" to={"/AgregarAreasConocimiento/" + this.props.id} >Agregar Areas de conocimiento</NavLink>
            ) : (
              <></>
            )
          }
          {this.state.status === true &&
            (
              this.state.area.map((are) => {
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
                              <td >
                                #{are.id}
                              </td>
                              <td>
                                <a>
                                  {are.descripcion}
                                </a>
                                <br />
                              </td>
                              <td className="project_progress">
                                <a>
                                  {are.gran_area}
                                </a>
                              </td>
                              <td className="project_progress">
                                <a>
                                  {are.nombre}
                                </a>
                              </td>
                              <input type="hidden" value={are.id} ref={this.cajaArea} />
                              <td className="project-actions text-right" style={{ width: '40%' }}>
                                <div className=" mt-3 pb-3 mb-3 d-flex">
                                  {/* <NavLink to={"/DetallesGruposInvestigacion/" + proye.id} className="btn btn-primary">Detalles</NavLink> */}
                                  <button style={{ width: '50%' }} className="btn btn-success" onClick={this.EliminarArea}>Eliminar area</button>
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