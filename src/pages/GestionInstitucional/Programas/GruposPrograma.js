import React, { Component } from 'react';
import axios from 'axios';

import { NavLink } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
import swal from 'sweetalert';
export default class GruposPrograma extends Component {

  state = {
status: false,
    grupos:[]
  }
//metodo para listar los grupos de un programa
  cargarGrupo= () => {
    var url = "http://localhost:8080";
    var request = "/gestioninstitucional/listargruposdelprograma/" +this.props.id;
    axios.get(url + request).then(res => {
      this.setState({
        grupos: res.data
        , status: true
      });
      if (this.state.grupos.length === 0) {
        swal({
          title: "este programa no tiene grupos de investigacion asignados",
          icon:"error"
        });
     
        window.history.back();
    }
    });
    
  }

  componentDidMount = () => {
    this.cargarGrupo();
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
                  <h1><i class="fas fa-eye nav-icon"></i>Grupos del programa con id: {this.props.id}</h1>
                  </div>
                  </section>
      </div>
      {this.state.status === true &&
        (
          this.state.grupos.map((gru, i) => {
           
            return (

              <section className="content">
                {/* Default box */}
                <div className="card">
                
                  <div className="card-header">
                    <h3 className="card-title">Grupo del programa con ID: {this.props.id}</h3>
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
                            categoria
                          </th>
                          <th style={{ width: '30%' }}>
                            director del grupo
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                          {gru.id}
                          </td>
                          <td>
                          {gru.nombre}
                          </td>
                          <td>
                          {gru.categoria}
                          </td>
                          <td>
                          {gru.director_grupo}
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