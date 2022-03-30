import React, { Component, useState, useEffect} from 'react';
import axios from 'axios';
import { NavLink, Link} from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
import { prettyDOM } from '@testing-library/dom';

function Proyectos(){
    const [proyectos, setproyectos] = useState([]);
    const [tablaproyectos, settablaproyectos] = useState([]);
    const [busqueda, setbusqueda] = useState("");
//funcion para tener la lista de proyectos
    const peticionGet = async()=>{
        await axios.get("http://localhost:8080/gestionfiltroproyecto/listarproyectos")
        .then(response=>{
            setproyectos(response.data);
            settablaproyectos(response.data);
        }).catch(error=>{
            console.log(error);
        })
    }
    const handleChange=e =>{
        setbusqueda(e.target.value);
        filtrar(e.target.value);
    }

//proceso para filtrar mediante los diferentes campos instanciados en el if
    const filtrar = (terminoBusqueda)=>{
        var ResultadosBusqueda = tablaproyectos.filter((elemento)=>{
            if(elemento.titulo.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            ||elemento.estado.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            ||elemento.fecha_inicio.toString().includes(terminoBusqueda.toLowerCase())
            ||elemento.fecha_fin.toString().includes(terminoBusqueda.toLowerCase())){
                return elemento;
            }
        });
        setproyectos(ResultadosBusqueda);
    }


    useEffect(() => {
        peticionGet();
    }, [])
    return (
        <div>
      <Aside/>
      <Header/>
      <div className="content-wrapper">
      <div>
            <section className="content">
                <br />
                <div class="alert alert-info alert-dismissible">
                  <h1><i class=" fas fa-cubes  nav-icon"></i>Todos los proyetos en SGPI</h1>
                  </div>
                  </section>
            </div>
      <div className="container-fluid">
    <div className="row"style={{width: '100%', height: "50px", padding:"5px"}}>
      <div className="col-md-8 offset-md-2 ">
          <div className="input-group">
            <input type="search" onChange = {handleChange} className="form-control form-control-lg" placeholder="Busqueda por titulo, estado, fecha(año-mes-dia)" />
            <div className="input-group-append">
            </div>
          </div>
          </div>     
    </div>
  </div>
  
            {proyectos &&
            proyectos.map((proye)=>(

            
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
                          <th style={{ width: '20%' }}>
                            Nombre del proyecto
                          </th> 
                          <th style={{width: '10%'}}>
                            Fecha de inicio
                          </th>
                          <th style={{width: '10%'}}>
                            Fecha Final
                          </th>              
                          <th style={{width: '30%'}}>
                            Descripción
                          </th>
                          <th style={{ width: '5%' }} className="text-center">
                            Estado
                          </th>
                          <th style={{ width: '5%' }} className="text-center">
                            Visibilidad
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
                          <td className="project-state">
                            <span className="badge badge-success">{proye.visibilidad}</span>
                          </td>
                          <td className="project-actions text-right">
                            
                          <NavLink to={"/DetallesProyectoAI/" + proye.id} style={{width: '100%'}} className="btn btn-primary">Detalles</NavLink>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </section>
              ))}
              </div>
        </div>
    );
}

export default Proyectos
