import React, { Component } from 'react';
import axios from 'axios';

import { NavLink, Link } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
import swal from 'sweetalert';
export default class ProyectosConvocatoria extends Component {

  state = {
    status: false,
    proyectos: []
  }
//funcion para obtener los proyectos de una convocatoria
  cargarProyecto = () => {
    var url = "http://localhost:8080";
    var request = "/gestioninstitucional/listarlosproyectosdeconvocatoria/" + this.props.id;
    axios.get(url + request).then(res => {
      this.setState({
        proyectos: res.data
        , status: true
      });
      if (this.state.proyectos.length === 0) {
        swal({
          title: "Esta convocatoria no tiene proyectos relacionados",
          icon:"error"
        });
        window.history.back();
    }
     
    });

  }

  componentDidMount = () => {
    this.cargarProyecto();
    //this.cargarLineas();

  }

  render() {
    var rol = localStorage.getItem("tipo");
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
              this.state.proyectos.map((pro, i) => {

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
                                Descripci??n
                              </th>
                              <th style={{ width: '10%' }}>
                                Estado
                              </th>
                              <th style={{ width: '10%' }}>
                                Convocatoria
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                             
                              <td>
                                {pro.titulo_proyecto}
                              </td>
                              <td>
                                {pro.descripcion_proyecto}
                              </td>
                              <td>
                                {pro.estado_proyecto}
                              </td>
                              <td>
                                {pro.convocatoria}
                              </td>
                              <td className="project-actions text-right">
                                <NavLink to={"/DetallesProyectoAI/" + pro.id_proyecto} className="btn btn-primary">Detalles</NavLink>

                                {
            rol==="Profesional investigacion" || rol==="Admin"?(
              <NavLink className="btn btn-success" to={"/PresupuestoProyecto/" + pro.id_proyecto} >Presupuesto</NavLink>
              ) :(
                <></>
                )
           }
                                
                                <NavLink className="btn btn-warning" to={"/ProductosProyecto/" + pro.id_proyecto} >Productos</NavLink>



                              </td>
                            </tr>
                          </tbody>
                        </table>
                        {
            rol==="Profesional investigacion" || rol==="Admin"?(
              pro.estado_proyecto==="Finalizado"||pro.estado_proyecto==="Rechazado"||pro.estado_proyecto==="Propuesta"?(<></>):(
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
                              <Link to={"/AsignarPersupuesto/" + pro.id_proyecto}>
                                <li className="nav-item">
                                  <a className="nav-link">
                                    <i className="fas fa-hand-holding-usd nav-icon" />

                                    <p>Asignar Presupuesto</p>
                                  </a>
                                </li>
                              </Link>

                            </ul>
                          </li>


                        </ul>
)              ) :(
                <></>
                )
           }
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