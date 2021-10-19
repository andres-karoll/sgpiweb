import React, { Component } from 'react';
import axios from 'axios';

import {Link, NavLink } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
export default class Materias extends Component {

  state = {
    materias: []
    , status: false
  }

  cargarMaterias = () => {
    var url = "http://localhost:8080";
    var request = "/gestioninstitucional/listarmaterias";
    axios.get(url + request).then(res => {
      this.setState({
        materias: res.data
        , status: true
      });
    });
  }

  componentDidMount = () => {
    this.cargarMaterias();
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
                  <h1><i class="fas fa-book-reader nav-icon"></i>Materias</h1>
                  </div>
                  </section>
      </div>
      <NavLink className="btn btn-info" style={{width: "100%"}} to={"/InsertarMateria"} >Insertar</NavLink>
      {this.state.status === true &&
        (
          this.state.materias.map((mate, i) => {
            return (
              <section className="content">
                {/* Default box */}
                <div className="card">
                    
                  <div className="card-header">
                    <h3 className="card-title">Nombre: {mate.nombre}</h3>
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
                            Catalogo
                          </th>
                          <th style={{ width: '25%' }}>
                            Nombre
                          </th>
                          <th style={{ width: '25%' }}>
                            Programa
                          </th>                                    
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                             {mate.catalogo}
                          </td>
                          <td>
                            <a>
                            {mate.nombre}
                            </a>
                          </td>
                          <td>
                            <a>
                            {mate.programa}
                            </a>
                          </td>
                          <td className="project-actions text-right" style={{width: '30%'}}>
                          {/* <NavLink to={"/DetallesGruposInvestigacion/" + proye.id} className="btn btn-primary">Detalles</NavLink> */}
                          <NavLink className="btn btn-info" to={"/ActulizarMateria/" + mate.catalogo} >Modificar</NavLink>
                          <NavLink className="btn btn-danger"  to={"/EliminarMateria/" + mate.catalogo} >Eliminar</NavLink>  
                                                  
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

            <Link to={"/ClasesMateria/" + mate.catalogo}>
            <li className="nav-item">
              <a  className="nav-link">
                <i className="fas fa-eye nav-icon" />
                
                <p>Ver las Clases de la materia</p>
                 
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