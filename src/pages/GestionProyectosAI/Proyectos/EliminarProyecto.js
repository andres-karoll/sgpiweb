import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, NavLink } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';

export default class EliminarSemillero extends Component {

    state = { status: false };
    /**
     * metodo para eliminar un proyecto 
     */
    eliminarProyecto = () => {
        var request = "/gestionproyectosaulaintegrador/eliminarproyecto/" + this.props.id;
        var url = "http://localhost:8080" + request;
        axios.get(url).then(res => {
            this.setState({ status: true });
        });
    }

    render() {
        if (this.state.status === true) {
            return <Redirect to="/ProyectosAulaIntegrador/" />
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
                                <h2><i class="icon fas fa-exclamation"></i> ¿Esta seguro que quiere eliminar este proyecto?</h2>

                                <div>
                                    <NavLink to="/Semilleros" className="btn btn-info">Cancelar</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <button onClick={this.eliminarProyecto} className="btn btn-danger">Eliminar</button>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}