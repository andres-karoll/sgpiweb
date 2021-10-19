import React, { Component } from 'react'

import { Link } from 'react-router-dom'
export default class Aside extends Component{
  render() {
    var rol=localStorage.getItem("tipo");
    return (
      <aside className="main-sidebar sidebar-dark-primary elevation-4" style={{ position: 'fixed' }}>

  <div className="sidebar">
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
    <a href="/Perfil" className="brand-link">
    <span className="brand-text font-weight-light">USUARIO DE PRUEBA</span>
  </a>
    </div>
    

    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
        {localStorage.getItem("tipo")==="profesor" &&
        
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
        </li>}
        <li className="nav-item menu-open">
          <a href="#" className="nav-link ">
            <i className="fas fa-user-tie nav-icon" />        
            <p>
              Gestion institucional
              <i className="right fas fa-angle-left" />
            </p>
                      
          </a>
          <ul className="nav nav-treeview">
          <Link to="/GruposInvestigacion">
            <li className="nav-item">
              <a  className="nav-link">
              <i className="fas fa-user-friends nav-icon"> </i>
              
                <p>Grupos de investigacion</p>
                 
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

          </ul>
        </li>
        <li className="nav-item menu-open">
          <a href="#" className="nav-link ">
            <i className="fas fa-newspaper nav-icon" />        
            <p>
              Gestion proyectos aula o integrador
              <i className="right fas fa-angle-left" />
            </p>       
          </a>
          <ul className="nav nav-treeview">
          <Link to="/ProyectosAulaIntegrador">
            <li className="nav-item">
              <a  className="nav-link">
              <i className="fas fa-graduation-cap nav-icon"> </i>
                <p>Tus Proyectos de aula o integrador</p>
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
       
      </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>
    )
}
}