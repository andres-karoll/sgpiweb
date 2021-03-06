import React, { Component } from 'react';
import axios from 'axios';
import Aside from '../../components/Global/Aside';
import Header from '../../components/Global/Header';
import { NavLink } from 'react-router-dom';
import swal from 'sweetalert';
export default class CrearProyectoGrado extends Component {
    state = {
        status: false,
        tipo: [],
        tip: [],
        clase: [],
        cla: []
    }
    /**
     * cargar tipo de proyecto 
     */
    CargarTipos = () => {
        var request = "/gestionfiltroproyecto/todoslostiposproyecto";
        var url = "http://localhost:8080" + request;
        axios.get(url).then(res => {

            this.setState({
                tipo: res.data
                , status: true
            })
        });
    }
    /**
     * metodo para cargar clases
     */
    CargarClase = () => {
        var request = "/gestioninstitucional/listarclasespormateria/" + this.props.id;
        var url = "http://localhost:8080" + request;
        axios.get(url).then(res => {
            this.setState({
                clase: res.data
                , status: true
            })
        });
    }
    /**
     * definicion de variables
     */
    cajaTitulo = React.createRef();
    cajaDescripcion = React.createRef();
    cajaMetodologia = React.createRef();
    cajaJustificacion = React.createRef();
    cajaEstado = React.createRef();
    cajaFecha = React.createRef();
    cajaVis = React.createRef();
    cajaCiu = React.createRef();
    cajaTipo = React.createRef();
    cajaClase = React.createRef();
    cajaRol = React.createRef();
    cajaParticipante = React.createRef();
    /**
     * metodo de inicio
     */
    componentDidMount = () => {
        this.CargarTipos();
        this.setState({
            tip: this.state.tipo,
            cla: this.state.clase
        });
        this.CargarClase();
    }
    /**
     * metodo de creacion de proyecto 
     * @param {*} e 
     */
    CrearProyecto = (e) => {
        e.preventDefault();
        var tit = this.cajaTitulo.current.value;
        var desc = this.cajaDescripcion.current.value;
        var met = this.cajaMetodologia.current.value;
        var jus = this.cajaJustificacion.current.value;
        var esta = this.cajaEstado.current.value;
        var fecha = this.cajaFecha.current.value;
        var vis = this.cajaVis.current.value;
        var ciu = this.cajaCiu.current.value;
        var tip = this.cajaTipo.current.value;
        var part = localStorage.getItem("cedula");
        var ro = this.cajaRol.current.value;
        var proyecto = {
            titulo: tit,
            estado: esta,
            descripcion: desc,
            fechainicio: fecha,
            visibilidad: vis,
            ciudad: ciu,
            metodologia: met,
            justificacion: jus,
            tipo: tip,
            usuario: part,
            rol: ro
        };
        var url = 'http://localhost:8080/gestiontrabajogrado/crearproyecto';
        axios.post(url, proyecto).then(res => {
            this.setState({ status: true });
            if (res.data.respuesta === "el proyecto fue creado") {
                swal({
                    title: "El proyecto fue creado correctamente",
                    icon:"success"
                  });
                window.history.back();
            } else {
                swal({
                    title: "El proyecto no se pudo crear por favor verifica los datos",
                    icon:"error"
                  });
                window.history.back();
            }
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
                                            <h3 className="card-title"  >Crear Proyecto</h3>
                                        </div>
                                        {/* /.card-header */}
                                        {/* form start */}
                                        <form onSubmit={this.CrearProyecto} style={{ width: "50%", margin: "auto" }} >
                                            <div className="card-body">

                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1" style={{ color: "red" }}>*</label>
                                                    <label htmlFor="exampleInputPassword1">Titulo</label>
                                                    <input type="text" name="cajadir" className="form-control" ref={this.cajaTitulo} required />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1" style={{ color: "red" }}>*</label>
                                                    <label htmlFor="exampleInputPassword1">Descripcion</label>
                                                    <input type="text" name="cajatel" className="form-control" ref={this.cajaDescripcion} required />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1" style={{ color: "red" }}>*</label>
                                                    <label htmlFor="exampleInputPassword1" style={{ width: '50%' }}>Fecha de inicio</label>
                                                    {/*<input type="text" name="cajatel" className="form-control" placeholder="Fecha_fun" ref={this.cajaFecha_funRef} />*/}
                                                    <input type="date" id="start" name="trip-start" style={{ height: "30px" }}
                                                        min="2000-01-01" max="2100-12-31" ref={this.cajaFecha} required></input>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1" style={{ color: "red" }}>*</label>
                                                    <label htmlFor="exampleInputPassword1">Estado del proyecto</label>
                                                    <div></div>
                                                    <select ref={this.cajaEstado} required>
                                                        <label htmlFor="exampleInputPassword1" style={{ color: "red" }}>*</label>
                                                        <option style={{ color: "black" }} >Propuesta</option>

                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1" style={{ color: "red" }}>*</label>
                                                    <label htmlFor="exampleInputPassword1">visibilidad del proyecto</label>
                                                    <div></div>
                                                    <select ref={this.cajaVis} required>
                                                        <option style={{ color: "black" }} value={0} >Publico</option>
                                                        <option style={{ color: "black" }} value={1} >Privado</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1" style={{ color: "red" }}>*</label>
                                                    <label htmlFor="exampleInputPassword1">Ciudad</label>
                                                    <div></div>
                                                    <select ref={this.cajaCiu} required>
                                                        <option style={{ color: "black" }}>Bogota</option>
                                                        <option style={{ color: "black" }}>Cali</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1" style={{ color: "red" }}>*</label>
                                                    <label htmlFor="exampleInputPassword1">Metodologia</label>
                                                    <input type="text" name="cajatel" className="form-control" ref={this.cajaMetodologia} required />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1" style={{ color: "red" }}>*</label>
                                                    <label htmlFor="exampleInputPassword1">Justificacion</label>
                                                    <input type="text" name="cajatel" className="form-control" ref={this.cajaJustificacion} required />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1" style={{ color: "red" }}>*</label>
                                                    <label htmlFor="exampleInputPassword1">Tipo de proyecto</label>
                                                    <div></div>
                                                    <select ref={this.cajaTipo} style={{ color: "black" }}>
                                                        <option selected > Elige el Tipo de proyecto </option>
                                                        <option style={{ color: "black" }}>Aula</option>
                                                        <option style={{ color: "black" }}>Libre</option>
                                                        <option style={{ color: "black" }}>Grado</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1" style={{ color: "red" }}>*</label>
                                                    <label htmlFor="exampleInputPassword1">Rol que vas a tener en el rol</label>
                                                    <div></div>

                                                    <select ref={this.cajaRol} style={{ color: "black" }}>
                                                        <option selected > Elige el Rol que vas a tener en el proyecto </option>

                                                        {
                                                            localStorage.getItem("tipo") === "Estudiante activo" ? (

                                                                <option style={{ color: "black" }}>Participante</option>
                                                            ) : (
                                                                <option style={{ color: "black" }}>Lider </option>
                                                            )
                                                        }
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1" style={{ color: "red" }}>*</label>
                                                    <label htmlFor="exampleInputPassword1">Clase</label>
                                                    <div></div>

                                                    <select ref={this.cajaClase} style={{ color: "black" }}>
                                                        <option selected > Elige la clase en la que vas hacer el proyecto </option>

                                                        {this.state.status === true &&
                                                            (this.state.clase.map((cla) => {
                                                                return (
                                                                    <option style={{ color: "black" }} value={cla.numero}>{cla.nombre}</option>
                                                                );
                                                            }
                                                            )
                                                            )
                                                        }
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1">Macro Proyecto</label>
                                                    <div></div>
                                                    <select ref={this.cajaMacro} style={{ color: "black" }}>
                                                        <option selected value={0}>Selecciona el macro proyecto </option>
                                                        {this.state.status === true &&
                                                            (this.state.Macro.map((mac) => {
                                                                return (
                                                                    <option style={{ color: "black" }} value={mac.id}>{mac.nombre}</option>
                                                                );
                                                            }
                                                            )
                                                            )
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <button style={{ fontSize: "large" }} className="btn btn-success">Crear proyecto</button>
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
