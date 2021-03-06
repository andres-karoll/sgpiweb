import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
export default class Aside extends Component {
  state = {
    status: false,
    nombre: [],
    nom: []
  }
  CargarNombre = () => {
    var request = "/gestionusuario/buscarusuario/" + localStorage.getItem("cedula");
    var url = "http://localhost:8080" + request;
    axios.get(url).then(res => {
      this.setState({
        nombre: res.data
        , status: true
      })
    });
  }
  componentDidMount = () => {
    this.CargarNombre();
  }
  render() {
    var rol = localStorage.getItem("tipo");
    var programa = localStorage.getItem("programa");
    return (
      
      <aside className="main-sidebar sidebar-dark-primary elevation-3" style={{ position: 'fixed', backgroundColor:'#CE6308' }}>
       
        <div className="sidebar" style={{ position: 'fixed', overflowY: 'scroll', scrollbarWidth: 'thin', width: '250px' }}>
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-4 pb-4 mb-4 d-flex">
            <div className="image">
              <img src="https://i.ibb.co/X201Qwc/LOGO.png" className="img-circle elevation-2" alt="User Image" />
            </div>
            <div className="info">
              <a href="/HomeInstitucional">
              <h2  className="d-block" style={{ color:'black' }}>SGPI</h2>
              </a>
            </div>
          </div>

          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <a href={"/Perfil/" + localStorage.getItem("cedula")} className="brand-link" style={{ color:'black' }}>
              <h3>{rol} </h3>
            </a>
          </div>
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <a href={"/Perfil/" + localStorage.getItem("cedula")} className="brand-link" style={{ color:'black' }}>
              <h3 className="brand-text font-weight-light"  > {this.state.nombre.nombres} </h3>
            </a>
          </div>
          
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              {(rol === "Direccion investigacion corporativo") &&
                <li className="nav-item menu-open">
                  <ul className="nav nav-treeview">
                    <Link to={"/ProyectosConvocatorias/"+"Validacion 3"}>
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-user-friends  nav-icon" />
                          <p>Proyectos fase 3 convocatorias</p>
                        </a>
                      </li>
                    </Link>
                    <Link to={"/ProyectoAceptadoConvocatoria/"+"Aceptado 2"}>
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-user-friends  nav-icon" />
                          <p>Proyectos fase 7 convocatorias</p>
                        </a>
                      </li>
                    </Link>|
                  </ul>
                </li>
              }
              {(rol === "Coordinador investigacion facultad") &&
                <li className="nav-item menu-open">
                  <a href="#" className="nav-link ">
                    <i className="fas fa-bars  nav-icon" />
                    <p>
                      Menu
                      <i className="right fas fa-angle-left" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <Link to="/ProyectosGrado">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-graduation-cap nav-icon" />
                          <p>Trabajos de grado</p>
                        </a>
                      </li>
                    </Link>
                    <Link to={"/Proyectos/"}>
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-dice-d20 nav-icon" />
                          <p>Todos los proyectos</p>
                        </a>
                      </li>
                    </Link>
                    <Link to={"/ProyectosConvocatorias/"+"Validacion 2"}>
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-user-friends  nav-icon" />
                          <p>Proyectos fase 2 convocatorias</p>
                        </a>
                      </li>
                    </Link>
                    <Link to={"/ProyectoDesarrolloConvocatoria/"+"Validacion 4"}>
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-user-friends  nav-icon" />
                          <p>Proyectos fase 4 convocatorias</p>
                        </a>
                      </li>
                    </Link>
                    <Link to={"/ProyectoAceptadoConvocatoria/"+"Aceptado 1"}>
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-user-friends  nav-icon" />
                          <p>Proyectos fase 6 convocatorias</p>
                        </a>
                      </li>
                    </Link>
                  </ul>
                </li>
              }
              {
                (rol === "Egresado") &&
                <li className="nav-item menu-open">
                  <a href="#" className="nav-link ">
                    <i className="fas fa-folder-open nav-icon" />
                    <p>
                      Tus Proyectos
                      <i className="right fas fa-angle-left" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <Link to="/ProyectosAulaIntegrador">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-book nav-icon"> </i>
                          <p>Tus Proyectos</p>
                        </a>
                      </li>
                    </Link>
                  </ul>
                  <ul className="nav nav-treeview">
                    <Link to="/TrabajoGrado/">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-user-graduate nav-icon"> </i>
                          <p>Proyecto de grado</p>
                        </a>
                      </li>
                    </Link>
                  </ul>
                  <a href="#" className="nav-link ">
                    <i className="fas fa-seedling nav-icon" />
                    <p>
                      Semillero
                      <i className="right fas fa-angle-left" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <Link to="/ProyectoSemillero">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-seedling nav-icon"> </i>
                          <p>Proyectos Semillero</p>
                        </a>
                      </li>
                    </Link>
                  </ul>
                </li>
              }
              {(rol === "Profesional investigacion") &&
                <li className="nav-item menu-open">
                  <a href="#" className="nav-link ">
                    <i className="fas fa-bars nav-icon"/>
                    <p>
                      Menu
                      <i className="right fas fa-angle-left" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <Link to={"/ProyectoAceptadoConvocatoria/"+"Terminado"}>
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-graduation-cap nav-icon" />
                          <p>Tus proyectos de convocatoria finalizados</p>
                        </a>
                      </li>
                    </Link>
                    <Link to="/Convocatorias">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-door-open nav-icon"> </i>
                          <p>Todas las convocatorias </p>
                        </a>
                      </li>
                    </Link>
                    <Link to="/ProyectosGrado">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-graduation-cap nav-icon"> </i>
                          <p>Proyectos de grado </p>
                        </a>
                      </li>
                    </Link>
                  </ul>
                </li>
              }
              {(rol === "Lider grupo investigacion") &&
                <li className="nav-item menu-open">
                  <a href="#" className="nav-link ">
                    <i className="fas fa-bars  nav-icon" />
                    <p>
                      Menu
                      <i className="right fas fa-angle-left" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <Link to="/ConvocatoriasAbiertas">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-door-open nav-icon"> </i>
                          <p>Convocatorias Abiertas</p>
                        </a>
                      </li>
                    </Link>
                    
                    <Link to="/Convocatorias">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-address-book nav-icon"> </i>
                          <p>Todas las convocatorias </p>
                        </a>
                      </li>
                    </Link>
                    <Link to={"/ProyectosConvocatorias/"+"Validacion 1"}>
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-user-friends  nav-icon" />
                          <p>Proyectos fase 1 convocatorias</p>
                        </a>
                      </li>
                    </Link>
                    <Link to={"/ProyectoAceptadoConvocatoria/"+"Finalizado"}>
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-user-friends  nav-icon" />
                          <p>Proyectos fase 5 convocatorias</p>
                        </a>
                      </li>
                    </Link>
                  </ul>
                </li>
              }
              {(rol === "Investigador formacion") &&
                <li className="nav-item menu-open">
                  <a href="#" className="nav-link ">
                    <i className="fas fa-bars  nav-icon" />
                    <p>
                      Menu
                      <i className="right fas fa-angle-left" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <Link to="/TusProyectosConvocatoria">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-graduation-cap nav-icon"> </i>
                          <p>Tus proyectos convocatoria</p>
                        </a>
                      </li>
                    </Link>
                  </ul>
                </li>
              }
              {
                (rol === "Semillerista") &&
                <li className="nav-item menu-open">
                  <a href="#" className="nav-link ">
                    <i className="fas fa-bars nav-icon" />
                    <p>
                      Menu
                      <i className="right fas fa-angle-left" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <Link to="/TusProyectosSemillero/">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-folder-open nav-icon" />
                          <p>Tus proyectos</p>
                        </a>
                      </li>
                    </Link>
                  </ul>
                </li>
              }
              {(rol === "Docente investigador") &&
                <li className="nav-item menu-open">
                  <a href="#" className="nav-link ">
                    <i className="fas fa-bars nav-icon" />
                    <p>
                      Menu
                      <i className="right fas fa-angle-left" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <Link to="/ConvocatoriasAbiertas">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-graduation-cap nav-icon"> </i>
                          <p>Convocatorias</p>
                        </a>
                      </li>
                    </Link>

                  </ul>
                </li>
              }
              {(rol === "Lider investigacion facultad") &&
                <li className="nav-item menu-open">
                  <a href="#" className="nav-link ">
                    <i className="fas fa-bars  nav-icon" />
                    <p>
                      Menu
                      <i className="right fas fa-angle-left" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <Link to="/ConvocatoriasAbiertas">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-door-open nav-icon"> </i>
                          <p>Convocatorias Abiertas</p>
                        </a>
                      </li>
                    </Link>
                    <Link to={"/UsuariosPrograma/" + programa}>
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-user-friends  nav-icon" />
                          <p>Usuarios de programa</p>
                        </a>
                      </li>
                    </Link>
                  </ul>
                </li>
              }
              {(rol === "Docente lider semillero") &&
                <li className="nav-item menu-open">
                  <a href="#" className="nav-link ">
                    <i className="fas fa-bars  nav-icon" />
                    <p>
                      Menu
                      <i className="right fas fa-angle-left" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    
                    <Link to="/ProyectoSemillero">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-folder-open nav-icon" />
                          <p>Tus proyectos</p>
                        </a>
                      </li>
                    </Link>
                  </ul>
                </li>
              }
              {(rol === "Estudiante activo" || rol === "Estudiante inactivo") &&
                <li className="nav-item menu-open">
                  <a href="#" className="nav-link ">
                    <i className="fas fa-bars nav-icon" />
                    <p>
                      Menu
                      <i className="right fas fa-angle-left" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <Link to="/ProyectosAulaIntegrador">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-book nav-icon"> </i>
                          <p>Tus proyectos </p>
                        </a>
                      </li>
                    </Link>
                  </ul>
                  <a href="#" className="nav-link ">
                    <i className="fas fa-seedling nav-icon" />
                    <p>
                      Semillero
                      <i className="right fas fa-angle-left" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <Link to="/ProyectoSemillero">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-seedling nav-icon"> </i>
                          <p>Proyectos Semillero</p>
                        </a>
                      </li>
                    </Link>
                  </ul>
                </li>
              }
              {(rol === "Director programa") &&
                <li className="nav-item menu-open">
                  <a href="#" className="nav-link ">
                    <i className="fas fa-bars nav-icon" />
                    <p>
                      Menu
                      <i className="right fas fa-angle-left " />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <Link to={"/MateriasPrograma/" + programa}>
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-book-reader nav-icon" />
                          <p>Materias de tu programa</p>
                        </a>
                      </li>
                    </Link>
                  </ul>
                  <ul className="nav nav-treeview">
                    <Link to={"/UsuariosPrograma/" + programa}>
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-user-friends  nav-icon" />
                          <p>Usuarios de tu programa</p>
                        </a>
                      </li>
                    </Link>
                  </ul>
                </li>
              }
              
              {(rol === "Admin") &&
                <li className="nav-item menu-open">
                  <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                  </div>
                  <a href="#" className="nav-link ">
                    <i className="fas fa-bars  nav-icon" />
                    <p>
                      Menu
                      <i className="right fas fa-angle-left" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <Link to="/ProyectosGradoFin">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-graduation-cap nav-icon"> </i>
                          <p>Trabajos de grado terminados</p>
                        </a>
                      </li>
                    </Link>
                    <Link to="/ProyectosGrado">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-graduation-cap nav-icon" />
                          <p>Trabajos de grado</p>
                        </a>
                      </li>
                    </Link>
                    <Link to="/CrearUsuario">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-graduation-cap nav-icon" />
                          <p>Crear usuario</p>
                        </a>
                      </li>
                    </Link>
                    <Link to="/GruposInvestigacion">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-user-friends nav-icon"> </i>
                          <p>Grupos de investigaci??n</p>
                        </a>
                      </li>
                    </Link>
                    <Link to="/Semilleros">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-seedling nav-icon" />
                          <p>Semilleros</p>
                        </a>
                      </li>
                    </Link>
                    <Link to="/Facultades">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className=" fas fa-building nav-icon" />
                          <p>Facultades</p>
                        </a>
                      </li>
                    </Link>
                    <Link to="/Programas">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-feather-alt nav-icon" />
                          <p>Programas</p>
                        </a>
                      </li>
                    </Link>
                    <Link to="/Materias">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-book-reader nav-icon" />
                          <p>Materias</p>
                        </a>
                      </li>
                    </Link>
                    <Link to="/Clases">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-chalkboard nav-icon" />
                          <p>Clases</p>
                        </a>
                      </li>
                    </Link>
                    <Link to="/Lineas">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="  fas fa-globe nav-icon" />
                          <p>Lineas de investigaci??n</p>
                        </a>
                      </li>
                    </Link>
                    <Link to="/AreasConocimiento">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-brain nav-icon" />
                          <p>Areas de Conocimiento</p>
                        </a>
                      </li>
                    </Link>
                    <Link to="/Eventos">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-calendar-check nav-icon" />
                          <p>Eventos</p>
                        </a>
                      </li>
                    </Link>
                    <Link to="/Convocatorias">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-pencil-alt nav-icon" />
                          <p> Convocatorias</p>
                        </a>
                      </li>
                    </Link>
                    <Link to="/ConvocatoriasAbiertas">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-door-open nav-icon" />
                          <p> Convocatorias Abiertas</p>
                        </a>
                      </li>
                    </Link>
                    <Link to="/ConvocatoriasCerradas">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-door-closed nav-icon" />
                          <p> Convocatorias Cerradas</p>
                        </a>
                      </li>
                    </Link>
                    <Link to="/ModificarRol">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-user-cog nav-icon"> </i>
                          <p>Agregar rol a usuario</p>
                        </a>
                      </li>
                    </Link>
                    <Link to={"/Proyectos/"}>
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-dice-d20 nav-icon" />
                          <p>Todos los proyectos</p>
                        </a>
                      </li>
                    </Link>
                  </ul>
                </li>
              }
              {(rol === "Personal publicaciones" || rol === "Personal biblioteca") &&
                <li className="nav-item menu-open">
                  <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                  </div>
                  <a href="#" className="nav-link ">
                    <i className="fas fa-bars nav-icon" />
                    <p>
                      Menu
                      <i className="right fas fa-angle-left" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <Link to="/ProyectosGradoFin">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-graduation-cap nav-icon"> </i>
                          <p>Trabajos de grado terminados</p>
                        </a>
                      </li>
                    </Link>
                    <Link to="/ProyectosGrado">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-graduation-cap nav-icon" />
                          <p>Trabajos de grado</p>
                        </a>
                      </li>
                    </Link>
                  </ul>
                </li>
              }
              {(rol === "Administrativo") &&
                <li className="nav-item menu-open">
                  <a href="#" className="nav-link ">
                    <i className="fas fa-bars nav-icon" />
                    <p>
                      Menu
                      <i className="right fas fa-angle-left " />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <Link to="/GruposInvestigacion">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-user-friends nav-icon"> </i>
                          <p>Grupos de investigaci??n</p>
                        </a>
                      </li>
                    </Link>
                    <Link to="/Semilleros">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-seedling nav-icon" />
                          <p>Semilleros</p>
                        </a>
                      </li>
                    </Link>
                    <Link to="/Facultades">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className=" fas fa-building nav-icon" />
                          <p>Facultades</p>
                        </a>
                      </li>
                    </Link>
                    <Link to="/Programas">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-feather-alt nav-icon" />
                          <p>Programas</p>
                        </a>
                      </li>
                    </Link>
                    <Link to="/Materias">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-book-reader nav-icon" />
                          <p>Materias</p>
                        </a>
                      </li>
                    </Link>
                    <Link to="/Clases">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-chalkboard nav-icon" />
                          <p>Clases</p>
                        </a>
                      </li>
                    </Link>
                    <Link to="/Lineas">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="  fas fa-globe nav-icon" />
                          <p>Lineas de investigaci??n</p>
                        </a>
                      </li>
                    </Link>
                    <Link to="/AreasConocimiento">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-brain nav-icon" />
                          <p>Areas de Conocimiento</p>
                        </a>
                      </li>
                    </Link>
                    <Link to="/Eventos">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-calendar-check nav-icon" />
                          <p>Eventos</p>
                        </a>
                      </li>
                    </Link>
                    <Link to="/Convocatorias">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-pencil-alt nav-icon" />
                          <p> Convocatorias</p>
                        </a>
                      </li>
                    </Link>
                    <Link to="/ConvocatoriasAbiertas">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-door-open nav-icon" />
                          <p> Convocatorias Abiertas</p>
                        </a>
                      </li>
                    </Link>
                    <Link to="/ConvocatoriasCerradas">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-door-closed nav-icon" />
                          <p> Convocatorias Cerradas</p>
                        </a>
                      </li>
                    </Link>
                    <Link to="/ModificarRol">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-user-cog nav-icon"> </i>
                          <p>Agregar rol a usuario</p>
                        </a>
                      </li>
                    </Link>
                  </ul>
                </li>
              }
              {(rol === 'Docente') &&
                <li className="nav-item menu-open">
                  <a href="#" className="nav-link ">
                    <i className="fas fa-bars nav-icon" />
                    <p>
                      Menu
                      <i className="right fas fa-angle-left" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <Link to="/TusClases">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-chalkboard-teacher nav-icon"> </i>
                          <p>Tus CLases</p>
                        </a>
                      </li>
                    </Link>
                    <Link to="/TrabajoGradoInicio">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-graduation-cap nav-icon" />
                          <p>Trabajos de grado</p>
                        </a>
                      </li>
                    </Link>
                  </ul>
                </li>
              }
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
      </aside>
    )
  }
}