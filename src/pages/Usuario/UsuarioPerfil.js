import React, { Component } from 'react';
import axios from 'axios';
import Aside from '../../components/Global/Aside';
import Header from '../../components/Global/Header';
import { NavLink, Link } from 'react-router-dom';

export default class UsuarioPerfil extends Component {


    state = {
      Perfil: []
      , status: false
  }

  mostrarPerfil = () => {
    var request = "/gestionusuario/buscarusuario/"+this.props.id ;
    var url = "http://localhost:8080" + request;
    axios.get(url).then(res => {
        this.setState({
            Perfil: res.data
            ,status: true
        });
    });
}

componentDidMount = () => {
  this.mostrarPerfil();
}
  render() {
    return (
      <div>
      <Aside/>
      <Header/>

      <div class="card">
        <div class="card-body row">
          <div class="col-5 text-center d-flex align-items-center justify-content-center">
            <div class="">
              <h2>Admin<strong>LTE</strong></h2>
           
            </div>
          </div>
          <div class="col-7">
            <div class="form-group">
              <label for="inputName">Name</label>
              <input type="text" id="inputName" class="form-control" />
            </div>
            <div class="form-group">
              <label for="inputEmail">E-Mail</label>
              <input type="email" id="inputEmail" class="form-control" />
            </div>
            <div class="form-group">
              <label for="inputSubject">Subject</label>
              <input type="text" id="inputSubject" class="form-control" />
            </div>
            <div class="form-group">
              <label for="inputMessage">Message</label>
              <textarea id="inputMessage" class="form-control" rows="4"></textarea>
            </div>
            <div class="form-group">
             
            </div>
          </div>
        </div>
      </div>
      <div className="content-wrapper">
      <div className="card card-primary card-outline "style={{ width: '50%', marginLeft:"auto", marginRight:"auto"}}>
      <div className="card-body box-profile">
        <div className="text-center">
          <img className="profile-user-img img-fluid img-circle" src="https://i.ibb.co/12S4G68/icon-5359553-960-720.png" alt="User profile picture" />
        </div>
        <h3 className="profile-username text-center">{this.state.Perfil.nombres}</h3>
        <ul className="list-group list-group-unbordered mb-3">
        <li className="list-group-item">
            <b style={{fontSize:"large"}}>Codigo universitario</b> <a style={{fontSize:"large"}}className="float-right">{this.state.Perfil.cod_Universitario}</a>
          </li>
          <li className="list-group-item">
          <b style={{fontSize:"large"}}>Correo Estudiantil</b> <a style={{fontSize:"large"}} className="float-right">{this.state.Perfil.correo_est}</a>
          </li>
          <li className="list-group-item">
            <b style={{fontSize:"large"}}>Telefono</b> <a style={{fontSize:"large"}} className="float-right">{this.state.Perfil.telefono}</a>
          </li>
          <li className="list-group-item">
            <b style={{fontSize:"large"}}>Programa</b> <a style={{fontSize:"large"}} className="float-right">{this.state.Perfil.programa}</a>
          </li>
          <li className="list-group-item">
            <b style={{fontSize:"large"}}>Correo Personal</b> <a style={{fontSize:"large"}} className="float-right" >{this.state.Perfil.correo_personal}</a>
    
          </li>
          <div className="card-body">
    
          </div>
        </ul>
    
        <NavLink to={"/Modificar/" + this.state.Perfil.cedula} style={{width: "50%", fontSize:"large"}} className="btn btn-primary">Actualizar perfil</NavLink>
        <NavLink className="btn btn-danger" to={"/delete/" + this.state.Perfil.nombres} style={{width: "50%", fontSize:"large"}}>Eliminar cuenta</NavLink>
      </div>
      {/* /.card-body */}

    </div>

    
    </div>
    </div>
)
}
}