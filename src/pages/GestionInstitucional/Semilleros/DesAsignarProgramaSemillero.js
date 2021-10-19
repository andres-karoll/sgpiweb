import React, { Component } from 'react';
import axios from 'axios';
import { NavLink, Redirect } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';

export default class DesAsignarProgramaSemillero extends Component {

    cajaSemilleroRef = React.createRef();
    cajaProgramaRef = React.createRef();

    state = { programa: [],status: false }

    nuevaAsignacion = (e) => {
        e.preventDefault();
        var semi = this.cajaSemilleroRef.current.value;
        var pro = this.cajaProgramaRef.current.value;
        var asignacion = {
            programa: pro
            , semillero: semi
        };
        var url = 'http://localhost:8080/gestioninstitucional/desasignarsemilleroaprograma';
        axios.post(url, asignacion).then(res => {
            this.setState({ status: true });
        });
    }

      

    render() {
        if(this.state.status === true){
            return <Redirect to="/Semilleros"/>
        }
        return (
            <div>
                <Aside/>
                <Header/>
            <div className="content-wrapper">
                <div className="card card-info">
                <div className="card-header">
                    <h3 className="card-title">DES-Asignar programa al Semillero</h3>
                </div>
                {/* /.card-header */}
                {/* form start */}
                <form onSubmit={this.nuevaAsignacion} className="form-horizontal">
                    <div className="card-body">
                    <div className="form-group row">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Semillero</label>
                        <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputEmail3" value = {this.props.id} placeholder="Semillero" ref={this.cajaSemilleroRef} readOnly/>
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
                    <NavLink to="/Semilleros" className="btn btn-danger">Cancelar</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    {/* /.card-footer */}
                </form>
                </div>
            </div>
            </div>

        )    
    }
}
