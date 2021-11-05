import React, { Component } from 'react';
import axios from 'axios';

import {Link, NavLink } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
export default class ListarProductos extends Component {

  state = {
    areas: []
    , status: false
  }

  cargarAreas = () => {

    axios.get("http://localhost:8080/archivo/files").then(res => {
      this.setState({
        areas: res.data
        , status: true
      });
    });
  }

  componentDidMount = () => {
    this.cargarAreas();
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
                  <h1><i class="fas fa-brain nav-icon"></i>Archivos</h1>
                  </div>
                  </section>
      </div>
      {this.state.status === true &&
        (
          this.state.areas.map((are, i) => {
           
            return (
              <section className="content">
                {/* Default box */}
                <div className="card">
                    
                  <div className="card-header">
                    <h3 className="card-title" style={{fontSize:"large"}}>Nombre: {are.nombre}</h3>
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
                          <th style={{ width: '10%',fontSize:"small"}}>
                            nombre archivo
                          </th>
                          <th style={{ width: '15%',fontSize:"small" }}>
                            URL del archivo
                          </th>
                                 
                        </tr>
                      </thead>
                      <tbody>
                        <tr  style={{fontSize:"small" }}>
                          <td>
                             {are.name}
                          </td>
                          <td>
                            <a>
                            {are.url}
                            </a>
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