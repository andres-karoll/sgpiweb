import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Navar from '../../components/Navar'

import Footer from '../../components/Footer'

export default class Crearusuario extends Component {

    cajaCedula = React.createRef();
    cajacodUniversitario = React.createRef();
    cajaCorreoE = React.createRef();
    cajaClave = React.createRef();
    cajaNombre = React.createRef();
    cajaApellido = React.createRef();
    cajaTel = React.createRef();
    cajaVis = React.createRef();
    cajaCorreoP = React.createRef();
    cajaPrograma = React.createRef();
    cajaTipo = React.createRef();
    state = { status: false }

    nuevoUsuario = (e) => {
        e.preventDefault();
        var ced = this.cajaCedula.current.value;
        var codU = this.cajacodUniversitario.current.value;
        var correoE = this.cajaCorreoE.current.value;
        var clave = this.cajaClave.current.value;
        var nombre = this.cajaNombre.current.value;
        var apellido = this.cajaApellido.current.value;
        var tel = this.cajaTel.current.value;
        var vis = this.cajaVis.current.value;
        var correoP = this.cajaCorreoP.current.value;
        var programa = this.cajaPrograma.current.value;
        var tipoU = this.cajaTipo.current.value;

        var grupo = {
            cedula: ced
            , codUniversitario: codU
            , correoEst: correoE
            , contrasena: clave
            , nombres: nombre
            , apellidos: apellido
            , telefono: tel
            , visibilidad: vis
            , correoPersonal: correoP
            , programa: programa
            , tipo:tipoU
        };
        console.log(grupo);
        var url = 'http://localhost:8080/gestionusuario/guardarusuario/';
        axios.post(url, grupo).then(res => {
            this.setState({ status: true });
        });
    }

    render() {
        if (this.state.status === true) {
            return <Redirect to="/" />
        }
        return (
            <div>
                <Navar />
                <div class="py-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12" ></div>
                        </div>
                    </div>
                </div>
                <div class="py-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12" ></div>
                        </div>
                    </div>
                </div>
                <div>

                    <form onSubmit={this.nuevoUsuario} style={{ width: "50%", margin: "auto" }}>
                        <label>Cedula: </label>
                        <input type="text" name="cajaced" className="form-control" ref={this.cajaCedula} />
                        <label>Codigo Universitario: </label>
                        <input type="text" name="cajacodU" className="form-control" ref={this.cajacodUniversitario} />
                        <label>Correo Institucional : </label>
                        <input type="text" name="cajaCorreoE" className="form-control" ref={this.cajaCorreoE} />
                        <label>nombres: </label>
                        <input type="text" name="cajaNombre" className="form-control" ref={this.cajaNombre} />
                        <label>apellidos: </label>
                        <input type="text" name="cajaApellido" className="form-control" ref={this.cajaApellido} />
                        <label> Telefono: </label>
                        <input type="text" name="cajaTel" className="form-control" ref={this.cajaTel} />
                        <label> Correo Personal: </label>
                        <input type="text" name="cajaCorreoP" className="form-control" ref={this.cajaCorreoP} />
                        <label> Contraseña: </label>
                        <input type="text" name="cajaContrasena" className="form-control" ref={this.cajaClave} />
                        <label> Confirmar Contraseña: </label>
                        <input type="text" name="cajaConfirmarContrasena" className="form-control" />
                        <label> visibilidad: </label>
                        <input type="text" name="cajaVis" className="form-control" ref={this.cajaVis}/>
                        <label> programa: </label>
                        <input type="text" name="cajaprograma" className="form-control" ref={this.cajaPrograma} />
                        <label> Tipo de usuario  </label>
                        <div class="form-outline form-white mb-4">
                        
                        <select ref={this.cajaTipo}>
                        <option style={{color: "black"}}>Estudiante</option> 
                        <option style={{color: "black"}}>Profesor</option> 
                        <option style={{color: "black"}}>Administrativo</option> 
                        <option style={{color: "black"}}>Profesional de Investigacion</option>
                        <option style={{color: "black"}}>Biblioteca</option>  
                        </select>
                        </div>
                        <br />
                        <button className="btn btn-success">Añadir</button>
                    </form>
                    <Footer />
                </div>
            </div>

        )
    }
}