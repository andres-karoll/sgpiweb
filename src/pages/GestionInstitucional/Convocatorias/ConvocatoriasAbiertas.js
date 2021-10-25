import React, { Component } from 'react';
import axios from 'axios';

import { NavLink, Link } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
export default class ConvocatoriasAbiertas extends Component {

  state = {
    convocatorias: []
    , status: false
  }

  cargarConvocatorias = () => {
    var url = "http://localhost:8080";
    var request = "/gestioninstitucional/convocatoriasestado/abierto";
    axios.get(url + request).then(res => {
      this.setState({
        convocatorias: res.data
        , status: true
      });
    });
  }

  componentDidMount = () => {
    this.cargarConvocatorias();
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
                  <h1><i class="fas fa-door-open nav-icon"></i>Convocatorias Abiertas</h1>
                  </div>
                  </section>
      </div>
      <NavLink className="btn btn-info" style={{width: "100%"}} to={"/CrearConvocatoria"} >Crear Convocatoria</NavLink>
      {this.state.status === true &&
        (
          this.state.convocatorias.map((con, i) => {
           
            return (
              <section className="content">
                {/* Default box */}
                <div className="card">
                    
                  <div className="card-header">
                    <h3 className="card-title">Convocatoria: {con.nombre_convocatoria}</h3>
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
                          <th style={{ width: '20%' }}>
                            Nombre de convocatoria
                          </th>
                          <th style={{ width: '10%' }}>
                            Fecha Inicio
                          </th> 
                          <th style={{ width: '10%' }}>
                            Fecha Final
                          </th> 
                          <th style={{ width: '20%' }}>
                            Contexto
                          </th>               
                          
                          <th style={{width: '20%'}}>
                          Entidad
                          </th> 
                          <th style={{width: '15%'}}>
                          Estado
                          </th>                       
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            # {con.id}
                          </td>
                          <td>
                            <a>
                            {con.nombre_convocatoria}
                            </a>
                          </td>
                          <td>
                            <a>
                            {con.fecha_inicio}
                            </a>
                          </td>
                          <td>
                            <a>
                            {con.fecha_final}
                            </a>
                          </td>
                          <td>
                            <a>
                            {con.contexto}
                            </a>
                          </td>
                          
                          <td className="project_progress">
                            <a>
                            {con.entidad}
                            </a>
                          </td>
                          <td className="project_progress">
                            <a>
                            {con.estado}
                            </a>
                          </td>
                          <td className="project-actions text-right" style={{width: '5%'}}>
                            {/** 
                          <NavLink to={"/DetallesConvocatoriaAbierta/" + con.id} className="btn btn-primary">Detalles</NavLink> 
                          <NavLink className="btn btn-info" to={"/ActualizarConvocatoria/" + con.id} >Modificar</NavLink>
                          <NavLink className="btn btn-danger"  to={"/EliminarConvocatoria/" + con.id} >Eliminar</NavLink>  */}
                          {/*<NavLink className="btn btn-info" to={"/ActulizarFacultad/" + facul.id} >Modificar</NavLink>*/}
                          {/*<NavLink className="btn btn-danger"  to={"/EliminarFacultad/" + facul.id} >Eliminar</NavLink>  */}
                                                  
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

            <Link to={"/ProyectosConvocatoria/" + con.id}>
            <li className="nav-item">
              <a  className="nav-link">
                <i className="fas fa-eye nav-icon" />
                
                <p>Ver proyectos de la Convocatoria</p>
                 
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