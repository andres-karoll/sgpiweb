import React, { Component } from 'react';
import axios from 'axios';

import { NavLink } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
export default class Programas extends Component {

  state = {
    programas: []
    , status: false
  }

  cargarProgramas = () => {
    var url = "http://localhost:8080";
    var request = "/gestioninstitucional/listarprogramas";
    axios.get(url + request).then(res => {
      this.setState({
        programas: res.data
        , status: true
      });
    });
  }

  componentDidMount = () => {
    this.cargarProgramas();
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
                  <h1><i class="fas fa-feather-alt nav-icon"></i>Programas</h1>
                  </div>
                  </section>
      </div>
      <NavLink className="btn btn-info" style={{width: "100%"}} to={"/InsertarPrograma"} >Insertar</NavLink>
      {this.state.status === true &&
        (
          this.state.programas.map((pro, i) => {
           
            return (
              <section className="content">
                {/* Default box */}
                <div className="card">
                    
                  <div className="card-header">
                    <h3 className="card-title">Programa: {pro.nombre}</h3>
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
                            Facultad
                          </th>               
                          
                          <th style={{width: '15%'}}>
                          Director
                          </th>                       
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            # {pro.id}
                          </td>
                          <td>
                            <a>
                            {pro.nombre}
                            </a>
                          </td>
                          <td>
                            <a>
                            {pro.facultad}
                            </a>
                          </td>
                          
                          <td className="project_progress">
                            <small>
                            {pro.director}
                            </small>
                          </td>
                          <td className="project-actions text-right" style={{width: '30%'}}>
                          {/* <NavLink to={"/DetallesGruposInvestigacion/" + proye.id} className="btn btn-primary">Detalles</NavLink> */}
                          <NavLink className="btn btn-info" to={"/ActulizarPrograma/" + pro.id} >Modificar</NavLink>
                          <NavLink className="btn btn-danger"  to={"/EliminarPrograma/" + pro.id} >Eliminar</NavLink>  
                                                  
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