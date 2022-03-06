import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';

export default class ActualizarClaseMateria extends Component {

    cajaNumeroRef = React.createRef();
    cajaNombreRef = React.createRef();
    cajaSemestreRef = React.createRef();
    cajaMateriaRef = React.createRef();
    cajaProfesorRef = React.createRef();

    state = {
        status: false,
        materias: [],
        mate: [],
        clase: {}
    }

    nuevaClase = (e) => {
        e.preventDefault();
        var num = this.cajaNumeroRef.current.value;
        var nom = this.cajaNombreRef.current.value;
        var sem = this.cajaSemestreRef.current.value;
        var mat = this.cajaMateriaRef.current.value;
        var pro = this.cajaProfesorRef.current.value;
        var clase = {
            numero: num
            , nombre: nom
            , semestre: sem
            , materia: mat
            , profesor: pro
        };
        var url = 'http://localhost:8080/gestioninstitucional/modificarclase';
        axios.post(url, clase).then(res => {
            this.setState({ status: true });

            if (res.data.respuesta === "la clase fue actualizada") {
                alert("la clase fue actualizada")
                window.history.back();
            } else if (res.data.respuesta === "el usuario que escogio es un Estudiante inactivo") {
                alert("el usuario que escogio es un Estudiante inactivo")

            } else if (res.data.respuesta === "el usuario que escogio es un Estudiante activo") {
                alert("el usuario que escogio es un Estudiante activo")

            } else if (res.data.respuesta === "el usuario que escogio es un Semillerista") {
                alert("el usuario que escogio es un Semillerista")

            } else {
                alert("no se pudo actualizar la clase")

            }
        });
    }

    Cargar = () => {
        var programa = localStorage.getItem("programa");
        var request = "/gestioninstitucional/listarmateriasdeprograma/" + programa;
        var url = "http://localhost:8080" + request;
        axios.get(url).then(res => {
            this.setState({
                materias: res.data
                , status: true
            })
        });
    }

    Cargardos = () => {
        var request = "/gestioninstitucional/claseid/" + this.props.numero;
        var url = "http://localhost:8080" + request;
        axios.get(url).then(res => {
            this.setState({
                clase: res.data
                , status: true
            })
        });
    }
    componentDidMount = () => {
        this.Cargar();
        this.Cargardos();
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
                    <section className="content">

                        <div className="container-fluid">
                            <div className="row">
                                {/* left column */}
                                <div className="col-md-12">
                                    {/* general form elements */}
                                    <div className="card card-primary">
                                        <div className="card-header" style={{ align: "center" }}>
                                            <h3 className="card-title"  >Actualizar Clase</h3>
                                        </div>

                                        {/* /.card-header */}
                                        {/* form start */}
                                        <form onSubmit={this.nuevaClase} style={{ width: "50%", margin: "auto" }}>
                                            <div className="card-body">
                                                <div className="form-group">

                                                    <label htmlFor="exampleInputEmail1">Numero de la clase: {this.state.clase.numero} </label>
                                                    <input type="text" name="cajanom" className="form-control" value={this.props.numero} placeholder="Numero" ref={this.cajaNumeroRef} readOnly />
                                                </div>
                                                <div className="form-group">

                                                    <label htmlFor="exampleInputPassword1">Nombre de la Clase actual: {this.state.clase.nombre}</label>
                                                    <input type="text" name="cajadir" className="form-control" placeholder={this.state.clase.nombre} ref={this.cajaNombreRef} />
                                                </div>
                                                {/** 
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Semestre</label>
                            <input type="text" name="cajatel" className="form-control" placeholder="Semestre" ref={this.cajaSemestreRef}/>
                        </div>*/}

                                                <div className="form-group">

                                                    <label htmlFor="exampleInputPassword1">Semestre de la clase actual: {this.state.clase.semestre}</label>
                                                    <select className="form-control select2" style={{ width: '100%' }} ref={this.cajaSemestreRef} >
                                                        <option selected="selected">{this.state.clase.semestre}</option>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                        <option>6</option>
                                                        <option>7</option>
                                                        <option>8</option>
                                                        <option>9</option>
                                                        <option>10</option>


                                                    </select>
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1" style={{ color: "red" }}>*</label>
                                                    <label style={{ width: '50%' }} htmlFor="exampleInputPassword1">Materias que tienes en tu programa: {this.state.clase.materia}</label>
                                                    <select ref={this.cajaMateriaRef} style={{ width: '50%', height: "30px" }} >
                                                        <option disabled selected value={this.state.clase.materia_id}>{this.state.clase.materia}</option>
                                                        {
                                                            (this.state.materias.map((mate) => {
                                                                return (
                                                                    <option key={mate.catalogo} value={mate.catalogo}> {mate.catalogo}:{mate.nombre}</option>

                                                                );

                                                            })

                                                            )}

                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1" style={{ color: "red" }}>*</label>
                                                    <label htmlFor="exampleInputPassword1">Profesor actual: {this.state.clase.profesor}</label>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputPassword1" style={{ color: "red" }}>Si desea actualizar el profesor ingrese la cedula</label>
                                                        <input type="text" name="cajatel" className="form-control" placeholder="Profesor" ref={this.cajaProfesorRef} />
                                                    </div>
                                                </div>

                                            </div>
                                            {/* /.card-body */}
                                            <div className="card-footer">
                                                <button className="btn btn-success">Enviar</button>
                                            </div>
                                        </form>
                                    </div>
                                    {/* /.card */}
                                </div>
                                {/*/.col (right) */}
                            </div>
                            {/* /.row */}
                        </div>{/* /.container-fluid */}
                    </section>
                </div>
            </div>
        )
    }
}
