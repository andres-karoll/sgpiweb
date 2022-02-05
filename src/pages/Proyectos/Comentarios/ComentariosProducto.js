import React, { Component } from 'react';
import axios from 'axios';

import { NavLink, Link } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';

export default class ComentariosProducto extends Component {

  state = {
status: false,
    comentarios:[]
  }

  cargarComentarios= () => {
    var url = "http://localhost:8080";
    var request = "/productos/listarcomentariosporproducto/" +this.props.id;
    axios.get(url + request).then(res => {
      this.setState({
       comentarios: res.data
        , status: true
      });
      if (this.state.comentarios.length === 0) {
        alert("este producto no tiene comentarios")
        window.history.back();
    }
    });
    
  }

  componentDidMount = () => {
    this.cargarComentarios();
    //this.cargarLineas();

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
                  <h1><i class="fas fa-comments nav-icon"></i>Comentarios</h1>
                  </div>
                  </section>
      </div>

      <div className="wrapper">
<aside className="control-sidebar control-sidebar-dark">
{/* Control sidebar content goes here */}
</aside>
{/* /.control-sidebar */}
</div>

      {this.state.status === true &&
        (
          this.state.comentarios.map((com, i) => {
           
            return (
<div className="content-wrapper"> 

        <div className="col-md-8" style={{ width: '100%', float: "left"}}>
  {/* Widget: user widget style 1 */}
  
  <div className="card card-widget widget-user-2">
  
    
    <div className="widget-user-header bg-info">
    <div className="widget-user-image">
  <img className="img-circle elevation-2" src="https://i.ibb.co/8KQN8vD/mensaje-de-vigilancia-2.png" alt="User Avatar" />
</div>
<h3 class="widget-user-username">Comentario</h3>

    </div>
    
    <div className="card-footer">
      <div className="row">
          <h2 style={{ width: '90%', margin:"20px", }}>{com.comentario}</h2>
        <div className="col-sm-6 border-right">
          <div className="description-block">
            <h5 className="description-header">Fecha</h5>
            <h4 className="description-text">{com.fecha}</h4>
          </div>
          {/* /.description-block */}
        </div>
        {/* /.col */}
        <div className="col-sm-6 border-right">
          <div className="description-block">
            <h5 className="description-header">Nota</h5>
            <h4 className="description-text">{com.calificacion}</h4>
          </div>
          {/* /.description-block */}
        </div>
        {/* /.col */}
        <div className="col-sm-4">
          <div className="description-block">
            <h5 className="description-header">Fase</h5>
            <h4 className="description-text">{com.fase}</h4>
          </div>
          {/* /.description-block */}
        </div>
        <div className="col-sm-4">
          <div className="description-block">
            <h5 className="description-header">ID</h5>
            <h4 className="description-text">{com.id}</h4>
          </div>
          {/* /.description-block */}
        </div>
        <div className="col-sm-4">
          <div className="description-block">
            <h5 className="description-header">Nivel</h5>
            <h4 className="description-text">{com.nivel}</h4>
          </div>
          {/* /.description-block */}
        </div>
        {/* /.col */}
      </div>
      <NavLink to={"/ActualizarComentario/" + com.id} style={{width: "50%"}} className="btn btn-primary">Actualizar Comentario</NavLink>
    <NavLink className="btn btn-danger" to={"/EliminarComentario/" + com.id}  style={{width: "50%" }}>Eliminar Comentario</NavLink>
      {/* /.row */}
    </div>
    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <li className="nav-item">
          <a href="#" className="nav-link ">
            <i className="fas fa-lightbulb nav-icon" />        
            <p>
              Calificación
              <i className="right fas fa-angle-left" />
            </p>
                      
          </a>
          <ul className="nav nav-treeview">
            <Link to={"/AsignarNota/" + com.id}>
            <li className="nav-item">
              <a  className="nav-link">
                <i className="fas fa-clipboard-check nav-icon" />               
                <p>Asignar Calificación</p>                
              </a>
            </li>
            </Link>   
          </ul>
          <ul className="nav nav-treeview">
            <Link to={"/DesAsignarNota/" + com.id}>
            <li className="nav-item">
              <a  className="nav-link">
                <i className="fas fa-trash-alt nav-icon" />               
                <p>DES-Asignar Calificación</p>                
              </a>
            </li>
            </Link>   
          </ul>
        </li>
                    </ul>
  </div>

</div>
</div>
            );
        })
      )}
</div>

</div>
)
}
}