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
      <NavLink className="btn btn-info" style={{width: "31%", margin: "10px 1% 1em"}} to={"/InsertarGruposInvestigacion"} >Insertar</NavLink>

      <NavLink   className="btn btn-info" style={{width: "31%", margin: "10px 1% 1em"}} to={"/AsignarLineaGrupoI/"} >Des-asignar linea a un grupo</NavLink>
      <NavLink style={{width: '31%', margin: "10px 1% 1em"}} className="btn btn-info"  to={"/AsignarProgramaGrupoI/"} >Des-asignar Programa a un grupo</NavLink>  
      <NavLink style={{width: '31%', margin: "10px 1% 1em"}} className="btn btn-info"  to={"/PruebaMiguel/"} >Prueba Miguel</NavLink>  
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
                            <a>
                            {grup.nombre}
                            </a>
                            <br />
                          </td>
                          
                          <td className="project_progress">
                            <a>
                            {grup.categoria}
                            </a>
                          </td>
                          <td className="project_progress">
                            <a>
                            {grup.fecha_cat}
                            </a>
                          </td>
                          <td className="project_progress">
                            <a>
                            {grup.fecha_fun}
                            </a>
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
              <i className="fas fa-check nav-icon"> </i>
              
                <p>Asignar Linea al grupo de investigación</p>
                 
              </a>
            </li>
            </Link>
            <Link to={"/AsignarProgramaGrupoI/" + grup.id}>
            <li className="nav-item">
              <a  className="nav-link">
                <i className="fas fa-check nav-icon" />
                
                <p>Asignar Programa al grupo de investigación</p>
                 
              </a>
            </li>
            </Link>
            <Link to={"/LineasGrupoI/" + grup.id}>
            <li className="nav-item">
              <a  className="nav-link">
                <i className="fas fa-check nav-icon" />
                
                <p>Ver lineas de este grupo de investigación</p>
                 
              </a>
            </li>
            </Link>
            <Link to={"/ProgramasGrupoI/" + grup.id}>
            <li className="nav-item">
              <a  className="nav-link">
                <i className="fas fa-check nav-icon" />
                
                <p>Ver programa de este grupo de investigación</p>
                 
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