import React, { Component } from 'react';
import axios from 'axios';

import { NavLink } from 'react-router-dom';
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
                          
                          <th style={{width: '15%'}}>
                          fecha_fun
                          </th>
                          <th style={{width: '15%'}}>
                         Grupo de investigacion
                          </th> 
                          <th style={{width: '15%'}}>
                         Linea de investigacion
                          </th>
                          <th style={{width: '15%'}}>
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
                            <a>
                            {semi.nombre}
                            </a>
                          </td>
                          <td>
                            <a>
                            {semi.descripcion}
                            </a>
                          </td>
                          
                          <td className="project_progress">
                            <small>
                            {semi.fecha_fun}
                            </small>
                          </td>
                          <td className="project_progress">
                            <small>
                            {semi.grupo_investigacion}
                            </small>
                          </td>
                          <td className="project_progress">
                            <small>
                            {semi.linea_investigacion}
                            </small>
                          </td>
                          <td className="project_progress">
                            <small>
                            {semi.lider_semillero}
                            </small>
                          </td>
                          <td className="project-actions text-right" style={{width: '30%'}}>
                          {/* <NavLink to={"/DetallesGruposInvestigacion/" + proye.id} className="btn btn-primary">Detalles</NavLink> */}
                          <NavLink className="btn btn-info" to={"/ActulizarSemillero/" + semi.id} >Modificar</NavLink>
                          <NavLink className="btn btn-danger"  to={"/EliminarSemillero/" + semi.id} >Eliminar</NavLink>  
                                                  
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    
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