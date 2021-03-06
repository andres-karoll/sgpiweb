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

            rol==="Egresado" || rol==="Estudiante inactivo" || rol==="Admin"|| rol==="Personal publicaciones" || rol==="Personal biblioteca"  || rol==="Lider grupo investigacion" || rol==="Coordinador investigacion facultad"||
            rol==="Profesional investigacion" ||  rol==="Direccion investigacion corporativo" || rol==="Director programa"?(
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
                  
    <NavLink style={{width: '50%'}} className="btn btn-success" to={"/Detalles/" + pro.id} >Detalles</NavLink>
 
                              
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