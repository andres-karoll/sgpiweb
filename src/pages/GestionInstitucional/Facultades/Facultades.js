import React, { Component } from 'react';
import axios from 'axios';

import { NavLink } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
export default class Facultades extends Component {

  state = {
    facultades: []
    , status: false
  }

  cargarFacultades = () => {
    var url = "http://localhost:8080";
    var request = "/gestioninstitucional/listarfacultades";
    axios.get(url + request).then(res => {
      this.setState({
        facultades: res.data
        , status: true
      });
    });
  }

  componentDidMount = () => {
    this.cargarFacultades();
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
                  <h1><i class="fas fa-building nav-icon"></i>Facultades</h1>
                  </div>
                  </section>
      </div>
      <NavLink className="btn btn-info" style={{width: "100%"}} to={"/InsertarFacultad"} >Insertar</NavLink>
      {this.state.status === true &&
        (
          this.state.facultades.map((facul, i) => {
           
            return (
              <section className="content">
                {/* Default box */}
                <div className="card">
                    
                  <div className="card-header">
                    <h3 className="card-title">Facultad: {facul.nombre}</h3>
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
                            Decano
                          </th>               
                          
                          <th style={{width: '15%'}}>
                          Coordinador invitado
                          </th>                       
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            # {facul.id}
                          </td>
                          <td>
                            <a>
                            {facul.nombre}
                            </a>
                          </td>
                          <td>
                            <a>
                            {facul.decano}
                            </a>
                          </td>
                          
                          <td className="project_progress">
                            <small>
                            {facul.coor_inv}
                            </small>
                          </td>
                          <td className="project-actions text-right" style={{width: '30%'}}>
                          {/* <NavLink to={"/DetallesGruposInvestigacion/" + proye.id} className="btn btn-primary">Detalles</NavLink> */}
                          <NavLink className="btn btn-info" to={"/ActulizarFacultad/" + facul.id} >Modificar</NavLink>
                          <NavLink className="btn btn-danger"  to={"/EliminarFacultad/" + facul.id} >Eliminar</NavLink>  
                                                  
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