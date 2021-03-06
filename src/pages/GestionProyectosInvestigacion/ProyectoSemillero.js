import React, { Component } from 'react';
import axios from 'axios';

import { NavLink, Link } from 'react-router-dom';
import Aside from '../../components/Global/Aside';
import Header from '../../components/Global/Header';
import swal from 'sweetalert';
export default class ProyectoSemillero extends Component {

  state = {
    status: false,
    proyectos: [],
    pro: []
  }
  /**
   * metodo de carga de todo los proyectos de semillero en los que esta participando un usuario 
   */
  cargarGruposI = () => {
    var url = "http://localhost:8080";
    var request = "/gestionproyectosinvestigacion/todosLosproyectosusuariosemillero/" + localStorage.getItem("cedula");
    axios.get(url + request).then(res => {
      this.setState({
        proyectos: res.data
        , status: true
      });
    });
  }
  /**
   * metodo para verificar si se encuentra en un semillero 
   */
  verificarSemillero = () => {
    var url = "http://localhost:8080";
    var request = "/gestionproyectosinvestigacion/verficarSemillero/" + localStorage.getItem("cedula");
    axios.get(url + request).
      then(response => {
        return response.data;
      }).then(response => {
        if (response.respuesta == "este usuario ya esta asignado a un semillero") {
          swal({
            title: 'Ya estas incrito a un semillero, por favor ingresa vuelve a iniciar sesion con el rol de semillerista',
            icon: "success"
          });
          window.history.back();
        }
      })
  }
  /**
   * metodo de inicio
   */
  componentDidMount = () => {


    if (localStorage.getItem("tipo") === "Estudiante activo") {
      this.verificarSemillero();
    }else{
      this.cargarGruposI();
    }


    this.setState({ pro: this.state.proyectos })
  }
  render() {
    var rol = localStorage.getItem("tipo")
    var numero;
    return (
      <div>
        <Aside />
        <Header />
        <div className="content-wrapper">
          <div>
            <section className="content">
              <br />
              <div class="alert alert-info alert-dismissible">
                <h1><i class="fas fa-user-friends nav-icon"></i>Tus Proyectos de semillero</h1>
              </div>
            </section>
          </div>
          {
            rol === "Egresado" ? (
              <></>
            ) : rol === "Estudiante activo" || rol === "Estudiante inactivo" ||numero==="0" ? (
              <></>
            )
              : (
                <NavLink className="btn btn-info" style={{ width: "31%", margin: "10px 1% 1em" }} to={"/CrearProyectoSemillero"} >crear un poryecto</NavLink>
              )
          }
          {
            rol === "Egresado" || rol === "Estudiante inactivo" ? (
              <></>
            ) :
              rol === "Estudiante activo" ? (
                <NavLink className="btn btn-info" style={{ width: "31%", margin: "10px 1% 1em" }} to={"/UnirseSemillero"} >Unirse a un semillero</NavLink>
              ) : (
                <></>
              )
          }
          {
            rol === "Egresado" || rol === "Estudiante inactivo" ? (
              <></>
            ) : rol === "Estudiante activo" ? (
              <></>
            ) : (
              <NavLink className="btn btn-info" style={{ width: "31%", margin: "10px 1% 1em" }} to={"/ParticiparConvocatoria/"} >Participar en una Convocatoria</NavLink>
            )
          }
          {
            rol === "Docente lider semillero" ? (
              <NavLink className="btn btn-info" style={{ width: "31%", margin: "10px 1% 1em" }} to={"/MacroProyectos"} >Macro proyectos</NavLink>

            ) : (
              <></>
            )
          }
          {this.state.status === true &&
            (
              this.state.proyectos.map((pro) => {
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
                        
                              <th style={{ width: '15%' }}>
                                Titulo
                              </th>
                              <th style={{ width: '15%' }}>
                                Descripcion
                              </th>
                              <th style={{ width: '15%' }}>
                               Estado
                              </th>

                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                     
                              <td>
                                <a>
                                  {pro.titulo}
                                </a>
                                <br />
                              </td>

                              <td className="project_progress">
                                <a>
                                  {pro.descripcion}
                                </a>
                              </td>
                              <td className="project_progress">
                                <a>
                                  {pro.estado}
                                </a>
                              </td>
                              <td className="project-actions text-right" style={{ width: '20%' }}>
                                <div className=" mt-3 pb-3 mb-3 d-flex">
                                  {/* <NavLink to={"/DetallesGruposInvestigacion/" + proye.id} className="btn btn-primary">Detalles</NavLink> */}
                                  {(rol === "Semillerista") &&
                                    <NavLink style={{ width: '50%' }} className="btn btn-success" to={"/PresupuestoProyecto/" + pro.id} >Presupuesto</NavLink>

                                  }
                                  <NavLink style={{ width: '50%' }} className="btn btn-success" to={"/DetallesProyectoSemillero/" + pro.id} >Detalles</NavLink>
                                  {pro.estado === "Finalizado" ? (
                                    <></>
                                  ) : (rol === "Docente lider semillero" &&
                                    <NavLink style={{ width: '50%' }} className="btn btn-success" to={"/Evaluacion/" + pro.id} >Evaluar</NavLink>)}


                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        {rol==="Docente lider semillero" &&
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
   
                                 <Link to={"/SubirProductos/" + pro.id}>
                                   <li className="nav-item">
                                     <a className="nav-link">
                                       <i className="fas fa-file-upload nav-icon" />
   
                                       <p>Subir Productos</p>
   
                                     </a>
                                   </li>
                                 </Link>
   
                               </ul>
                             </li>
                           </ul>
                        
                        }
                   

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