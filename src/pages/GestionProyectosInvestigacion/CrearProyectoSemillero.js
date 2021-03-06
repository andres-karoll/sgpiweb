import React, { Component } from 'react';
import axios from 'axios';
import Aside from '../../components/Global/Aside';
import Header from '../../components/Global/Header';
import { NavLink } from 'react-router-dom';
import swal from 'sweetalert';
export default class CrearProyectoSemillero extends Component {
    state = {
        status: false,
        usuario: [],
        Macro: [],
        mac: []
    }
    /**
     * metodo para biscar un usuario 
     */
    CargarUsuario = () => {
        var request = "/gestionusuario/buscarusuario/" + localStorage.getItem("cedula");
        var url = "http://localhost:8080" + request;
        axios.get(url).then(res => {
            this.setState({
                usuario: res.data
                , status: true
            })
        });
    }
    /**
     * metodo pra cargar macro proyectos 
     */
    CargarMacroProyecto = () => {
        var request = "/gestionproyectosaulaintegrador/macroProyectos/";
        var url = "http://localhost:8080" + request;
        axios.get(url).then(res => {
            this.setState({
                Macro: res.data
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
    cajaRol = React.createRef();
    cajaParticipante = React.createRef();
    cajaSemillero = React.createRef();
    cajaMacro = React.createRef();
    /**
     * metodo de inicio 
     */
    componentDidMount = () => {
        this.CargarUsuario();
        this.CargarMacroProyecto();
    }
    /**
     * crear un proyecto 
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
        var semi = this.cajaSemillero.current.value;
        var macr = this.cajaMacro.current.value;
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
            rol: ro,
            semillero: semi,
            macro: macr
        };
        var url = 'http://localhost:8080/gestionproyectosinvestigacion/crearproyecto';
        axios.post(url, proyecto).then(res => {
            console.log(proyecto)
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
        var rol = localStorage.getItem("tipo")
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
                                            <h3 className="card-title"  >Crear proyecto semillero</h3>
                                        </div>

                                        {/* /.card-header */}
                                        {/* form start */}
                                        <form style={{ width: "50%", margin: "auto" }} onSubmit={this.CrearProyecto}>
                                            <div className="card-body">

                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1" style={{ color: "red" }}>*</label>
                                                    <label htmlFor="exampleInputPassword1">Titulo</label>
                                                    <div></div>
                                                    <textarea name="comentarios" rows="2" cols="100" wrap="physical" ref={this.cajaTitulo} required />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1" style={{ color: "red" }}>*</label>
                                                    <label htmlFor="exampleInputPassword1">Descripcion</label>
                                                    <div></div>
                                                    <textarea name="comentarios" rows="5" cols="100" wrap="physical" ref={this.cajaDescripcion} required />
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
                                                    <label htmlFor="exampleInputPassword1" style={{ color: "red" }}>*</label>
                                                    <select ref={this.cajaEstado}>

                                                        <option style={{ color: "black" }} >Propuesta</option>

                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1" style={{ color: "red" }}>*</label>
                                                    <label htmlFor="exampleInputPassword1">visibilidad del proyecto</label>
                                                    <div></div>
                                                    <select ref={this.cajaVis}>
                                                        <option selected >Escoge una la visibilidad del proyecto </option>
                                                        <option style={{ color: "black" }} value={0} >Publico</option>
                                                        <option style={{ color: "black" }} value={1} >Privado</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1" style={{ color: "red" }}>*</label>
                                                    <label htmlFor="exampleInputPassword1">Ciudad</label>
                                                    <div></div>
                                                    <select ref={this.cajaCiu} required>
                                                        <option selected >Escoge una la ciudad </option>
                                                        <option style={{ color: "black" }}>Bogota</option>
                                                        <option style={{ color: "black" }}>Cali</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1" style={{ color: "red" }}>*</label>
                                                    <label htmlFor="exampleInputPassword1">Metodologia</label>
                                                    <div></div>
                                                    <textarea name="comentarios" rows="5" cols="100" wrap="physical" ref={this.cajaMetodologia} required />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1" style={{ color: "red" }}>*</label>
                                                    <label htmlFor="exampleInputPassword1">Justificacion</label>
                                                    <div></div>
                                                    <textarea name="comentarios" rows="5" cols="100" wrap="physical" ref={this.cajaJustificacion} required />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1" style={{ color: "red" }}>*</label>
                                                    <label htmlFor="exampleInputPassword1">Tipo de proyecto</label>
                                                    <input type="text" name="cajatel" className="form-control" ref={this.cajaTipo} value="Semillero" readOnly />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1" style={{ color: "red" }}>*</label>
                                                    <label htmlFor="exampleInputPassword1">Rol que vas a tener en el rol</label>
                                                    <div></div>

                                                    <select ref={this.cajaRol} style={{ color: "black" }}>
                                                        <option selected > Elige el Rol que vas a tener en el proyecto </option>

                                                        {
                                                            localStorage.getItem("tipo") === "Semillerista" ? (

                                                                <option style={{ color: "black" }}>Participante</option>
                                                            ) : (
                                                                <option style={{ color: "black" }}>Lider </option>
                                                            )
                                                        }
                                                    </select>
                                                </div>
                                                {
                                                    (rol === "Docente lider semillero" || rol === "Semillerista") &&
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
                                                }

                                                {this.state.status === true &&
                                                    (
                                                        <div className="form-group">
                                                            <label htmlFor="exampleInputPassword1" style={{ color: "red" }}>*</label>
                                                            <label htmlFor="exampleInputPassword1">Semillero asociado</label>
                                                            <input type="text" name="cajatel" className="form-control" value={this.state.usuario.semillero} readOnly />
                                                            <input type="hidden" name="cajatel" className="form-control" ref={this.cajaSemillero} value={this.state.usuario.semillero_id}/>
                                                        </div>
                                                    )
                                                }
                                            </div>
                                            <div className="card-footer">
                                                <NavLink style={{ width: '50%' }} className="btn btn-success" onClick={this.CrearProyecto} to={"/ ProyectoSemillero"} >Crear Proyecto</NavLink>
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