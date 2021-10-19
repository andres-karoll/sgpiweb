import React, { Component } from 'react';
import axios from 'axios';

import { NavLink } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
export default class ProgramasFacultad extends Component {

  state = {
status: false,
    programas:[]
  }

  cargarLineas= () => {
    var url = "http://localhost:8080";
    var request = "/gestioninstitucional/listarprogramasporfacultad/" +this.props.id;
    axios.get(url + request).then(res => {
      this.setState({
        programas: res.data
        , status: true
      });
    });
    
  }

  componentDidMount = () => {
    this.cargarLineas();
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
                  <h1><i class="fas fa-eye nav-icon"></i>Programas de la facultad con ID: {this.props.id}</h1>
                  </div>
                  </section>
      </div>
      {this.state.status === true &&
        (
          this.state.programas.map((pro, i) => {
           
            return (

              <section className="content">
                {/* Default box */}
                <div className="card">
                
                  <div className="card-header">
                    <h3 className="card-title">Id de la Facultad: {this.props.id}</h3>
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
                            ID
                          </th>
                          <th style={{ width: '30%' }}>
                          Nombre de programa
                          </th>
                          <th style={{ width: '30%' }}>
                          Director
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
                            {pro.director}
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