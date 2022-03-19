import React, { Component } from 'react';
import axios from 'axios';
import { NavLink, Redirect } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
import swal from 'sweetalert';
export default class AsignarProgramaGrupoI extends Component {

    cajaGrupoRef = React.createRef();
    cajaProgramaRef = React.createRef();

    state = { status: false, programas: [] }
//metodo para asignar un programa a un grupo de investigacion asignando las variables del JSON
    nuevaAsignacion = (e) => {
        e.preventDefault();
        var grupoi = this.cajaGrupoRef.current.value;
        var progra = this.cajaProgramaRef.current.value;
        var asignacion = {
            programa: progra
            , grupo_investigacion: grupoi
        };
        var url = 'http://localhost:8080/gestioninstitucional/asignarprogramaagrupo';
        axios.post(url, asignacion).then(res => {
            this.setState({ status: true });
            if (res.data.respuesta === "se asigno el programa correctamente") {
                swal({
                    title: "se asigno el programa correctamente",
                    icon:"success"
                  });
                window.location.href = "/GruposInvestigacion";
            } else {
                alert("no se pudo asignar el programa correctamente")
                window.location.href = "/GruposInvestigacion";
            }
        });
    }
    //funcion para listar los programas 
    Cargar = () => {
        var request = "/gestioninstitucional/listarprogramas";
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
            //return <Redirect to="/GruposInvestigacion" />
        }
        return (
            <div>
                <Aside />
                <Header />
                <div className="content-wrapper">
                    <div className="card card-info">
                        <div className="card-header">
                            <h3 className="card-title">Asignar Programa al grupo de investigación</h3>
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
                                {/** 
                    <div className="form-group row">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Programa</label>
                        <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputPassword3" placeholder="Programa" ref={this.cajaProgramaRef}/>
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
