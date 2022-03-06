import React, { Component } from 'react';
import axios from 'axios';

import { NavLink } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
export default class ProyectosFinalizados extends Component {

  state = {
status: false,
    proyectos:[]
  }

  cargarProyecto= () => {
    var url = "http://localhost:8080";
    var request = "/gestionproyectosinvestigacion/proyectosFinalizadosClase/" +this.props.id;
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
                  <h1><i class="fas fa-eye nav-icon"></i>Proyectos de la Clase con id: {this.props.id}</h1>
                  </div>
                  </section>
      </div>
      <NavLink className="btn btn-info" style={{ width: "31%", margin: "10px 1% 1em" }} to={"/MacroProyectos"} >Macro proyectos</NavLink>
      <NavLink className="btn btn-info" style={{ width: "31%", margin: "10px 1% 1em" }} to={"/CrearProyectoMateria"} >crear un proyecto</NavLink>
          <div></div>
      <NavLink className="btn btn-info" style={{width: "31%", margin: "10px 1% 1em"}} to={"/ProyectosPropuesta/"+this.props.id} >Proyectos propuesta</NavLink> 
      <NavLink className="btn btn-info" style={{width: "31%", margin: "10px 1% 1em"}} to={"/ProyectosDesarrollo/"+this.props.id} >Proyectos desarrollo</NavLink> 
      <NavLink className="btn btn-info" style={{width: "31%", margin: "10px 1% 1em"}} to={"/ProyectosFinalizados/"+this.props.id} >Proyectos Finalizados</NavLink>         
      {this.state.status === true &&
        (
          this.state.proyectos.map((pro, i) => {
           
            return (

              <section className="content">
                {/* Default box */}
                <div className="card">
                
                  <div className="card-header">
                    <h3 className="card-title">Proyecto de la clase con ID: {this.props.id}</h3>
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
                          <th style={{ width: '10%' }}>
                            id
                          </th>
                          <th style={{ width: '25%' }}>
                           titulo
                          </th>               
                          <th style={{ width: '25%' }}>
                            descripción
                          </th>
                          <th style={{ width: '25%' }}>
                            metodologia
                          </th>
                          <th style={{ width: '25%' }}>
                           estado
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
                          {pro.metodologia}
                          </td>
                          <td>
                          {pro.estado}
                          </td>
                          <td className="project-actions text-right" style={{width: '40%'}}>
                 
                          </td>
                          <td className="project-actions text-right" style={{width: '30%'}}>
                          <NavLink to={"/DetallesProyectoAI/" + pro.id} className="btn btn-primary">Detalles</NavLink>
                          
                          {/* <NavLink className="btn btn-info" to={"/DetallesPrueba/" + proye.id} >Modificar</NavLink> */}
                          {/* <NavLink className="btn btn-danger" to={"/DetallesPrueba/" + proye.id} >Eliminar</NavLink> */}
                      
                            
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