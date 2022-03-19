import React, { Component } from 'react';
import axios from 'axios';

import Header from '../../../components/Global/Header';
import swal from 'sweetalert';
import Aside from '../../../components/Global/Aside';
export default class ParticipaEventosExternos extends Component {
    state = {
        status: false,
        Evento: [],
        eve: []

    }
    /**
     * definicion de variables
     */
    cajaProyecto = React.createRef();
    cajaEvento = React.createRef();
    cajaFecha = React.createRef();
    cajaReconocimiento = React.createRef();
    cajaNombre = React.createRef();
    cajaFecha1 = React.createRef();
    cajaEntidad = React.createRef();
    cajaSitioWeb = React.createRef();
    cajaUrl = React.createRef();
    cajaEstado = React.createRef();
    /**
     * metodo de inicio 
     */
    componentDidMount = () => {
        this.setState({
            eve: this.state.Evento,

        })
    }
    /**
     * metodo para participar en un evento 
     * @param {*} e 
     */
    ParticiparEvento = (e) => {
        e.preventDefault();
        var proye = this.cajaProyecto.current.value;
        var even = this.cajaEvento.current.value;
        var fe = this.cajaFecha.current.value;
        var reco = this.cajaReconocimiento.current.value;
        var esta = this.cajaEstado.current.value;
        var fe2 = this.cajaFecha1.current.value;
        var enti = this.cajaEntidad.current.value;
        var sitio = this.cajaSitioWeb.current.value;
        var url = this.cajaUrl.current.value;
        var ParticipacionEvento = {
            proyecto: proye,
            nombre: even,
            fecha: fe,
            estado: esta,
            fecha1: fe2,
            reconocimiento: reco,
            entidad: enti,
            sitioWeb: sitio,
            url_memoria: url
        };
        var url = 'http://localhost:8080/gestionproyectosaulaintegrador/participareventoExterno';
        axios.post(url, ParticipacionEvento).then(res => {
            this.setState({ status: true });
            swal({
                title:"Participo en el evento",
                icon:"success"
              });
            window.location.href = "/Participaciones/" + this.props.id;
        });
    }
    render() {
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
                                            <h3 className="card-title"  >Participa en un evento</h3>
                                        </div>
                                        {/* /.card-header */}
                                        {/* form start */}
                                        <form onSubmit={this.ParticiparEvento} style={{ width: "50%", margin: "auto" }}>
                                            <div className="card-body">

                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1">Nombre evento </label>
                                                    <div></div>
                                                    <input type="text" name="cajanom" className="form-control" ref={this.cajaEvento} required />

                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1" style={{ color: "red" }}>*</label>
                                                    <label htmlFor="exampleInputPassword1" style={{ width: '50%' }}>Fecha de creacio del evento</label>
                                                    {/*<input type="text" name="cajatel" className="form-control" placeholder="Fecha_fun" ref={this.cajaFecha_funRef} />*/}
                                                    <input type="date" id="start" name="trip-start" style={{ height: "30px" }}
                                                        min="2000-01-01" max="2100-12-31" ref={this.cajaFecha} required></input>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1">Estado del evento</label>
                                                    <div></div>
                                                    <select ref={this.cajaEstado} style={{ color: "black" }}>
                                                        <option selected value={0}>Selecciona un estado </option>
                                                        <option >Abierta</option>
                                                        <option >Cerrada</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1">Entidad </label>
                                                    <div></div>
                                                    <input type="text" name="cajanom" className="form-control" ref={this.cajaEntidad} required />

                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1">Sitio Web </label>
                                                    <div></div>
                                                    <input type="text" name="cajanom" className="form-control" ref={this.cajaSitioWeb} required />

                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1">Url memoria </label>
                                                    <div></div>
                                                    <input type="text" name="cajanom" className="form-control" ref={this.cajaUrl} required />

                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Tu proyecto</label>
                                                    <input type="text" name="cajanom" className="form-control" ref={this.cajaProyecto} value={this.props.id} readOnly />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1" style={{ color: "red" }}>*</label>
                                                    <label htmlFor="exampleInputPassword1" style={{ width: '50%' }}>Fecha de participacion</label>
                                                    {/*<input type="text" name="cajatel" className="form-control" placeholder="Fecha_fun" ref={this.cajaFecha_funRef} />*/}
                                                    <input type="date" id="start" name="trip-start" style={{ height: "30px" }}
                                                        min="2000-01-01" max="2100-12-31" ref={this.cajaFecha1} required></input>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Reconocimiento</label>
                                                    <textarea rows="5" cols="100" wrap="physical" type="text" name="cajanom" className="form-control" ref={this.cajaReconocimiento} required />
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <button style={{ fontSize: "large" }} className="btn btn-success">Participar</button>
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
