import React, { Component } from 'react';
import axios from 'axios';

import { NavLink } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
import swal from 'sweetalert';
export default class ProgramaSemillero extends Component {

  state = {
status: false,
    programa:[]
  }
//funcion para listar el programa del semillero
  cargarPrograma= () => {
    var url = "http://localhost:8080";
    var request = "/gestioninstitucional/listarprogramadelsemillero/" +this.props.id;
    axios.get(url + request).then(res => {
      this.setState({
        programa: res.data
        , status: true
      });
      if (this.state.programa.length === 0) {
        swal({
          title: "este semillero no tiene programa asignado",
          icon:"error"
        });
        window.history.back();
    }
    });
    
  }

  componentDidMount = () => {
    this.cargarPrograma();
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
                  <h1><i class="fas fa-eye nav-icon"></i>Programas de semillero con id: {this.props.id}</h1>
                  </div>
                  </section>
      </div>
      {this.state.status === true &&
        (
          this.state.programa.map((pro, i) => {
           
            return (

              <section className="content">
                {/* Default box */}
                <div className="card">
                
                  <div className="card-header">
                    <h3 className="card-title">Programa del Semillero con ID: {this.props.id}</h3>
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
                            director
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                       
                          <td>
                            {pro.id}
                          </td>
                          <td>
                          {pro.nombre}
                          </td>
                          <td>
                          {pro.Director}
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