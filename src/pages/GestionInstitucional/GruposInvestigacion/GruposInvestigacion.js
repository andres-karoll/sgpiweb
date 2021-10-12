import React, { Component } from 'react';
import axios from 'axios';

import { NavLink } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
export default class GruposInvestigacion extends Component {

  state = {
    gruposi: []
    , status: false
  }

  cargarGruposI = () => {
    var url = "http://localhost:8080";
    var request = "/gestioninstitucional/listargruposi";
    axios.get(url + request).then(res => {
      this.setState({
        gruposi: res.data
        , status: true
      });
    });
  }

  componentDidMount = () => {
    this.cargarGruposI();
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
                  <h1><i class="fas fa-user-friends nav-icon"></i>Grupos de investigación</h1>
                  </div>
                  </section>
      </div>
      <NavLink className="btn btn-info" style={{width: "100%"}} to={"/InsertarGruposInvestigacion"} >Insertar</NavLink>
      {this.state.status === true &&
        (
          this.state.gruposi.map((grup, i) => {
           
            return (
              <section className="content">
                {/* Default box */}
                <div className="card">
                    
                  <div className="card-header">
                    <h3 className="card-title">Grupo de Investigacion: {grup.nombre}</h3>
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
                            Nombre de grupo
                          </th>               
                          <th style={{width: '15%'}}>
                            Categoria
                          </th>
                          <th style={{width: '15%'}}>
                          fecha_cat
                          </th>
                          <th style={{width: '15%'}}>
                          fecha_fun
                          </th>
                          <th style={{ width: '15%' }} className="text-center">
                            Director de Grupo
                          </th>
                          
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            # {grup.id}
                          </td>
                          <td>
                            <a>
                            {grup.nombre}
                            </a>
                            <br />
                            <small>
                            {grup.categoria}
                            </small>
                          </td>
                          
                          <td className="project_progress">
                            <small>
                            {grup.categoria}
                            </small>
                          </td>
                          <td className="project_progress">
                            <small>
                            {grup.fecha_cat}
                            </small>
                          </td>
                          <td className="project_progress">
                            <small>
                            {grup.fecha_fun}
                            </small>
                          </td>
                          <td className="project-state">
                            {grup.director_grupo}
                          </td>
                          <td className="project-actions text-right" style={{width: '30%'}}>
                          {/* <NavLink to={"/DetallesGruposInvestigacion/" + proye.id} className="btn btn-primary">Detalles</NavLink> */}
                          <NavLink className="btn btn-info" to={"/ActulizarGruposInvestigacion/" + grup.id} >Modificar</NavLink>
                          <NavLink className="btn btn-danger"  to={"/EliminarGruposInvestigacion/" + grup.id} >Eliminar</NavLink>  
                                                  
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