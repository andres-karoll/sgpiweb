import React, { Component } from 'react';
import axios from 'axios';


import { NavLink,Link } from 'react-router-dom';
import Aside from '../../components/Global/Aside';
import Header from '../../components/Global/Header';
export default class TusProyectosSemillero extends Component {

  state = {
status: false,
    proyectos:[]
  }

  cargarProyecto= () => {
    var url = "http://localhost:8080";
    var request = "/gestionproyectosinvestigacion/tusProyectosSemillero/" +localStorage.getItem("cedula");
    axios.get(url + request).then(res => {
      this.setState({
        proyectos: res.data
        , status: true
      });
    });
    
  }

  componentDidMount = () => {
    this.cargarProyecto();
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
                  <h1><i class="fas fa-eye nav-icon"></i>Proyectos de la Convocatoria con id: {this.props.id}</h1>
                  </div>
                  </section>
      </div>
      {this.state.status === true &&
        (
          this.state.proyectos.map((pro, i) => {
           
            return (

              <section className="content">
                {/* Default box */}
                <div className="card">
                
                  <div className="card-header">
                    <h3 className="card-title">Proyecto de la convocatoria con ID: {this.props.id}</h3>
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
                          <th style={{ width: '5%' }}>
                            id de proyecto
                          </th>
                          <th style={{ width: '15%' }}>
                           Titulo del proyecto
                          </th>               
                          <th style={{ width: '25%' }}>
                            Descripción
                          </th>
                          <th style={{ width: '10%' }}>
                            Estado
                          </th>
                          <th style={{ width: '10%' }}>
                          Convocatoria
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                          {pro.id}
                          </td>
                          <td>
                          {pro.titulo}
                          </td>
                          <td>
                          {pro.descripcion}
                          </td>
                          <td>
                          {pro.estado}
                          </td>
                          <td>
                          {pro.convocatoria}
                          </td>
                          <td className="project-actions text-right">
                            
                          <NavLink to={"/DetallesProyectoSemillero/" + pro.id} className="btn btn-primary">Detalles</NavLink>
                          <NavLink className="btn btn-success" to={"/PresupuestoProyecto/" + pro.id} >Presupuesto</NavLink> 
                          <NavLink className="btn btn-warning" to={"/ProductosProyecto/" + pro.id} >Productos</NavLink>
                          
                          
                            
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

            
            <Link to={"/SubirProductos/" + pro.id}>
            <li className="nav-item">
              <a  className="nav-link">
                <i className="fas fa-file-upload nav-icon" />
                
                <p>Subir Productos</p>
                 
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