import React, { Component } from 'react';
import axios from 'axios';

import {Link, NavLink } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
export default class Areas extends Component {

  state = {
    areas: []
    , status: false
  }

  cargarAreas = () => {
    var url = "http://localhost:8080";
    var request = "/gestioninstitucional/listarareas";
    axios.get(url + request).then(res => {
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
                  <h1><i class="fas fa-brain nav-icon"></i>Areas</h1>
                  </div>
                  </section>
      </div>
      <NavLink className="btn btn-info" style={{width: "100%"}} to={"/InsertarArea"} >Insertar</NavLink>
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
                          <th style={{ width: '10%'}}>
                            id
                          </th>
                          <th style={{ width: '15%'}}>
                            Nombre
                          </th>
                          <th style={{ width: '30%'}}>
                            Descripción
                          </th> 
                          <th style={{ width: '20%'}}>
                            Gran area
                          </th>                                    
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                             {are.id}
                          </td>
                          <td>
                            <a>
                            {are.nombre}
                            </a>
                          </td>
                          <td>
                            <a>
                            {are.descripcion}
                            </a>
                          </td>
                          <td>
                            <a>
                            {are.gran_area}
                            </a>
                          </td>
                          <td className="project-actions text-right" style={{width: '30%'}}>
                          {/* <NavLink to={"/DetallesGruposInvestigacion/" + proye.id} className="btn btn-primary">Detalles</NavLink> */}
                          <NavLink style={{width: '50%'}} className="btn btn-success"  to={"/ActualizarArea/" + are.id}>Modificar</NavLink>
                          <NavLink style={{width: '50%'}} className="btn btn-danger"   to={"/EliminarArea/" + are.id}>Eliminar</NavLink>  
                                                  
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <li className="nav-item">
          <a href="#" className="nav-link ">
            <i className="fas fa-lightbulb nav-icon"  />        
            <p  style={{ width: '20%'}}>
              Funciones
              <i className="right fas fa-angle-left" />
            </p>
                      
          </a>
          <ul className="nav nav-treeview">

            <Link to={"/ProyectosArea/" + are.id}>
            <li className="nav-item" >
              <a  className="nav-link">
                <i className="fas fa-eye nav-icon"  />
                
                <p>. Ver proyectos asociados al Area</p>
                 
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