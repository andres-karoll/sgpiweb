import React, { Component, useState, useEffect} from 'react';
import axios from 'axios';
import { NavLink, Link} from 'react-router-dom';

import { prettyDOM } from '@testing-library/dom';


//loading
import Loading from "../Loadings/Loading"

function Proyectos(){
    const [proyectos, setproyectos] = useState([]);
    const [tablaproyectos, settablaproyectos] = useState([]);
    const [busqueda, setbusqueda] = useState("");
  
    const peticionGet = async()=>{
        await axios.get("http://localhost:8080/gestionfiltroproyecto/listarproyectosvisibles")
        .then(response=>{
            setproyectos(response.data);
            settablaproyectos(response.data);
            setLoading(true);
        }).catch(error=>{
            console.log(error);
        })
    }
    const handleChange=e =>{
        setbusqueda(e.target.value);
        filtrar(e.target.value);
    }


    const filtrar = (terminoBusqueda)=>{
        var ResultadosBusqueda = tablaproyectos.filter((elemento)=>{
            if(elemento.titulo.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            ||elemento.estado.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            ||elemento.nombre.toString().includes(terminoBusqueda.toLowerCase())){
                return elemento;
            }
        });
        setproyectos(ResultadosBusqueda);
    }
    
    const [loading,setLoading] = useState(false);

    const cambiarEstado=()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
            
        },2000);
    }

    useEffect(() => {
      cambiarEstado();
        peticionGet();
    }, [])
    if(loading){
      return(
          <Loading/>
      )
  }else{
    return (
     
      
      <div className="card card-primary card-outline " style={{ width: '90%', marginLeft:"auto", marginRight:"auto", }}>
       
      <div className="card-body box-profile">
            <section className="content">
                <br />
                <div class="alert alert-info alert-dismissible">
                  <h1>Todos los proyetos publicos</h1>
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
                            Fecha Final
                          </th>              
                          <th style={{width: '40%'}}>
                            Descripción
                          </th>
                          <th style={{ width: '5%' }} className="text-center">
                            Estado
                          </th>
                          <th style={{ width: '5%' }} className="text-center">
                            Visibilidad
                          </th>
                          <th style={{width: '10%'}}>
                            Area de conocimiento
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
                            
                              Metodologia: {proye.metodologia}
                           
                          </td>
                          
                          <td className="project_progress">
                           
                              {proye.fecha_fin}
                            
                          </td>
                          <td className="project_progress">
                           
                              {proye.descripcion}
                            
                          </td>
                          <td className="project-state">
                            <span className="badge badge-success">{proye.estado}</span>
                          </td>
                          
                          <td className="project-state">
                            <span className="badge badge-success">{proye.visibilidad}</span>
                          </td>
                          <td className="project_progress">         
                          <span className="badge badge-success">{proye.nombre}</span>  
                          </td>

                          <td className="project-actions text-right">                       
                          <NavLink className="btn btn-warning" to={"/ProductosProyectoVisible/" + proye.id} >Productos</NavLink>
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
    );}
}

export default Proyectos