import React, { Component } from 'react';
import axios from 'axios';
import { NavLink, Redirect } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';

export default class AsignarLineaGrupoI extends Component {

    cajaGrupoRef = React.createRef();
    cajaLineaRef = React.createRef();

    state = { lineas: [], status: false }
//funcion para asignar una linea a un grupo, asignando las variables del JSON
    nuevaAsignacion = (e) => {
        e.preventDefault();
        var grupoi = this.cajaGrupoRef.current.value;
        var lineai = this.cajaLineaRef.current.value;
        var asignacion = {
            linea_investigacion: lineai
            , grupo_investigacion: grupoi
        };
        var url = 'http://localhost:8080/gestioninstitucional/asignarlineaagrupo';
        axios.post(url, asignacion).then(res => {
            this.setState({ status: true });

            if (res.data.respuesta === "se asigno la facultad correctamente") {
                alert("se asigno la facultad correctamente")
                window.location.href = "/GruposInvestigacion";
            } else {
                alert("no se pudo asignar la facultad correctamente")
                window.location.href = "/GruposInvestigacion";
            }
        });
    }
    //funcion para obtener las lineas, se agregara a "lineas"
    Cargar = () => {
        var request = "/gestioninstitucional/listarlineas";
        var url = "http://localhost:8080" + request;
        axios.get(url).then(res => {
            this.setState({
                lineas: res.data
                , status: true
            })
        });
    }
    componentDidMount = () => {
        this.Cargar();
    }


    render() {
        if (this.state.status === true) {
            // return <Redirect to="/GruposInvestigacion" />
        }
        return (
            <div>
                <Aside />
                <Header />
                <div className="content-wrapper">
                    <div className="card card-info">
                        <div className="card-header">
                            <h3 className="card-title">Asignar linea de investigación a grupo de investigación</h3>
                        </div>
                        {/* /.card-header */}
                        {/* form start */}
                        <form onSubmit={this.nuevaAsignacion} className="form-horizontal">
                            <div className="card-body">
                                <div className="form-group row">
                                    <div className="col-sm-10">
                                        <input type="hidden" className="form-control" id="inputEmail3" value={this.props.id} placeholder="Grupo de investigación" ref={this.cajaGrupoRef} readOnly />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="exampleInputPassword1" style={{ color: "red" }}>*</label>
                                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Linea de investigación</label>
                                    <div className="col-sm-10">
                                        <select ref={this.cajaLineaRef} style={{ width: '50%', height: "30px" }}>
                                            {this.state.status === true &&

                                                (this.state.lineas.map((li) => {
                                                    return (
                                                        <option value={li.id}>{li.nombre}</option>
                                                    );
                                                })
                                                )}
                                        </select>
                                    </div>
                                </div>



                            </div>
                            {/* /.card-body */}
                            <div className="card-footer">
                                <button type="submit" className="btn btn-success">Enviar</button>
                                <NavLink to="/GruposInvestigacion" className="btn btn-danger">Cancelar</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
                            </div>
                            {/* /.card-footer */}
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}
