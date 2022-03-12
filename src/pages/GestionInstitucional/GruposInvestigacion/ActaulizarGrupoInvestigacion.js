import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';

export default class InsertarGrupoInvestigacion extends Component {
    cajaIDRef = React.createRef();
    cajaNombreRef = React.createRef();
    cajaFecha_funRef = React.createRef();
    cajaCategoriaRef = React.createRef();
    cajaFecha_catRef = React.createRef();
    cajaLiderRef = React.createRef();

    state = {
        status: false,
        gruposi: [],
        proyecto: {}
    }
//funcion para actualizar el grupo de investigacion asignando las variables del JSON
    actualizarGrupoInvestigacion = (e) => {
        e.preventDefault();
        var idgrupo = parseInt(this.cajaIDRef.current.value);
        var nom = this.cajaNombreRef.current.value;
        var fe_fun = this.cajaFecha_funRef.current.value;
        var cat = this.cajaCategoriaRef.current.value;
        var fe_cat = this.cajaFecha_catRef.current.value;
        var lid = this.cajaLiderRef.current.value;

        var grupo = {
            id: this.props.id
            , nombre: nom
            , fechaFun: fe_fun
            , categoria: cat
            , fechaCat: fe_cat
            , director: lid
        };
        console.log(grupo);
        var url = 'http://localhost:8080/gestioninstitucional/modificargrupoi';
        axios.post(url, grupo).then(res => {
            this.setState({ status: true });
            if (res.data.respuesta === "el grupo fue actualizado") {
                alert("se actualizó el grupo de investigación")
                window.location.href = "/GruposInvestigacion";
            } else if (res.data.respuesta === "el grupo no se creo porque el usuario que escogio es un estudiante inactivo") {
                alert("El grupo no se creó porque el usuario que escogió es un estudiante inactivo")
                window.location.href = "/GruposInvestigacion";
            } else if (res.data.respuesta === "el grupo no se creo porque el usuario que escogio es un estudiante activo") {
                alert("El grupo no se creó porque el usuario que escogió es un estudiante activo")
                window.location.href = "/GruposInvestigacion";
            } else if (res.data.respuesta === "el grupo no se creo porque el usuario que escogio es un Semillerista") {
                alert("El grupo no se creo porque el usuario que escogio es un Semillerista")
                window.location.href = "/GruposInvestigacion";
            } else if (res.data.respuesta === "el usuario ingresado no existe") {
                alert("el usuario ingresado no existe")
                window.location.href = "/GruposInvestigacion";
            } else {
                alert("no se pudo actualizar el grupo de investigación")
                window.location.href = "/GruposInvestigacion";
            }
        });
    }
//funcion para obtener informacion del grupo
    cargar = () => {
        var request = "/gestioninstitucional/grupolistarporid/" + this.props.id;
        var url = "http://localhost:8080" + request;
        axios.get(url).then(res => {
            this.setState({
                proyecto: res.data
                , status: true
            });
        });
    }

    componentDidMount = () => {
        this.cargar();
    }

    render() {
        return (
            <div>
                <Aside />
                <Header />
                {this.state.status === true &&
                    (
                        <React.Fragment>

                            <div>

                                <div className="content-wrapper">
                                    <section className="content">

                                        <div className="container-fluid">
                                            <div className="row">
                                                {/* left column */}
                                                <div className="col-md-12">
                                                    {/* general form elements */}
                                                    <div className="card card-primary">
                                                        <div className="card-header" style={{ align: "center" }}>
                                                            <h1 className="card-title"  >Actualizar el grupo de investigacion</h1>
                                                        </div>

                                                        {/* /.card-header */}
                                                        {/* form start */}
                                                        <form onSubmit={this.actualizarGrupoInvestigacion} style={{ width: "50%", margin: "auto" }}>
                                                            <div className="card-body">
                                                                <div className="form-group">
                                                                    <input type="hiden" name="cajanom" className="form-control" value={this.props.id} ref={this.cajaIDRef} readOnly />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label htmlFor="exampleInputPassword1">Nombre del grupo de investigación: {this.state.proyecto.nombre}</label>
                                                                    <input type="text" name="cajadir" className="form-control" placeholder={this.state.proyecto.nombre} ref={this.cajaNombreRef} />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label htmlFor="exampleInputPassword1" style={{ width: '50%' }}>Fecha de fundación: {this.state.proyecto.fecha_fun}</label>
                                                                    {/*<input type="text" name="cajatel" className="form-control" placeholder="Fecha fun" ref={this.cajaFecha_funRef} />*/}
                                                                    <input type="date" id="start" name="trip-start" style={{ height: "30px" }}
                                                                        min="2000-01-01" max="2100-12-31" ref={this.cajaFecha_funRef} ></input>
                                                                </div>
                                                                <div className="form-group">
                                                                    <label htmlFor="exampleInputPassword1">Categoria: {this.state.proyecto.categoria}</label>
                                                                    <input type="text" name="cajatel" placeholder={this.state.proyecto.categoria} className="form-control" ref={this.cajaCategoriaRef} />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label htmlFor="exampleInputPassword1" style={{ width: '50%' }}>Fecha de la categoria del grupo: {this.state.proyecto.fecha_cat}</label>
                                                                    {/*<input type="text" name="cajatel" className="form-control" placeholder="Fecha cat" ref={this.cajaFecha_catRef} />*/}
                                                                    <input type="date" id="start" name="trip-start" style={{ height: "30px" }}
                                                                        min="2000-01-01" max="2100-12-31" ref={this.cajaFecha_catRef}></input>
                                                                </div>
                                                                <div className="form-group">

                                                                    <label htmlFor="exampleInputPassword1">Cedula del lider: {this.state.proyecto.director_grupo}</label>
                                                                    <div className="form-group">
                                                                        <label htmlFor="exampleInputPassword1" style={{ color: "red" }}>Si desea actualizar del lider ingrese la cedula</label>
                                                                        <input type="number" name="cajatel" className="form-control" placeholder={this.state.proyecto.director_grupo} ref={this.cajaLiderRef} />
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
                        </React.Fragment>
                    )}
            </div>
        )
    }
}
