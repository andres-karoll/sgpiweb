import React, { Component } from 'react';
import axios from 'axios';
import { NavLink, Redirect } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';

export default class DesAsignarUsuario extends Component {

    cajaUsuarioRef = React.createRef();

    state = { status: false }

    nuevaAsignacion = (e) => {
        e.preventDefault();
        var usu = this.cajaUsuarioRef.current.value;
        var asignacion = {
            cedula: usu
        };
        var url = 'http://localhost:8080/gestioninstitucional/desasignarsemillero';
        axios.post(url, asignacion).then(res => {
            this.setState({ status: true });
            if (res.data.respuesta==="el usuario fue asignado exitosamente") {
                alert("el usuario fue asignado exitosamente")
               // window.location.href = "/Semilleros";
            }else{
              alert("el usuario NO fue asignado exitosamente")
             // window.location.href = "/Semilleros";
            }
        });
    }
    render() {
        if(this.state.status === true){
         return <Redirect to="/Semilleros"/>
        }
        return (
            <div>
                <Aside/>
                <Header/>
            <div className="content-wrapper">
                <div className="card card-info">
                <div className="card-header">
                    <h3 className="card-title">Des-asignar usuario del semillero</h3>
                </div>
                {/* /.card-header */}
                {/* form start */}
                <form onSubmit={this.nuevaAsignacion} className="form-horizontal">
                    <div className="card-body">
                    <div className="form-group row">
                    <label  style={{color: "red"}}>*</label>
                        <label style={{width: '50%'}} className="col-sm-6 col-form-label">Ingrese la cedula del usuario que quiere sacar de este semillero</label>
                        <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputEmail3" placeholder="Cedula" ref={this.cajaUsuarioRef} required/>
                        </div>
                        </div>

                    </div>
                    {/* /.card-body */}
                    <div className="card-footer">
                    <button type="submit" className="btn btn-success">Enviar</button>
                    <NavLink to="/Semilleros" className="btn btn-danger">Cancelar</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    {/* /.card-footer */}
                </form>
                </div>
            </div>
            </div>

        )    
    }
}
