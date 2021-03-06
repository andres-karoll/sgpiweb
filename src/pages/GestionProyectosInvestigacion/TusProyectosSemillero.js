import React, { Component } from 'react';
import axios from 'axios';


import { NavLink,Link } from 'react-router-dom';
import Aside from '../../components/Global/Aside';
import Header from '../../components/Global/Header';
import swal from 'sweetalert';
export default class TusProyectosSemillero extends Component {

  state = {
status: false,
    proyectos:[]
  }
  /**
   * definicion de variables
   */
  cajaSemillero = React.createRef();
  /**
   * metodo de carga de proyectos
   */
  cargarProyecto= () => {
    var url = "http://localhost:8080";
    var request = "/gestionproyectosinvestigacion/tusProyectosSemillero/" +localStorage.getItem("cedula");
    axios.get(url + request).then(res => {
      this.setState({
        proyectos: res.data
        , status: true
      });
    });
    
  }
  /**
   * metodo para salir de un semillero 
   */
  salirSemillero=()=>{
  
    var url="http://localhost:8080/gestionproyectosinvestigacion/salirSemillero/";
    var sem = this.cajaSemillero.current.value;
    var salida={
      cedula:localStorage.getItem("cedula"),
      semillero:sem
    }
    axios.post(url,salida).then(res => {
      this.setState({ status: true });
      if (res.data.respuesta === "Se realizo la validacion exitosamente") {
        swal({
          title:'Ya estas incrito a un semillero, por favor ingresa vuelve a iniciar sesion con el rol de semillerista',
          icon:"success"
        }); 
          localStorage.removeItem('cedula');
          localStorage.removeItem('tipo');
          localStorage.clear();
          window.location.href = "/";
      } else {
        swal({
          title:"no se pudo salir del semillero",
          icon:"error"
        }); 
          window.history.back();
      }
  });

  }
/**
 * metodo de inicio
 */
  componentDidMount = () => {
    this.cargarProyecto();
    //this.cargarLineas();

  }

  render() {
    var rol= localStorage.getItem("tipo")
    return (
    <div>
      <Aside/>
      <Header/>
      <div className="content-wrapper">
      <div>
            <section className="content">
                <br />
                <div class="alert alert-info alert-dismissible">
                  <h1><i class="fas fa-eye nav-icon"></i>Tus proyectos semillero</h1>
                  </div>
                  </section>
      </div>
      {
             rol==="Egresado"?(
           <></>
              ) : rol==="Estudiante activo" ||rol==="Estudiante inactivo"?(
                <></>
              )
                :(
                <NavLink className="btn btn-info" style={{width: "31%", margin: "10px 1% 1em"}} to={"/CrearProyectoSemillero"} >crear un proyecto</NavLink>
                )
           }
               {/* <button className="btn btn-info" style={{width: "31%", margin: "10px 1% 1em"}}  onClick={this.salirSemillero} >Salir de semillero</button>
           */}
      {this.state.status === true &&
        (
          this.state.proyectos.map((pro, i) => {
           
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
                           Titulo del proyecto
                          </th>               
                          <th style={{ width: '25%' }}>
                            Descripci??n
                          </th>
                          <th style={{ width: '10%' }}>
                            Estado
                          </th>
                          <th style={{ width: '10%' }}>
                          semillero
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                 
                          <td>
                          {pro.titulo}
                          </td>
                          <td>
                          {pro.descripcion}
                          </td>
                          <td>
                          {pro.estado}
                          </td>
                          <td>
                          {pro.semillero}
                          </td>
                          <td className="project-actions text-right">
                            <input type='hidden' value={pro.semillero} ref={this.cajaSemillero}/>
                          <NavLink to={"/DetallesProyectoSemillero/" + pro.id} className="btn btn-primary">Detalles</NavLink>
                          <NavLink className="btn btn-success" to={"/PresupuestoProyecto/" + pro.id} >Presupuesto</NavLink> 
                          <NavLink className="btn btn-warning" to={"/ProductosProyecto/" + pro.id} >Productos</NavLink>
                          
                          
                            
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

            
            <Link to={"/SubirProductos/" + pro.id}>
            <li className="nav-item">
              <a  className="nav-link">
                <i className="fas fa-file-upload nav-icon" />
                
                <p>Subir Productos</p>
                 
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