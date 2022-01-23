import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
export default class Aside extends Component {

  state = {
    status: false,
    nombre:[],
    nom:[]
}
  CargarNombre = () => {
    var request = "/gestionusuario/buscarusuario/"+localStorage.getItem("cedula");
    console.log(localStorage.getItem("cedula"));  
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
    return (
      <aside className="main-sidebar sidebar-dark-primary elevation-3" style={{ position: 'fixed' }}>
        <div className="sidebar" style={{ position: 'fixed', overflowY: 'scroll', scrollbarWidth: 'thin', width: '250px' }}>
          {/* Sidebar user panel (optional) */}

          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img src="https://i.ibb.co/X201Qwc/LOGO.png" className="img-circle elevation-2" alt="User Image" />
            </div>
            <div className="info">
              <a href="#" className="d-block">SGPI</a>
            </div>
          </div>
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">

            <a href={"/Perfil/"+  localStorage.getItem("cedula")} className="brand-link">
             
                    <span className="brand-text font-weight-light"  >{this.state.nombre.nombres} </span>
               

            </a>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
              {(rol==="Estudiante activo" ) &&
              <li className="nav-item menu-open">
              <a href="#" className="nav-link ">
                <i className="fas fa-newspaper nav-icon" />
                <p>
                  Tus Proyectos
                  <i className="right fas fa-angle-left" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <Link to="/ProyectosAulaIntegrador">
                  <li className="nav-item">
                    <a className="nav-link">
                      <i className="fas fa-graduation-cap nav-icon"> </i>
                      <p>Proyectos de clase</p>
                    </a>
                  </li>
                </Link>

              </ul>
             
              <ul className="nav nav-treeview">
                <Link to="/TrabajoGrado/">
                  <li className="nav-item">
                    <a className="nav-link">
                      <i className="fas fa-graduation-cap nav-icon"> </i>
                      <p>Proyecto de grado</p>
                    </a>
                  </li>
                </Link>
              </ul>
              <ul className="nav nav-treeview">
                <Link to="/ProyectosAulaIntegrador">
                  <li className="nav-item">
                    <a className="nav-link">
                      <i className="fas fa-graduation-cap nav-icon"> </i>
                      <p>Proyectos libres</p>
                    </a>
                  </li>
                </Link>
              </ul>
              <a href="#" className="nav-link ">
                <i className="fas fa-newspaper nav-icon" />
                <p>
                  Semillero
                  <i className="right fas fa-angle-left" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <Link to="/ProyectoSemillero">
                  <li className="nav-item">
                    <a className="nav-link">
                      <i className="fas fa-graduation-cap nav-icon"> </i>
                      <p>ingresa a un semillero</p>
                    </a>
                  </li>
                </Link>
              </ul>
            </li>
            
              }
              { (rol ==="Biblioteca" || rol ==="Admin") &&
                <li className="nav-item menu-open">
                  <a href="#" className="nav-link ">
                    <i className="fas fa-newspaper nav-icon" />
                    <p>
                      Biblioteca
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
              {(rol ==="Administrativo"||rol === "Admin" )&&
                <li className="nav-item menu-open">
                  <a href="#" className="nav-link ">
                    <i className="fas fa-user-tie nav-icon" />
                    <p>
                      Gestion institucional
                      <i className="right fas fa-angle-left " />
                    </p>

                  </a>
                  <ul className="nav nav-treeview">
                    <Link to="/GruposInvestigacion">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-user-friends nav-icon"> </i>
                          <p>Grupos de investigación</p>

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

                          <p>Lineas de investigación</p>

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

                          <p> CRUD de Convocatorias</p>

                        </a>
                      </li>
                    </Link>

                  </ul>
                </li>
              }
              { (rol ==="Profesional de investigacion"||rol ==="Admin") &&
                <li className="nav-item menu-open">
                  <a href="#" className="nav-link ">
                    <i className="fas fa-book-open nav-icon" />
                    <p>
                      Gestion Financiera
                      <i className="right fas fa-angle-left" />
                    </p>

                  </a>
                  <ul className="nav nav-treeview">
                    <Link to="/Proyectos">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className=" fas fa-cubes nav-icon"> </i>

                          <p>Todos los proyectos en SGPI</p>

                        </a>
                      </li>
                    </Link>

                  </ul>
                </li>

              }

              {(rol==='Estudiante activo'||rol==='Docentes'||rol==='Egresado'||rol==='Estudiante inactivo')&&

                <li className="nav-item menu-open">
                  <a href="#" className="nav-link ">
                    <i className="fas fa-newspaper nav-icon" />
                    <p>
                      Tus Proyectos
                      <i className="right fas fa-angle-left" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <Link to="/ProyectosAulaIntegrador">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-graduation-cap nav-icon"> </i>
                          <p>Proyectos de clase</p>
                        </a>
                      </li>
                    </Link>

                  </ul>
                  <ul className="nav nav-treeview">
                    <Link to="/ProyectoSemillero">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-graduation-cap nav-icon"> </i>
                          <p>ingresa a un semillero</p>
                        </a>
                      </li>
                    </Link>

                  </ul>
                  <ul className="nav nav-treeview">
                    <Link to="/TrabajoGrado/">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-graduation-cap nav-icon"> </i>
                          <p>Proyecto de grado</p>
                        </a>
                      </li>
                    </Link>
                  </ul>
                  <ul className="nav nav-treeview">
                    <Link to="/ProyectosAulaIntegrador">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-graduation-cap nav-icon"> </i>
                          <p>Proyectos libres</p>
                        </a>
                      </li>
                    </Link>
                  </ul>
                </li>
              }
              {(rol==='Docentes')&&
                <li className="nav-item menu-open">
                  <a href="#" className="nav-link ">
                    <i className="fas fa-newspaper nav-icon" />
                    <p>
                      Tus Proyectos
                      <i className="right fas fa-angle-left" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <Link to="/TusClases">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-graduation-cap nav-icon"> </i>
                          <p>Tus CLases</p>
                        </a>
                      </li>
                    </Link>

                  </ul>
                  <ul className="nav nav-treeview">
                    <Link to="/ProyectoSemillero">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-graduation-cap nav-icon"> </i>
                          <p>ingresa a un semillero</p>
                        </a>
                      </li>
                    </Link>

                  </ul>
                  <ul className="nav nav-treeview">
                    <Link to="/TrabajoGrado/">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-graduation-cap nav-icon"> </i>
                          <p>Proyecto de grado</p>
                        </a>
                      </li>
                    </Link>
                  </ul>
                  <ul className="nav nav-treeview">
                    <Link to="/ProyectosAulaIntegrador">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fas fa-graduation-cap nav-icon"> </i>
                          <p>Proyectos libres</p>
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

        {/* /.sidebar */}
      </aside>

    )
  }
}