import React, { Component } from 'react';
import axios from 'axios';

import { Link, NavLink } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
import swal from 'sweetalert';
export default class ClasesMateria extends Component {

  state = {
status: false,
    clases:[]
  }
//funcion para listar las clases de una manteria
  cargarClase= () => {
    var url = "http://localhost:8080";
    var request = "/gestioninstitucional/listarclasespormateria/" +this.props.id;
    axios.get(url + request).then(res => {
      this.setState({
        clases: res.data
        , status: true
      });
      if (this.state.clases.length === 0) {
        swal({
          title: "esta materia  no tiene clases asignadas",
          icon:"error"
        });
     
        window.history.back();
    }
    });
    
  }

  componentDidMount = () => {
    this.cargarClase();
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
                  <h1><i class="fas fa-eye nav-icon"></i>Clases del {this.props.id}</h1>
                  </div>
                  </section>
      </div>
      <NavLink className="btn btn-info" style={{width: "100%"}} to={"/InsertarClaseMateria/"+this.props.id} >Crear Clase</NavLink>
      {this.state.status === true &&
        (
          this.state.clases.map((cla, i) => {
           
            return (

              <section className="content">
                {/* Default box */}
                <div className="card">
                
                  <div className="card-header">
                    <h3 className="card-title">Clase del {this.props.id}</h3>
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
                            numero
                          </th>
                          <th style={{ width: '20%' }}>
                           nombre
                          </th>               
                          <th style={{ width: '20%' }}>
                            profesor
                          </th>
                          <th style={{ width: '20%' }}>
                            materia
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                          {cla.numero}
                          </td>
                          <td>
                          {cla.nombre}
                          </td>
                          <td>
                          {cla.profesor}
                          </td>
                          <td>
                          {cla.materia}
                          </td>
                          
                          <td className="project-actions text-right" style={{width: '30%'}}>
                          {/* <NavLink to={"/DetallesGruposInvestigacion/" + proye.id} className="btn btn-primary">Detalles</NavLink> */}
                          <NavLink style={{width: '50%'}} className="btn btn-success"  to={"/ActulizarClaseMateria/" + cla.numero} >Modificar</NavLink>
                          
                          <NavLink style={{width: '50%'}} className="btn btn-danger"  to={"/EliminarClase/" + cla.numero} >Eliminar</NavLink>  
                                                  
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

                              <Link to={"/ProyectosClase/" + cla.numero}>
                                <li className="nav-item">
                                  <a className="nav-link">
                                    <i className="fas fa-eye nav-icon" />

                                    <p>Ver proyectos de la clase</p>

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