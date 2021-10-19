import React, { Component } from 'react';
import axios from 'axios';

import { Link, NavLink } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
export default class GruposInvestigacion extends Component {

  state = {
    gruposi: []
    , status: false,
    lineas:[]
  }

  cargarGruposI = () => {
    var url = "http://localhost:8080";
    var request = "/gestioninstitucional/listargruposi";
    axios.get(url + request).then(res => {
      this.setState({
        gruposi: res.data
        , status: true
      });
    });
    
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
    this.cargarGruposI();
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
                  <h1><i class="fas fa-user-friends nav-icon"></i>Grupos de investigación</h1>
                  </div>
                  </section>
      </div>
      <NavLink className="btn btn-info" style={{width: "100%", margin: "10px 1% 1em"}} to={"/InsertarGruposInvestigacion"} >Insertar</NavLink>
      {this.state.status === true &&
        (
          this.state.gruposi.map((grup, i) => {
           
            return (

              <section className="content">
                {/* Default box */}
                <div className="card">
                
                  <div className="card-header">

                    <h3 className="card-title">Grupo de Investigacion: {grup.nombre}</h3>
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
                          <th style={{ width: '1%' }}>
                            # ID
                          </th>
                          <th style={{ width: '15%' }}>
                            Nombre de grupo
                          </th>               
                          <th style={{width: '15%'}}>
                            Categoria
                          </th>
                          <th style={{width: '15%'}}>
                          fecha_cat
                          </th>
                          <th style={{width: '15%'}}>
                          fecha_fun
                          </th>
                          <th style={{ width: '15%' }} className="text-center">
                            Director de Grupo
                          </th>
                          
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            # {grup.id}
                          </td>
                          <td>

                            {grup.nombre}

                          </td>
                          
                          <td className="project_progress">
                           
                            {grup.categoria}

                          </td>
                          <td className="project_progress">
                           
                            {grup.fecha_cat}
                            
                          </td>
                          <td className="project_progress">
                            
                            {grup.fecha_fun}
                            
                          </td>
                          <td className="project-state">
                            {grup.director_grupo}
                          </td>
                          <td className="project-actions text-right" style={{width: '40%'}}>
                          <div className=" mt-3 pb-3 mb-3 d-flex">
                          {/* <NavLink to={"/DetallesGruposInvestigacion/" + proye.id} className="btn btn-primary">Detalles</NavLink> */}
                          <NavLink style={{width: '50%'}} className="btn btn-success" to={"/ActulizarGruposInvestigacion/" + grup.id} >Modificar</NavLink>
                          <NavLink style={{width: '50%'}} className="btn btn-danger"  to={"/EliminarGruposInvestigacion/" + grup.id} >Eliminar</NavLink>
                          </div>                   
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
          <Link to={"/AsignarLineaGrupoI/" + grup.id}>
            <li className="nav-item">
              <a  className="nav-link">
              <i className="fas fa-book nav-icon"> </i>
              
                <p>Asignar Linea al grupo de investigación</p>
                 
              </a>
            </li>
            </Link>
            <Link to={"/AsignarProgramaGrupoI/" + grup.id}>
            <li className="nav-item">
              <a  className="nav-link">
                <i className="fas fa-book nav-icon" />
                
                <p>Asignar Programa al grupo de investigación</p>
                 
              </a>
            </li>
            </Link>
            <Link to={"/DesAsignarLineaGrupoI/" + grup.id}>
            <li className="nav-item">
              <a  className="nav-link">
                <i className="fas fa-skull-crossbones nav-icon" />
                
                <p>Desasignar Linea de investigación</p>
                 
              </a>
            </li>
            </Link>
            <Link to={"/DesAsignarProgramaGrupoI/" + grup.id}>
            <li className="nav-item">
              <a  className="nav-link">
                <i className="fas fa-skull-crossbones nav-icon" />
                
                <p>Desasignar Programa</p>
                 
              </a>
            </li>
            </Link>
            <Link to={"/LineasGrupoI/" + grup.id}>
            <li className="nav-item">
              <a  className="nav-link">
                <i className="fas fa-eye nav-icon" />
                
                <p>Ver lineas de este grupo de investigación</p>
                 
              </a>
            </li>
            </Link>
            <Link to={"/ProgramasGrupoI/" + grup.id}>
            <li className="nav-item">
              <a  className="nav-link">
                <i className="fas fa-eye nav-icon" />
                
                <p>Ver programa de este grupo de investigación</p>
                 
              </a>
            </li>
            </Link>
            <Link to={"/SemilleroGrupoI/" + grup.id}>
            <li className="nav-item">
              <a  className="nav-link">
                <i className="fas fa-eye nav-icon" />
                
                <p>Ver semilleros de este grupo de investigación</p>
                 
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