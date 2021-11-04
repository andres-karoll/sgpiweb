import React, { Component } from 'react';
import axios from 'axios';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
import { NavLink } from 'react-router-dom';
export default class CrearProyectoMateria extends Component {
    state = { 
            status: false,
            materia:[],
            mat:[]}
CargarMateria = () => {
    var request = "/gestioninstitucional/listarmateriasdeprograma/"+this.props.id ;
    var url = "http://localhost:8080" + request;
   axios.get(url).then(res => {
      this.setState({
        materia: res.data
        , status: true
      })
    });
    
  }

    cajaFacultad = React.createRef();
componentDidMount = () => {
        this.CargarMateria();
        this.setState({mat:this.state.materia});
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
                      <h1><i class="fas fa-user-friends nav-icon"></i>Programas</h1>
                      </div>
                      </section>
          </div>
          {this.state.status === true &&
            (
              this.state.materia.map((mat) => {
                return (
                  <section className="content">
                    {/* Default box */}
                    <div className="card">
                    
                      <div className="card-header">
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
                             
                              <th style={{ width: '15%' }}>
                                Catalogo
                              </th>               
                              <th style={{width: '15%'}}>
                                Nombre
                              </th>
                              <th style={{width: '15%'}}>
                                Programa
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                             
                              <td>
                                <a>
                                {mat.catalogo}
                                </a>
                                <br />
                              </td>
                              <td className="project_progress">
                                <a>
                                {mat.nombre}
                                </a>
                              </td>
                              <td className="project_progress">
                                <a>
                                {mat.programa}
                                </a>
                              </td>
                              <td className="project-actions text-right" style={{width: '40%'}}>
                              <div className=" mt-3 pb-3 mb-3 d-flex">
                              {/* <NavLink to={"/DetallesGruposInvestigacion/" + proye.id} className="btn btn-primary">Detalles</NavLink> */}
                              <NavLink style={{width: '50%'}} className="btn btn-success" to={"/CrearProyecto/"+mat.catalogo} >Modificar</NavLink>
                              </div>                   
                              </td>
                            </tr>
                          </tbody>
                        </table>
                 
                      </div>
                      {/* /.card-body */}
                    </div>
                    
                    {/* /.card */}
                  </section>
                )
            })
          )}
    </div>
    </div>
          
        )
    }
}
