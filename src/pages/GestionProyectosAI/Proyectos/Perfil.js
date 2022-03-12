import React, { Component } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';

export default class Perfil extends Component {

  state = {
    Perfil: {}
    , status: false
  }
  /**
   * metodo que trae datos del usuario 
   */
  mostrarPerfil = () => {
    var request = "/gestionusuario/buscarusuario/" + this.props.id;
    var url = "http://localhost:8080" + request;
    axios.get(url).then(res => {
      this.setState({
        Perfil: res.data
        , status: true
      });
    });
  }
  /**
   * metodo de inicio 
   */
  componentDidMount = () => {
    this.mostrarPerfil();
  }

  render() {

    return (
      <div>
        <Header />
        <Aside />

        <div className="content-wrapper">
          <div className="card card-primary card-outline " style={{ width: '50%', marginLeft: "auto", marginRight: "auto" }}>
            <div className="card-body box-profile">
              <div className="text-center">
                <img className="profile-user-img img-fluid img-circle" src="https://i.ibb.co/12S4G68/icon-5359553-960-720.png" alt="User profile picture" />
              </div>
              <h3 className="profile-username text-center">{this.state.Perfil.nombres}</h3>
              <ul className="list-group list-group-unbordered mb-3">
                <li className="list-group-item">
                  <b style={{ fontSize: "large" }}>Codigo universitario</b> <a style={{ fontSize: "large" }} className="float-right">{this.state.Perfil.cod_Universitario}</a>
                </li>
                <li className="list-group-item">
                  <b style={{ fontSize: "large" }}>Correo Estudiantil</b> <a style={{ fontSize: "large" }} className="float-right">{this.state.Perfil.correo_est}</a>
                </li>
                <li className="list-group-item">
                  <b style={{ fontSize: "large" }}>Telefono</b> <a style={{ fontSize: "large" }} className="float-right">{this.state.Perfil.telefono}</a>
                </li>
                <li className="list-group-item">
                  <b style={{ fontSize: "large" }}>Programa</b> <a style={{ fontSize: "large" }} className="float-right">{this.state.Perfil.programa}</a>
                </li>
                <li className="list-group-item">
                  <b style={{ fontSize: "large" }}>Correo Personal</b> <a style={{ fontSize: "large" }} className="float-right" >{this.state.Perfil.correo_personal}</a>

                </li>
                <div className="card-body">

                </div>
              </ul>

              <NavLink to={"/Modificar/" + this.state.Perfil.cedula} style={{ width: "50%", fontSize: "large" }} className="btn btn-primary">Actualizar perfil</NavLink>
              <NavLink className="btn btn-danger" to={"/EliminarUsuario/" + this.state.Perfil.cedula} style={{ width: "50%", fontSize: "large" }}>Eliminar cuenta</NavLink>
            </div>
            {/* /.card-body */}

          </div>


        </div>
      </div>
    )
  }
}

