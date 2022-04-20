import React, { Component, useState, useEffect} from 'react';
import axios from 'axios';
import { NavLink, Link} from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
import { prettyDOM } from '@testing-library/dom';

function TrabajoGradoDesarrollo(){
    const [proyectos, setproyectos] = useState([]);
    const [tablaproyectos, settablaproyectos] = useState([]);
    const [busqueda, setbusqueda] = useState("");

    const peticionGet = async()=>{
        await axios.get("http://localhost:8080/gestionproyectosinvestigacion/TrabajoGradoDesarrollo/"+localStorage.getItem("cedula"))
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
            if(elemento.titulo.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
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
                  <h1><i class=" fas fa-cubes  nav-icon"></i>Todos los proyetos en estado de Desarrollo</h1>
                  </div>
                  </section>
            </div>




            

<div>
<Link to="/TrabajoGradoInicio">
  <div style={{width: '20%'}}className="col-md-3 col-sm-6 col-12" href>
    <div className="info-box">
      <span className="info-box-icon bg-info"><i className="fas fa-address-book" /></span>
      <div className="info-box-content">
        <h4 className="info-box-text">Estado inicial</h4>
    
      </div>
      {/* /.info-box-content */}
    </div>
    {/* /.info-box */}
  </div>
  </Link>
  {/* /.col */}
  <Link to="/TrabajoGradoDesarrollo">
  <div style={{width: '20%'}} className="col-md-3 col-sm-6 col-12">
    <div className="info-box">
      <span className="info-box-icon bg-info"><i className="fas fa-running" /></span>
      <div className="info-box-content">
        <h4 className="info-box-text">En desarrollo</h4>
  
      </div>
      {/* /.info-box-content */}
    </div>
    {/* /.info-box */}
  </div>
  </Link>
  {/* /.col */}
  <Link to="/TrabajoGradoICorrecciones">
  <div style={{width: '20%'}} className="col-md-3 col-sm-6 col-12">
    <div className="info-box">
      <span className="info-box-icon bg-info"><i className="fas fa-edit" /></span>
      <div className="info-box-content">
        <h4 className="info-box-text">Correcciones</h4>
   
      </div>
      {/* /.info-box-content */}
    </div>
    {/* /.info-box */}
  </div>
  </Link>
  <Link to="/TrabajoGradoFin">
  <div style={{width: '20%'}}  className="col-md-3 col-sm-6 col-12">
    <div className="info-box">
      <span className="info-box-icon bg-info" ><i className="fas fa-check-double" /></span>
      <div className="info-box-content">
        <h4 className="info-box-text">Finalizados</h4>
   
      </div>
      {/* /.info-box-content */}
    </div>
    {/* /.info-box */}
  </div>
  </Link>
  {/* /.col */}
  <Link to="/TrabajoGradoRechazado">
  <div style={{width: '20%'}} className="col-md-3 col-sm-6 col-12">
    <div className="info-box">
      <span className="info-box-icon bg-danger"><i className="fas fa-thumbs-down" /></span>
      <div className="info-box-content">
        <h4 className="info-box-text">Rechazados</h4>
      </div>
      {/* /.info-box-content */}
    </div>
    {/* /.info-box */}
  </div>
  </Link>
  {/* /.col */}
</div>


      <div className="container-fluid">
    <div className="row"style={{width: '100%', height: "50px", padding:"5px"}}>
      <div className="col-md-8 offset-md-2 ">
          <div className="input-group">
            <input type="search" onChange = {handleChange} className="form-control form-control-lg" placeholder="Busqueda por titulo" />
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
                         
                          <th style={{ width: '20%' }}>
                            Titulo del proyecto
                          </th> 
                          <th style={{width: '30%'}}>
                            Descripcion
                          </th>
                               
                          <th style={{width: '20%'}}>
                            Tipo de proyecto
                          </th>
                          <th style={{ width: '5%' }} className="text-center">
                            Estado
                          </th>
                  
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                        
                          <td>
                            <a>
                            {proye.titulo}
                            </a>
                            <br />
                      
                          </td>
                          <td>                   
                            {proye.descripcion}
                          </td>
 
                          <td className="project_progress">
                            <small>
                              {proye.tipo_proyecto}
                            </small>
                          </td>
                          <td className="project-state">
                            <span className="badge badge-success">{proye.estado}</span>
                          </td>
                     
                          <td className="project-actions text-right">
                            
                          <NavLink style={{width: '50%'}} to={"/DetallesProyectoAI/" + proye.id} className="btn btn-primary">Detalles</NavLink>
                          <NavLink  style={{width: '50%'}} className="btn btn-success" to={"/EvaluarProyectoGrado/" + proye.id} >Evaluar</NavLink>     
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

export default TrabajoGradoDesarrollo;
