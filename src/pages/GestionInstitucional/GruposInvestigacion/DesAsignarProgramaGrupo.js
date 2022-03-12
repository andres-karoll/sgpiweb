import React, { Component } from 'react';
import axios from 'axios';
import { NavLink, Redirect } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
import { Link } from 'react-router-dom';

export default class DesAsignarLineaGrupoI extends Component {

    cajaGrupoRef = React.createRef();
    cajaProgramaRef = React.createRef();

    state = { programas: [], status: false }
//funcion para desasignar la linea de un grupo de investigacion 
    nuevaDesAsignacion = (e) => {
        e.preventDefault();
        var grupoi = this.cajaGrupoRef.current.value;
        var pro = this.cajaProgramaRef.current.value;
        var desasignacion = {
            programa: pro
            , grupo_investigacion: grupoi
        };
        var url = 'http://localhost:8080/gestioninstitucional/desasignarprogramaagrupo';
        axios.post(url, desasignacion).then(res => {
            this.setState({ status: true });
            if (res.data.respuesta === "se desasigno el programa correctamente") {
                alert("se desasigno el programa correctamente")
                window.location.href = "/GruposInvestigacion";
            } else {
                alert("no se pudo desasignar el programa correctamente")
                window.location.href = "/GruposInvestigacion";
            }
        });
    }
    //funcion para ontener la lista de lineas del grupo de investigacion
    Cargar = () => {
        var request = "/gestioninstitucional/listarprogramadelgrupo/" + this.props.id;
        var url = "http://localhost:8080" + request;
        axios.get(url).then(res => {
            this.setState({
                programas: res.data
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
                            <h3 className="card-title">DES-Asignar Programa al grupo de investigación</h3>
                        </div>
                        {/* /.card-header */}
                        {/* form start */}
                        <form onSubmit={this.nuevaDesAsignacion} className="form-horizontal">
                            <div className="card-body">
                                <div className="form-group row">
                                    <div className="col-sm-10">
                                        <input type="hidden" className="form-control" id="inputEmail3" value={this.props.id} placeholder="Grupo de investigación" ref={this.cajaGrupoRef} readOnly />
                                    </div>
                                </div>
                                {/** 
                    <div className="form-group row">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Programa</label>
                        <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputPassword3" placeholder="Linea de investigación" ref={this.cajaProgramaRef}/>
                        </div>
                    </div>
                    */}

                                <div className="form-group row">
                                    <label htmlFor="exampleInputPassword1" style={{ color: "red" }}>*</label>
                                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Programa</label>
                                    <div className="col-sm-10">
                                        <select ref={this.cajaProgramaRef} style={{ width: '50%', height: "30px" }}>
                                            {this.state.status === true &&

                                                (this.state.programas.map((pro) => {
                                                    return (
                                                        <option value={pro.id}>{pro.nombre}</option>
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
