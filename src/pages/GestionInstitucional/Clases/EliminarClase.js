import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, NavLink } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
import swal from 'sweetalert';
export default class EliminarClase extends Component {

    state = { status: false };
//funcion para eliminar una clase
    eliminarClase = () => {
        var request = "/gestioninstitucional/eliminarclase/" + this.props.numero;
        var url = "http://localhost:8080" + request;
        axios.get(url).then(res => {
            this.setState({ status: true });
            window.history.back();
            /*
            if (res.data.respuesta === "eliminado con Exito") {
                alert("No se pudo eliminar")


            }
            else {
                swal({
                    title: "eliminado con Exito",
                    icon:"success"
                  });
            
                
            }*/
        });

    }

    render() {
        if (this.state.status === true) {
            //return <Redirect to="/Clases" />
        }
        return (
            <div>

                <Aside />
                <Header />
                <div className="content-wrapper">
                    <div>
                        <section className="content">
                            <br />
                            <div class="alert alert-info alert-dismissible">
                                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                                <h1><i class="icon fas fa-shield-alt"></i> Alert!</h1>
                                <h2><i class="icon fas fa-exclamation"></i> ¿Esta seguro que quiere eliminar la Clase?</h2>

                                <div>
                                    <NavLink to="/Materias" className="btn btn-info">Cancelar</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <button onClick={this.eliminarClase} className="btn btn-danger">Eliminar</button>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}