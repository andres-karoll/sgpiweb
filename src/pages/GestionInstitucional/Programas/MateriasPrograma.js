import React, { Component } from 'react';
import axios from 'axios';

import {Link, NavLink } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
import swal from 'sweetalert';
export default class MateriaPrograma extends Component {

  state = {
status: false,
    materias:[]
  }
//funcion para listar las materias de un programa
  cargarMateria= () => {
    var url = "http://localhost:8080";
    var request = "/gestioninstitucional/listarmateriasdeprograma/" +this.props.id;
    axios.get(url + request).then(res => {
      this.setState({
        materias: res.data
        , status: true
      });
      if (this.state.materias.length === 0) {
        swal({
          title: "este programa no tiene materias asignadas",
          icon:"error"
        });
     
        window.history.back();
    }
    });
    
  }

  componentDidMount = () => {
    this.cargarMateria();
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
                  <h1><i class="fas fa-eye nav-icon"></i>Materia del programa con id: {this.props.id}</h1>
                  </div>
                  </section>
      </div>
      <NavLink className="btn btn-info" style={{width: "100%"}} to={"/InsertarMateriaPrograma/"+this.props.id} >Crear Materia</NavLink>
      {this.state.status === true &&
        (
          this.state.materias.map((mat, i) => {
           
            return (

              <section className="content">
                {/* Default box */}
                <div className="card">
                
                  <div className="card-header">
                    <h3 className="card-title">materia del programa con ID: {this.props.id}</h3>
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
                            catalogo
                          </th>
                          <th style={{ width: '30%' }}>
                            nombre
                          </th>               
                          <th style={{ width: '30%' }}>
                            programa
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                          {mat.catalogo}
                          </td>
                          <td>
                          {mat.nombre}
                          </td>
                          <td>
                          {mat.programa}
                          </td>
                          <td className="project-actions text-right" style={{width: '40%'}}>
                          <NavLink style={{width: '50%'}} className="btn btn-success" to={"/ActulizarMateriaPrograma/" + mat.catalogo} >Modificar</NavLink>
                          <NavLink style={{width: '50%'}} className="btn btn-danger"  to={"/EliminarMateria/" + mat.catalogo} >Eliminar</NavLink>  
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

            <Link to={"/ClasesMateria/" + mat.catalogo}>
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