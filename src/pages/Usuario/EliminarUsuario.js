import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, NavLink } from 'react-router-dom';
import Aside from '../../components/Global/Aside';
import Header from '../../components/Global/Header';
import swal from 'sweetalert';

export default class EliminarUsuario extends Component {

    state = { status: false };
//funcion para eliminar un usuario
    eliminarusuario = () => {
       
        var request = "/gestionusuario/desasignarRoles/" + this.props.cedula;
        var url = "http://localhost:8080" + request;
        axios.get(url).then(res => {
            this.setState({ status: true });
            if (res.data.respuesta==="Se desabilito tu cuenta") {
                swal({
                    title: "Se desabilito tu cuenta",
                    icon:"success"
                  });
                
                localStorage.clear()
            }else{
                swal({
                    title: "no se pudo desabilitar",
                    icon:"error"
                  });
              window.location.href = "#";
            }
        });
        
    }

    render() {
        if(this.state.status === true){
            return <Redirect to="/" />
        }
        return (
            <div>
               
                <Aside/>
                <Header/>
            <div className="content-wrapper">
            <div>
            <section className="content">
                <br />
                <div class="alert alert-danger alert-dismissible">
                  <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                  <h1><i class="icon fas fa-shield-alt"></i> Alert!</h1>
                  <h2><i class="icon fas fa-exclamation"></i> ¿Esta seguro que quiere desabilitar su cuenta?</h2>
                  <div>
                <NavLink to="/HomeInstitucional" className="btn btn-info">Cancelar</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={this.eliminarusuario} className="btn btn-danger">Desabilitar</button>
                </div>
                  </div>
                  </section>
            </div>
                </div>
            </div>
        )
    }
}