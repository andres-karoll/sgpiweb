import React, { Component } from 'react';
import axios from 'axios';
import { NavLink, Redirect } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';

export default class AsignarProgramaGrupoI extends Component {

    cajaGrupoRef = React.createRef();
    cajaProgramaRef = React.createRef();

    state = { status: false }

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
        });
    }

    render() {
        if(this.state.status === true){
            return <Redirect to="/GruposInvestigacion" />
        }
        return (
            <div>
                <Aside/>
                <Header/>
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
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Grupo de investigación</label>
                        <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputEmail3" value = {this.props.id} placeholder="Grupo de investigación" ref={this.cajaGrupoRef} readOnly/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Programa</label>
                        <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputPassword3" placeholder="Programa" ref={this.cajaProgramaRef}/>
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
