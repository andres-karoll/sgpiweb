import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, NavLink } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';

export default class EliminarConvocatoria extends Component {

    state = { status: false };

    eliminarConvocatoria = () => {
        var request = "/gestioninstitucional/eliminarconvocatoria/" + this.props.id;
        var url = "http://localhost:8080" + request;
        axios.get(url).then(res => {
            this.setState({ status: true });
            if (res.data.respuesta === "no se pudo eliminar") {
                alert("no se pudo eliminar")
            }
            else {
                alert("eliminado con Exito")
                window.history.back();
            }
        });
    }

    render() {
        if (this.state.status === true) {
            return <Redirect to="/Convocatorias" />
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
                                <h2><i class="icon fas fa-exclamation"></i> ¿Esta seguro que quiere eliminar la Convocatoria?</h2>

                                <div>
                                    <NavLink to="/Convocatorias" className="btn btn-info">Cancelar</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <button onClick={this.eliminarConvocatoria} className="btn btn-danger">Eliminar</button>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}