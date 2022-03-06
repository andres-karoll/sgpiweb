import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, NavLink } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';

export default class EliminarArea extends Component {

    state = { status: false };

    eliminarArea = () => {
        var request = "/gestioninstitucional/eliminararea/" + this.props.id;
        var url = "http://localhost:8080" + request;
        axios.get(url).then(res => {
            this.setState({ status: true });
            if (res.data.respuesta === "no se pudo eliminar") {
                alert("No se pudo eliminar")
            }
            else {
                alert("eliminado con Exito")
                window.history.back();
            }
        });

    }

    render() {
        if (this.state.status === true) {
            //window.history.back();
        }
        return (
            <div>

                <Aside />
                <Header />
                <div className="content-wrapper">
                    <div>
                        <section className="content">
                            <br />
                            <div class="alert alert-danger alert-dismissible">
                                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                                <h1 style={{ fontSize: "large" }}><i style={{ fontSize: "large" }} class="icon fas fa-shield-alt"></i> Alert!</h1>
                                <h2 style={{ fontSize: "large" }}><i style={{ fontSize: "large" }} class="icon fas fa-exclamation"></i> ¿Esta seguro que quiere eliminar la Area?</h2>

                                <div>
                                    <NavLink style={{ fontSize: "large" }} to="/AreasConocimiento" className="btn btn-info">Cancelar</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <button style={{ fontSize: "large" }} onClick={this.eliminarArea} className="btn btn-danger">Eliminar</button>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}