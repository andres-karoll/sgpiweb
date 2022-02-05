import React, { Component, useState } from 'react';
import axios from 'axios';

import { Link,NavLink } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';

export default class UsuariosPrograma extends Component {

  state = {
    usuarios: []
    , status: false
  }

  cargarUsuarios = () => {
    var programa = localStorage.getItem("programa");
    var url = "http://localhost:8080";
    var request = "/gestioninstitucional/listarusuariosporprograma/" + programa;
    
    axios.get(url + request).then(res => {
      
      this.setState({
        
        usuarios: res.data
        , status: true
      });
      
    });
  }
  

  componentDidMount = () => {
    this.cargarUsuarios();
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
                  <h1><i class="fas fa-book-reader nav-icon"></i>Usuarios de este programa</h1>
                  </div>
                  </section>
      </div>
      
      {this.state.status === true &&
        (
          this.state.usuarios.map((usu) => {
           
            return (
              <section className="content">
                {/* Default box */}
                <div className="card">
                    
                  <div className="card-header">
                    <h3 className="card-title">Nombre de Usuario: {usu.nombres} {usu.apellidos}</h3>
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
                            Cedula
                          </th>
                          <th style={{ width: '15%' }}>
                            Codigo estudiantil
                          </th>
                          <th style={{ width: '15%' }}>
                            Correo personal
                          </th>
                          <th style={{ width: '15%' }}>
                            Correo Estudiantil
                          </th>
                          <th style={{ width: '15%' }}>
                            Telefono
                          </th>   
                          <th style={{ width: '15%' }}>
                            Rol
                          </th>                                 
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                             {usu.cedula}
                          </td>
                          <td>
                            <a>
                            {usu.cod_Universitario}
                            </a>
                          </td>
                          <td>
                            <a>
                            {usu.correo_personal}
                            </a>
                          </td>
                          <td>
                            <a>
                            {usu.correo_est}
                            </a>
                          </td>
                          <td>
                            <a>
                            {usu.telefono}
                            </a>
                          </td>
                          <td>
                            <a>
                            {usu.rol}
                            </a>
                          </td>
                          <td className="project-actions text-right" style={{width: '30%'}}>
                          {/* <NavLink to={"/DetallesGruposInvestigacion/" + proye.id} className="btn btn-primary">Detalles</NavLink> */}                          
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