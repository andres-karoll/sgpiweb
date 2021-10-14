import React from 'react'

import {Link} from 'react-router-dom'

export default function Aside() {
    return (
<aside className="main-sidebar sidebar-dark-primary elevation-3" style={{ position: 'fixed' , width: '23%'}}>

  <div className="sidebar" style={{ position: 'fixed' , width: '23%' , top: '5%'}}>
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
                <p>Todos los Grupos de investigación</p>
                
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

            <Link to="/ConvocatoriasAbiertas">
            <li className="nav-item">
              <a  className="nav-link">
                <i className="fas fa-pencil-alt nav-icon" />
                
                <p>Convocatorias abiertas</p>
                 
              </a>
            </li>
            </Link>

          </ul>
        </li>

       
      </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>

  {/* /.sidebar */}
</aside>
    )
}
