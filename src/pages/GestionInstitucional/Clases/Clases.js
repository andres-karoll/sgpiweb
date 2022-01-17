import React, { Component, useState } from 'react';
import axios from 'axios';

import { Link,NavLink } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
import ActualizarClase from './ActualizarClase';
export default class Clases extends Component {

  state = {
    clases: []
    , status: false
  }

  cargarClases = () => {
    var url = "http://localhost:8080";
    var request = "/gestioninstitucional/listarclases";
    
    axios.get(url + request).then(res => {
      
      this.setState({
        
        clases: res.data
        , status: true
      });
      
    });
  }
  

  componentDidMount = () => {
    this.cargarClases();
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
                  <h1><i class="fas fa-chalkboard nav-icon"></i>Clases</h1>
                  </div>
                  </section>
      </div>
      <NavLink className="btn btn-info" style={{width: "100%"}} to={"/InsertarClase"} >Insertar</NavLink>
      {this.state.status === true &&
        (
          this.state.clases.map((cla) => {
           
            return (
              <section className="content">
                {/* Default box */}
                <div className="card">
                    
                  <div className="card-header">
                    <h3 className="card-title">Nombre: {cla.nombre}</h3>
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
                            Numero
                          </th>
                          <th style={{ width: '15%' }}>
                            Nombre
                          </th>
                          <th style={{ width: '15%' }}>
                            Semestre
                          </th>
                          <th style={{ width: '15%' }}>
                            Materia
                          </th>
                          <th style={{ width: '15%' }}>
                            Profesor
                          </th>                                    
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                             {cla.numero}
                          </td>
                          <td>
                            <a>
                            {cla.nombre}
                            </a>
                          </td>
                          <td>
                            <a>
                            {cla.semestre}
                            </a>
                          </td>
                          <td>
                            <a>
                            {cla.materia}
                            </a>
                          </td>
                          <td>
                            <a>
                            {cla.profesor}
                            </a>
                          </td>
                          <td className="project-actions text-right" style={{width: '30%'}}>
                          {/* <NavLink to={"/DetallesGruposInvestigacion/" + proye.id} className="btn btn-primary">Detalles</NavLink> */}
                          <NavLink style={{width: '50%'}} className="btn btn-success"  to={"/ActulizarClase/" + cla.numero} >Modificar</NavLink>
                          
                          <NavLink style={{width: '50%'}} className="btn btn-danger"  to={"/EliminarClase/" + cla.numero} >Eliminar</NavLink>  
                                                  
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

            <Link to={"/ProyectosClase/" + cla.numero}>
            <li className="nav-item">
              <a  className="nav-link">
                <i className="fas fa-eye nav-icon" />
                
                <p>Ver proyectos de la clase</p>
                 
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