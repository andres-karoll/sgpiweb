
import React, { Component } from 'react';
import axios from 'axios';

import { NavLink, Link } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
export default class MacroProyectos extends Component {


    state = {
        macro: []
        , status: false
    }
    /**
     * metodo de listar macroproyectos 
     */
    MacroProyectos = () => {
        var url = "http://localhost:8080";
        var request = "/gestionproyectosaulaintegrador/macroProyectos";
        axios.get(url + request).then(res => {
            this.setState({
                macro: res.data
                , status: true
            });
        });
    }
    /**
     * definicion de variables 
     */
    cajaId = React.createRef();
    /**
     * metodo para para cerrar un macroproyecto  
     * @param {*} e 
     */
    cerrarMacro = (e) => {
        e.preventDefault();
        var id = this.cajaId.current.value;
        var macros = {
            macro: id
        };
        var url = 'http://localhost:8080/gestionproyectosaulaintegrador/cerrarMacro';
        axios.post(url, macros).then(res => {
            this.setState({ status: true });
            if (res.data.respuesta === "el macro se finalizar correctamente") {
                alert("el macro se finalizar correctamente")
                window.history.back();
            } else {
                alert("el macro no se puedo finalizar")
                window.history.back();
            }
        });
    }
    /**
     * metodo de inicio 
     */
    componentDidMount = () => {
        this.MacroProyectos();
        this.setState({ ma: this.state.macro })
    }
    render() {
        var rol = localStorage.getItem("tipo")
        return (
            <div>
                <Aside />
                <Header />
                <div className="content-wrapper">
                    <div>
                        <section className="content">
                            <br />
                            <div class="alert alert-info alert-dismissible">
                                <h1><i class="fas fa-user-friends nav-icon"></i>Macro Proyectos activos</h1>

                                <div>
                                    <NavLink style={{ width: '20%' }} className="btn btn-success" to={"/crearMacro"} >Crear Macro Proyecto</NavLink>
                                </div>
                            </div>
                        </section>
                    </div>
                    {this.state.status === true &&
                        (
                            this.state.macro.map((ma) => {
                                return (
                                    <section className="content">
                                        {/* Default box */}
                                        <div className="card">

                                            <div className="card-header">
                                                <div className="card-tools">
                                                    <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                                        <i className="fas fa-minus" />
                                                    </button>
                                                    {/* 
                          <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                            <i className="fas fa-times" />
                          </button>*/}
                                                </div>
                                            </div>
                                            <div className="card-body p-0">
                                                <table className="table table-striped projects">
                                                    <thead>
                                                        <tr>
                                                            <th style={{ width: '1%' }}>
                                                                Nombre
                                                            </th>
                                                            <th style={{ width: '15%' }}>
                                                                Descripcion
                                                            </th>
                                                            <th style={{ width: '15%' }}>
                                                                Fecha inicio
                                                            </th>
                                                            <th style={{ width: '15%' }}>
                                                                Estado
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                # {ma.nombre}
                                                            </td>
                                                            <td>
                                                                <a>
                                                                    {ma.descripcion}
                                                                </a>
                                                                <br />
                                                            </td>

                                                            <td className="project_progress">
                                                                <a>
                                                                    {ma.fecha_inicio}
                                                                </a>
                                                            </td>
                                                            <td className="project_progress">
                                                                <a>
                                                                    {ma.estado}
                                                                </a>
                                                            </td>
                                                            <td className="project-actions text-right" style={{ width: '40%' }}>
                                                            </td>
                                                            <div className=" mt-3 pb-3 mb-3 d-flex">
                                                                <input type="hidden" ref={this.cajaId} value={ma.id} />


                                                                <NavLink style={{ width: '100%' }} className="btn btn-success" to={"/ModificarMacro/" + ma.id}>Modificar Macro </NavLink>
                                                                {/* <NavLink to={"/DetallesGruposInvestigacion/" + proye.id} className="btn btn-primary">Detalles</NavLink> */}
                                                                <button style={{ width: '100%' }} className="btn btn-success" onClick={this.cerrarMacro} >Cerrar Macro </button>
                                                            </div>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            {/* /.card-body */}
                                        </div>

                                        {/* /.card */}
                                    </section>
                                )
                            })
                        )}
                </div>
            </div>
        )

    }
}