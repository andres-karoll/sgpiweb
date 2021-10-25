import React, { Component } from 'react'
import Cookies from 'universal-cookie'
import axios from 'axios';
import { Redirect, NavLink } from 'react-router-dom';

export default class ModificarPerfil extends Component {

    cajaTelefono = React.createRef();
    cajaCorreoPersonal = React.createRef();
    cajaClave = React.createRef();
    cajaCedula = React.createRef();
    state = { status: false }

    modificarUsuario = (e) => {
        e.preventDefault();
        var tel = this.cajaTelefono.current.value;
        var correoP = this.cajaCorreoPersonal.current.value;
        var cla = this.cajaClave.current.value;
        var ced =this.cajaCedula.current.value;
        var usuario = {
            cedula: ced
            , telefono: tel
            , correoP: correoP
            , clave: cla
        };
        var request = "http://localhost:8080/gestionusuario/modificarusuario/" ;
        var url =  request;
        axios.post(url, usuario).then(res => {
            this.setState({status: true});
        });
    }
    buscarPefil=()=>{
        
    }
    render() {
        return (
            <div>
                <form onSubmit={this.modificarUsuario} style={{width: "50%", margin: "auto"}}>
                <label>Cedula: </label>
                    <input type="number" name="cajanum" className="form-control" ref={this.cajaCedula}
                        value={this.props.id} readOnly />
                    <label>Telefono: </label>
                    <input type="text" name="cajanom" className="form-control" ref={this.cajaTelefono} />
                    <label>Correo Personal: </label>
                    <input type="text" name="cajadir" className="form-control" ref={this.cajaCorreoPersonal} />
                    <label>Contraseñan: </label>
                    <input type="text" name="cajatel" className="form-control" ref={this.cajaClave} /><br />
                    <button className="btn btn-success">Modificar</button>
                </form>
            </div>
        )
    }
}
