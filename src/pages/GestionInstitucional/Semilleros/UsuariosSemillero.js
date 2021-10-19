import React, { Component } from 'react';
import axios from 'axios';

import { NavLink } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
export default class UsuariosSemillero extends Component {

  state = {
status: false,
    usuarios:[]
  }

  cargarUsuarios= () => {
    var url = "http://localhost:8080";
    var request = "/gestioninstitucional/listarusuariosdelsemillero/" +this.props.id;
    axios.get(url + request).then(res => {
      this.setState({
        usuarios: res.data
        , status: true
      });
    });
    
  }

  componentDidMount = () => {
    this.cargarUsuarios();
    //this.cargarLineas();

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
                  <h1><i class="fas fa-eye nav-icon"></i>Usuarios de semillero con id: {this.props.id}</h1>
                  </div>
                  </section>
      </div>
      {this.state.status === true &&
        (
          this.state.usuarios.map((usu, i) => {
           
            return (

              <section className="content">
                {/* Default box */}
                <div className="card">
                
                  <div className="card-header">
                    <h3 className="card-title">usuario asociado al Semillero con id: {this.props.id}</h3>
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
                        
                          <th style={{ width: '20%' }}>
                            cedula
                          </th>
                          <th style={{ width: '20%' }}>
                            nombres
                          </th>               
                          <th style={{ width: '20%' }}>
                            apellidos
                          </th>
                          <th style={{ width: '20%' }}>
                          codigo Universitario
                          </th> 
                          <th style={{ width: '20%' }}>
                          correo personal
                          </th> 
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                       
                          <td>
                            {usu.cedula}
                          </td>
                          <td>
                          {usu.nombres}
                          </td>
                          <td>
                          {usu.apellidos}
                          </td>
                          <td>
                          {usu.cod_Universitario}
                          </td>
                          <td>
                          {usu.correo_personal}
                          </td>
                          <td className="project-actions text-right" style={{width: '40%'}}>
                 
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