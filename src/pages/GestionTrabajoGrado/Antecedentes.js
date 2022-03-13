import React, { Component } from 'react';
import axios from 'axios';
import { NavLink,Link } from 'react-router-dom';
import Aside from '../../components/Global/Aside';
import Header from '../../components/Global/Header';
export default class Antecedentes extends Component {

   
    state = {
        status: false,
        proyectos:[],
        pro:[]
      }
      cargarAntecedentes = () => {
        var url = "http://localhost:8080";
        var request = "/gestionproyectosinvestigacion/listarAntecedentes/"+this.props.id;
        console.log(this.props.id)
        axios.get(url + request).then(res => {
          this.setState({
            proyectos: res.data
            , status: true
          });
        });
      }
      componentDidMount = () => {
        this.cargarAntecedentes();
        this.setState({pro:this.state.proyectos})
      }
      render() {
        var rol=localStorage.getItem("tipo")
        return (
        <div>
          <Aside/>
          <Header/>
          <div className="content-wrapper">
          <div>
                <section className="content">
                    <br />
                    <div class="alert alert-info alert-dismissible">
                      <h1><i class="fas fa-user-friends nav-icon"></i>Antecedentes del proyecto</h1>
                    </div>
                </section>
          </div> 
          {
             rol==="Egresado" || rol==="Estudiante inactivo"?(
           <></>
              ) :(
                <NavLink className="btn btn-info" style={{width: "31%", margin: "10px 1% 1em"}} to={"/AgregarAntecedente/"+this.props.id} >Agrega un antecente</NavLink>
                )
           }
              {this.state.status === true &&
            (
              this.state.proyectos.map((pro) => {
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
                              <th style={{ width: '1%' }}>
                                # ID
                              </th>
                              <th style={{ width: '15%' }}>
                                Titulo
                              </th>               
                              <th style={{width: '15%'}}>
                                Descripcion
                              </th>
                              <th style={{width: '15%'}}>
                              fecha de inicio
                              </th>
                              
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                # {pro.id}
                              </td>
                              <td>
                                <a>
                                {pro.titulo}
                                </a>
                                <br />
                              </td>
                              
                              <td className="project_progress">
                                <a>
                                {pro.descripcion}
                                </a>
                              </td>
                              <td className="project_progress">
                                <a>
                                {pro.estado}
                                </a>
                              </td>
                              <td className="project-actions text-right" style={{width: '40%'}}>
                              <div className=" mt-3 pb-3 mb-3 d-flex">
                              {/* <NavLink to={"/DetallesGruposInvestigacion/" + proye.id} className="btn btn-primary">Detalles</NavLink> */}
                              <NavLink style={{width: '50%'}} className="btn btn-success" to={"/DetalleProyectoGrado/" + pro.id} >Detalles</NavLink>
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
            </li>
    
                        </ul>
                         
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