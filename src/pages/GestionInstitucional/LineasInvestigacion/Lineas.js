import React, { Component } from 'react';
import axios from 'axios';

import {Link, NavLink } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
export default class Lineas extends Component {

  state = {
    lineas: []
    , status: false
  }
//funcion para listar las lineas de investigacion
  cargarLineas = () => {
    var url = "http://localhost:8080";
    var request = "/gestioninstitucional/listarlineas";
    axios.get(url + request).then(res => {
      this.setState({
        lineas: res.data
        , status: true
      });
    });
  }

  componentDidMount = () => {
    this.cargarLineas();
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
                  <h1><i class="fas fa-globe nav-icon"></i>Lineas de investigación</h1>
                  </div>
                  </section>
      </div>
      <NavLink className="btn btn-info" style={{width: "100%"}} to={"/InsertarLinea"} >Insertar</NavLink>
      {this.state.status === true &&
        (
          this.state.lineas.map((li, i) => {
           
            return (
              <section className="content">
                {/* Default box */}
                <div className="card">
                    
                  <div className="card-header">
                    <h3 className="card-title">Nombre: {li.nombre}</h3>
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
                            Nombre
                          </th>
                          <th style={{ width: '25%' }}>
                            Descripción
                          </th>
                          <th style={{ width: '25%' }}>
                            Fecha
                          </th>                                    
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                             {li.nombre}
                          </td>
                          <td>
                            <a>
                            {li.descripcion}
                            </a>
                          </td>
                          <td>
                            <a>
                            {li.fecha}
                            </a>
                          </td>
                          <td className="project-actions text-right" style={{width: '30%'}}>
                          {/* <NavLink to={"/DetallesGruposInvestigacion/" + proye.id} className="btn btn-primary">Detalles</NavLink> */}
                          <NavLink style={{width: '50%'}} className="btn btn-success" to={"/ActualizarLinea/" + li.nombre} >Modificar</NavLink>
                          <NavLink style={{width: '50%'}} className="btn btn-danger"  to={"/EliminarLinea/" + li.nombre} >Eliminar</NavLink>  
                                                  
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <li className="nav-item">
          <a href="#" className="nav-link ">
            <i className="fas fa-lightbulb nav-icon" />        
            <p>
              Funciones
              <i className="right fas fa-angle-left" />
            </p>
                      
          </a>
          <ul className="nav nav-treeview">

            <Link to={"/SemillerosLinea/" + li.nombre}>
            <li className="nav-item">
              <a  className="nav-link">
                <i className="fas fa-eye nav-icon" />
                
                <p>Ver semilleros de la linea de investigación</p>
                 
              </a>
            </li>
            </Link>
            
          </ul>
        </li>
                    </ul>
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