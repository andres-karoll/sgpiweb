import React, { Component } from 'react';
import axios from 'axios';

import { NavLink } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
export default class LineasGrupoI extends Component {

  state = {
status: false,
    lineas:[]
  }

  cargarLineas= () => {
    var url = "http://localhost:8080";
    var request = "/gestioninstitucional/listarlineasdelgrupo/" +this.props.id;
    axios.get(url + request).then(res => {
      this.setState({
        lineas: res.data
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
                  <h1><i class="fas fa-user-friends nav-icon"></i>Lineas de investigación ID: {this.props.id}</h1>
                  </div>
                  </section>
      </div>
      {this.state.status === true &&
        (
          this.state.lineas.map((li, i) => {
           
            return (

              <section className="content">
                {/* Default box */}
                <div className="card">
                
                  <div className="card-header">
                    <h3 className="card-title">Grupo de Investigacion: {li.grupo_investigacion}</h3>
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
                          <th style={{ width: '50%' }}>
                            Grupo de investigacion
                          </th>
                          <th style={{ width: '50%' }}>
                            Linea de investigacion
                          </th>               
                          
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            {li.grupo_investigacion}
                          </td>
                          <td>
                            <a>
                            {li.linea_investigacion}
                            </a>
                            <br />
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