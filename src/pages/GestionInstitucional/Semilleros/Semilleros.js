import React, { Component } from 'react';
import axios from 'axios';

import { Link, NavLink } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
export default class Semilleros extends Component {

  state = {
    semilleros: []
    , status: false
  }

  cargarSemilleros = () => {
    var url = "http://localhost:8080";
    var request = "/gestioninstitucional/listarsemilleros";
    axios.get(url + request).then(res => {
      this.setState({
        semilleros: res.data
        , status: true
      });
    });
  }

  componentDidMount = () => {
    this.cargarSemilleros();
  }

  render() {
    return (

    <div>
      <Aside/>
      <Header/>
      <div className="content-wrapper">
      <div>
            <section className="content">
                <br />
                <div class="alert alert-info alert-dismissible">
                  <h1><i class="fas fa-seedling nav-icon"></i>Semilleros</h1>
                  </div>
                  </section>
      </div>
      <NavLink className="btn btn-info" style={{width: "100%"}} to={"/InsertarSemillero"} >Insertar</NavLink>
      {this.state.status === true &&
        (
          this.state.semilleros.map((semi, i) => {
           
            return (
              <section className="content">
                {/* Default box */}
                <div className="card">
                    
                  <div className="card-header">
                    <h3 className="card-title">Semillero: {semi.nombre}</h3>
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
                            # ID
                          </th>
                          <th style={{ width: '15%' }}>
                            Nombre
                          </th>
                          <th style={{ width: '15%' }}>
                            Descripción
                          </th>               
                          
                          <th style={{width: '10%'}}>
                          fecha_fun
                          </th>
                          <th style={{width: '15%'}}>
                         Grupo de investigacion
                          </th> 
                          <th style={{width: '15%'}}>
                         Linea de investigacion
                          </th>
                          <th style={{width: '10%'}}>
                         Lider
                          </th>                       
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            # {semi.id}
                          </td>
                          <td>
                            
                            {semi.nombre}
                            
                          </td>
                          <td>
                            
                            {semi.descripcion}
                            
                          </td>
                          
                          <td className="project_progress">
                            
                            {semi.fecha_fun}
                            
                          </td>
                          <td className="project_progress">
                            
                            {semi.grupo_investigacion}
                           
                          </td>
                          <td className="project_progress">
                           
                            {semi.linea_investigacion}
                            
                          </td>
                          <td className="project_progress">
                            
                            {semi.lider_semillero}
                         
                          </td>
                          <td className="project-actions text-right" style={{width: '30%'}}>
                          {/* <NavLink to={"/DetallesGruposInvestigacion/" + proye.id} className="btn btn-primary">Detalles</NavLink> */}
                          <NavLink style={{width: '50%'}} className="btn btn-success" to={"/ActulizarSemillero/" + semi.id} >Modificar</NavLink>
                          <NavLink style={{width: '50%'}} className="btn btn-danger"  to={"/EliminarSemillero/" + semi.id} >Eliminar</NavLink>  
                                                  
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
          <Link to={"/AsignarProgramaSemillero/" + semi.id}>
            <li className="nav-item">
              <a  className="nav-link">
              <i className="fas fa-book nav-icon"> </i>
              
                <p>Asignar Semillero a un Programa</p>
                 
              </a>
            </li>
            </Link>
            <Link to={"/DesAsignarProgramaSemillero/" + semi.id}>
            <li className="nav-item">
              <a  className="nav-link">
                <i className="fas fa-skull-crossbones nav-icon" />
                
                <p>Desasignar Semillero a un programa</p>
                 
              </a>
            </li>
            </Link>
            <Link to={"/AsignarUsuario/" + semi.id}>
            <li className="nav-item">
              <a  className="nav-link">
              <i className="fas fa-user-plus nav-icon"> </i>
              
                <p>Asignar usuario al semillero</p>
                 
              </a>
            </li>
            </Link>
            <Link to={"/DesAsignarUsuario/"}>
            <li className="nav-item">
              <a  className="nav-link">
                <i className="fas fa-skull-crossbones nav-icon" />
                
                <p>Desasignar usuario del semillero</p>
                 
              </a>
            </li>
            </Link>          
            <Link to={"/ProgramaSemillero/" + semi.id}>
            <li className="nav-item">
              <a  className="nav-link">
                <i className="fas fa-eye nav-icon" />
                
                <p>Ver programas del semillero</p>
                 
              </a>
            </li>
            </Link>
            <Link to={"/UsuariosSemillero/" + semi.id}>
            <li className="nav-item">
              <a  className="nav-link">
                <i className="fas fa-eye nav-icon" />
                
                <p>Ver usuarios del semillero</p>
                 
              </a>
            </li>
            </Link>
            <Link to={"/ProyectosSemillero/" + semi.id}>
            <li className="nav-item">
              <a  className="nav-link">
                <i className="fas fa-eye nav-icon" />
                
                <p>Ver proyectos del semillero</p>
                 
              </a>
            </li>
            </Link>
            
            
          </ul>
        </li>

                    </ul>


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