import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';

export default class InsertarEvento extends Component {

    cajaIDRef = React.createRef();
    cajaNombreRef = React.createRef();
    cajaFechaRef = React.createRef();
    cajaEstadoRef = React.createRef();
    cajaEntidadRef = React.createRef();
    cajaSitioWebRef = React.createRef();
    cajaMemoriabRef = React.createRef();

    state = {
        status: false,
        evento: {}
    }
//funcion para actualizar el evento
    actualizarEvento = (e) => {
        e.preventDefault();
        var ida = this.cajaIDRef.current.value
        var nom = this.cajaNombreRef.current.value;
        var fec = this.cajaFechaRef.current.value;
        var est = this.cajaEstadoRef.current.value;
        var ent = this.cajaEntidadRef.current.value;
        var sit = this.cajaSitioWebRef.current.value;
        var mem = this.cajaMemoriabRef.current.value;
        var evento = {
            id: ida,
            nombre: nom,
            fecha: fec,
            estado: est,
            entidad: ent,
            sitio_web: sit,
            url_memoria: mem

        };
        var url = 'http://localhost:8080/gestioninstitucional/modificarevento';
        axios.post(url, evento).then(res => {
            this.setState({ status: true });
            if (res.data.respuesta === "se actualizo el evento") {
                alert("se actualizó el evento")
                window.history.back();
            } else {
                alert("no se pudo actualizar el evento")

            }
        });
    }
    Cargar = () => {
        var request = "/gestioninstitucional/eventoid/" + this.props.id;
        var url = "http://localhost:8080" + request;
        axios.get(url).then(res => {
            this.setState({
                evento: res.data
                , status: true
            })
        });
    }

    componentDidMount = () => {
        this.Cargar();
    }

    render() {
        if (this.state.status === true) {
            //return <Redirect to="/Eventos" />
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
                                            <h3 className="card-title"  >Actualizar un Evento</h3>
                                        </div>

                                        {/* /.card-header */}
                                        {/* form start */}
                                        <form onSubmit={this.actualizarEvento} style={{ width: "50%", margin: "auto" }}>
                                            <div className="card-body">
                                                <div className="form-group">
                                                    <input type="hidden" name="cajanom" className="form-control" value={this.props.id} placeholder="ID" ref={this.cajaIDRef} readOnly />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1">Nombre actual: {this.state.evento.nombre}</label>
                                                    <input type="text" name="cajatel" className="form-control " placeholder={this.state.evento.nombre} ref={this.cajaNombreRef} />
                                                </div>
                                                <div className="form-group">

                                                    <label htmlFor="exampleInputPassword1">Fecha del evento actual: {this.state.evento.fecha}</label>
                                                    <input type="date" id="start" name="trip-start"
                                                        min="2000-01-01" max="2100-12-31" ref={this.cajaFechaRef} ></input>


                                                </div>





                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1">Estado actual: {this.state.evento.estado}</label>
                                                    <select className="form-control select2" style={{ width: '100%' }} ref={this.cajaEstadoRef} >
                                                        <option selected="selected">{this.state.evento.estado}</option>
                                                        <option>Abierto</option>
                                                        <option>Cerrado</option>
                                                    </select>
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1">Entidad actual: {this.state.evento.entidad}</label>
                                                    <input type="text" name="cajatel" className="form-control" placeholder={this.state.evento.entidad} ref={this.cajaEntidadRef} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1">Sitio Web actual: {this.state.evento.sitio_web}</label>
                                                    <input type="text" name="cajatel" className="form-control" placeholder={this.state.evento.sitio_web} ref={this.cajaSitioWebRef} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1">URL de Memoria actual: {this.state.evento.url_memoria}</label>
                                                    <input type="text" name="cajatel" className="form-control" placeholder={this.state.evento.url_memoria} ref={this.cajaMemoriabRef} />
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
