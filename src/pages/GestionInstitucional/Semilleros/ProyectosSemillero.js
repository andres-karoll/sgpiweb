import React, { Component } from 'react';
import axios from 'axios';

import { NavLink } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
import swal from 'sweetalert';
export default class ProyectosSemillero extends Component {

  state = {
status: false,
    proyectos:[]
  }
//funcion para listar los proyectos del semillero
  cargarProyectos= () => {
    var url = "http://localhost:8080";
    var request = "/gestioninstitucional/listarproyectosdelsemillero/" +this.props.id;
    axios.get(url + request).then(res => {
      this.setState({
        proyectos: res.data
        , status: true
      });
      if (this.state.proyectos.length === 0) {
        swal({
          title: "este semillero no tiene proyectos",
          icon:"error"
        });
     
        window.history.back();
    }
    });
  }

  componentDidMount = () => {
    this.cargarProyectos();

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
                  <h1><i class="fas fa-eye nav-icon"></i>Proyectos de semillero con id: {this.props.id}</h1>
                  </div>
                  </section>
      </div>
      {this.state.status === true &&
        (
          this.state.proyectos.map((pro, i) => {
           
            return (

              <section className="content">
                {/* Default box */}
                <div className="card">
                
                  <div className="card-header">
                    <h3 className="card-title">proyecto del Semillero con id: {this.props.id}</h3>
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
                            id
                          </th>
                          <th style={{ width: '20%' }}>
                            titulo
                          </th>               
                          <th style={{ width: '20%' }}>
                            descripcion
                          </th>
                          <th style={{ width: '20%' }}>
                            metodologia
                          </th> 
                          <th style={{ width: '20%' }}>
                            fecha inicio
                          </th> 
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                       
                          <td>
                            {pro.id}
                          </td>
                          <td>
                            {pro.titulo}
                          </td>
                          <td>
                            {pro.descripcion}
                          </td>
                          <td>
                            {pro.metodologia}
                          </td>
                          <td>
                            {pro.fecha_inicio}
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