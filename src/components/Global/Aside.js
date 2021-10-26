import React, { Component } from 'react'

import { Link } from 'react-router-dom'
export default class Aside extends Component{
  render() {
    var rol=localStorage.getItem("tipo");
    return (

      <aside className="main-sidebar sidebar-dark-primary elevation-3" style={{ position: 'fixed'  }}>


  <div className="sidebar" style={{ position: 'fixed', overflowY:'scroll', scrollbarWidth:'thin', width:'250px'}}>
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
    <a href="index3.html" className="brand-link">
    <span className="brand-text font-weight-light">USUARIO DE PRUEBA</span>
  </a>
    </div>
    

    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
          {rol==="Biblioteca" , rol === "Admin" &&
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
              <a  className="nav-link">
              <i className="fas fa-graduation-cap nav-icon"> </i>
              
                <p>Trabajos de grado terminados</p>
                 
              </a>
            </li>
            </Link>
            <Link to="/ProyectosGrado">
            <li className="nav-item">
              <a  className="nav-link">
                <i className="fas fa-graduation-cap nav-icon" />
                
                <p>Trabajos de grado</p>
                 
              </a>
            </li>
            </Link>
          </ul>
        </li>
        }
        {rol==="Administrativo", rol === "Admin" &&
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
              <a  className="nav-link">
              <i className="fas fa-user-friends nav-icon"> </i>
                <p>Grupos de investigación</p>
                
              </a>
            </li>
            </Link>
            <Link to="/Semilleros">
            <li className="nav-item">
              <a  className="nav-link">
                <i className="fas fa-seedling nav-icon" />
                
                <p>Semilleros</p>
                 
              </a>
            </li>
            </Link>
            <Link to="/Facultades">
            <li className="nav-item">
              <a  className="nav-link">
                <i className=" fas fa-building nav-icon" />
                
                <p>Facultades</p>
                 
              </a>
            </li>
            </Link>

            <Link to="/Programas">
            <li className="nav-item">
              <a  className="nav-link">
                <i className="fas fa-feather-alt nav-icon" />
                
                <p>Programas</p>
                 
              </a>
            </li>
            </Link>

            <Link to="/Materias">
            <li className="nav-item">
              <a  className="nav-link">
                <i className="fas fa-book-reader nav-icon" />
                
                <p>Materias</p>
                 
              </a>
            </li>
            </Link>

            <Link to="/Clases">
            <li className="nav-item">
              <a  className="nav-link">
                <i className="fas fa-chalkboard nav-icon" />
                
                <p>Clases</p>
                 
              </a>
            </li>
            </Link>
            <Link to="/Lineas">
            <li className="nav-item">
              <a  className="nav-link">
                <i className="  fas fa-globe nav-icon" />
                
                <p>Lineas de investigación</p>
                 
              </a>
            </li>
            </Link>
            <Link to="/AreasConocimiento">
            <li className="nav-item">
              <a  className="nav-link">
                <i className="fas fa-brain nav-icon" />
                
                <p>Areas de Conocimiento</p>
                 
              </a>
            </li>
            </Link>
            <Link to="/Eventos">
            <li className="nav-item">
              <a  className="nav-link">
                <i className="fas fa-calendar-check nav-icon" />
                
                <p>Eventos</p>
                 
              </a>
            </li>
            </Link>

            <Link to="/Convocatorias">
            <li className="nav-item">
              <a  className="nav-link">
                <i className="fas fa-pencil-alt nav-icon" />
                
                <p> CRUD de Convocatorias</p>
                 
              </a>
            </li>
            </Link>

          </ul>
        </li>
        }
        {rol==="Profesional de investigacion" , rol==="Admin" &&
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
              <a  className="nav-link">
              <i className=" fas fa-cubes nav-icon"> </i>
              
                <p>Todos los proyectos en SGPI</p>
                 
              </a>
            </li>
            </Link>

          </ul>
        </li>

        }
        {rol==="Estudiante",rol==="Profesor",rol==="Admin" &&
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
               <a  className="nav-link">
               <i className="fas fa-graduation-cap nav-icon"> </i>
                 <p>Proyectos de clase</p>
               </a>
             </li>
             </Link>
             
           </ul>
           <ul className="nav nav-treeview">
           <Link to="/ProyectoSemillero">
             <li className="nav-item">
               <a  className="nav-link">
               <i className="fas fa-graduation-cap nav-icon"> </i>
                 <p>Proyectos de semillero</p>
               </a>
             </li>
             </Link>
             
           </ul>
           <ul className="nav nav-treeview">
           <Link to="/ProyectosGrado/">
             <li className="nav-item">
               <a  className="nav-link">
               <i className="fas fa-graduation-cap nav-icon"> </i>
                 <p>Proyecto de grado</p>
               </a>
             </li>
             </Link>
           </ul>
           <ul className="nav nav-treeview">
           <Link to="/ProyectosAulaIntegrador">
             <li className="nav-item">
               <a  className="nav-link">
               <i className="fas fa-graduation-cap nav-icon"> </i>
                 <p>Proyectos libres</p>
               </a>
             </li>
             </Link>
           </ul>
         </li>
         
        }
        {rol==="Estudiante",rol==="Profesor",rol==="Admin" &&
        <li className="nav-item menu-open">
          <a href="#" className="nav-link ">
            <i className="fas fa-pencil-alt nav-icon" />
            <p>
              Gestion financiera
              <i className="right fas fa-angle-left" />
            </p>
          </a>
          <ul className="nav nav-treeview">
          <Link to="/ConvocatoriasAbiertas">
            <li className="nav-item">
              <a  className="nav-link">
              <i className="fas fa-door-open nav-icon"> </i>
                <p>Convocatorias Abiertas</p>
              </a>
            </li>
            </Link>
          </ul>
          <ul className="nav nav-treeview">
          <Link to="/ConvocatoriasCerradas">
            <li className="nav-item">
              <a  className="nav-link">
              <i className="fas fa-door-closed nav-icon"> </i>
                <p>Convocatorias Cerradas</p>
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