import React, { Component } from 'react';
import axios from 'axios';

import { NavLink } from 'react-router-dom';
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
                  <h1><i class="fas fa-pencil-alt nav-icon"></i>Convocatorias Abiertas</h1>
                  </div>
                  </section>
      </div>
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
                          <th style={{ width: '30%' }}>
                            Nombre de convocatoria
                          </th>
                          <th style={{ width: '20%' }}>
                            Fecha Inicio
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
                          <td className="project-actions text-right" style={{width: '30%'}}>
                          <NavLink to={"/DetallesConvocatoriaAbierta/" + con.id} className="btn btn-primary">Detalles</NavLink> 
                          {/*<NavLink className="btn btn-info" to={"/ActulizarFacultad/" + facul.id} >Modificar</NavLink>*/}
                          {/*<NavLink className="btn btn-danger"  to={"/EliminarFacultad/" + facul.id} >Eliminar</NavLink>  */}
                                                  
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