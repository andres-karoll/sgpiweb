import React, { Component } from 'react';
import axios from 'axios';

import { NavLink } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
export default class SemillerosPrograma extends Component {

  state = {
status: false,
    semilleros:[]
  }
//metodo para listar los semilleros del programa
  cargarSemillero= () => {
    var url = "http://localhost:8080";
    var request = "/gestioninstitucional/listarsemillerosdelprograma/" +this.props.id;
    axios.get(url + request).then(res => {
      this.setState({
        semilleros: res.data
        , status: true
      });
    });
    
  }

  componentDidMount = () => {
    this.cargarSemillero();
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
                  <h1><i class="fas fa-eye nav-icon"></i>Semilleros del programa con id: {this.props.id}</h1>
                  </div>
                  </section>
      </div>
      {this.state.status === true &&
        (
          this.state.semilleros.map((semi, i) => {
           
            return (

              <section className="content">
                {/* Default box */}
                <div className="card">
                
                  <div className="card-header">
                    <h3 className="card-title">Semillero del programa con ID: {this.props.id}</h3>
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
                          <th style={{ width: '30%' }}>
                            id
                          </th>
                          <th style={{ width: '30%' }}>
                            nombre
                          </th>               
                          <th style={{ width: '30%' }}>
                            descripción
                          </th>
                          <th style={{ width: '30%' }}>
                            lidel de semillero
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                          {semi.id}
                          </td>
                          <td>
                          {semi.nombre}
                          </td>
                          <td>
                          {semi.descripcion}
                          </td>
                          <td>
                          {semi.lider_semillero}
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