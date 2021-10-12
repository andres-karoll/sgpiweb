import React, { Component } from 'react';
import axios from 'axios';

import { NavLink } from 'react-router-dom';
import Aside from '../../components/Global/Aside';
import Header from '../../components/Global/Header';
export default class ProyectosGrado extends Component {
  state = {
    proyectos: []
    , status: false,
    busqueda:'',
    proyec:[]
  }

  cargarProyectosGrado = () => {
    var url = "http://localhost:8080";
    var request = "/biblioteca/listarGrado";
    axios.get(url + request).then(res => {
      this.setState({
        proyectos: res.data
        , status: true
      });
    });
  }

  filtrarElementos=()=>{
    var search=this.state.proyectos.filter(item=>{
      if(item.titulo.toString().includes(this.state.busqueda))
      {
        return item;
      }
      
    });
    this.setState({proyectos: search});
  }


  componentDidMount = () => {
    this.cargarProyectosGrado();
    this.setState({proyec:this.state.proyectos})
  }

  onChange = async e=>{
    e.persist();
    await this.setState({busqueda: e.target.value})
    console.log(this.state.busqueda)
    this.filtrarElementos();
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
                  <h1><i class="fas fa-graduation-cap nav-icon"></i> Proyectos de grado</h1>
                  </div>
                  </section>
            </div>
     <section className="content">
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-8 offset-md-2">
        <form action={this.filtrar}>
          <div className="input-group">
            <input type="search" onChange = {this.onChange} className="form-control form-control-lg" placeholder="Type your keywords here" />
            <div className="input-group-append">
              <button type="submit"  className="btn btn-lg btn-default">
                <i className="fa fa-search" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

      {this.state.status === true &&
        (
          this.state.proyectos.map((proye, i) => {
            return (
              <section className="content">
                {/* Default box */}
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Proyecto: {proye.titulo}</h3>
                    <div className="card-tools">
                      <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                        <i className="fas fa-minus" />
                      </button>
                      {/*  
                      <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                        <i className="fas fa-times" />
                      </button> */}
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <table className="table table-striped projects">
                      <thead>
                        <tr>
                          <th style={{ width: '1%' }}>
                            # ID
                          </th>
                          <th style={{ width: '20%' }}>
                            Nombre del proyecto
                          </th>               
                          <th style={{width: '10%'}}>
                            Fecha de inicio
                          </th>
                          <th style={{width: '10%'}}>
                            Fecha Final
                          </th>
                          <th style={{width: '20%'}}>
                          Descripción
                          </th>
                          <th style={{ width: '5%' }} className="text-center">
                            Estado
                          </th>
                          
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            #{proye.id}
                          </td>
                          <td>
                            <a>
                            {proye.titulo}
                            </a>
                            <br />
                            <small>
                              Metodologia: {proye.metodologia}
                            </small>
                          </td>
                          
                          <td className="project_progress">
                            <small>
                              {proye.fecha_inicio}
                            </small>
                          </td>
                          <td className="project_progress">
                            <small>
                              {proye.fecha_fin}
                            </small>
                          </td>
                          <td className="project_progress">
                            <small>
                            {proye.descripcion}
                            </small>
                          </td>
                          <td className="project-state">
                            <span className="badge badge-success">{proye.estado}</span>
                          </td>
                          <td className="project-actions text-right" style={{width: '30%'}}>
                          <NavLink to={"/DetallesProyecto/" + proye.id} className="btn btn-primary">Detalles</NavLink>
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