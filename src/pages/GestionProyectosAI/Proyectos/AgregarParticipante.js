import React, { Component } from 'react';
import axios from 'axios';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
import { NavLink } from 'react-router-dom';
import swal from 'sweetalert';
export default class AgregarParticipante extends Component {
    state = {
        status: false
    }
    /**
     * definicion de variables 
     */
    cajaId = React.createRef();
    cajaCedula = React.createRef();
    cajaFecha = React.createRef();
    cajaRol = React.createRef();

    /**
     * agregar un participante a un proyecto 
     * @param {*} e 
     */
    AgregarParticipante = (e) => {
        e.preventDefault();
        var ids = this.cajaId.current.value;
        var cedula = this.cajaCedula.current.value;
        var ro = this.cajaRol.current.value;
        var fecha = this.cajaFecha.current.value;
        var participante = {
            id: ids,
            usuario: cedula,
            fechainicio: fecha,
            rol: ro
        };
        var url = 'http://localhost:8080/gestionproyectosaulaintegrador/agregarParticipante';
        axios.post(url, participante).then(res => {
            this.setState({ status: true });
            if (res.data.respuesta === "el participante fue agregado") {
                swal({
                    title: "El participante fue agregado",
                    icon:"success"
                  });
                window.history.back();
            } else {
                swal({
                    title: "El participante no pudo ser agregado",
                    icon:"error"
                  });
                alert("El participante no pudo ser agregado")
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
                                            <h3 className="card-title"  >Actualizar una Materia</h3>
                                        </div>
                                        {/* /.card-header */}
                                        {/* form start */}
                                        <form style={{ width: "50%", margin: "auto" }} onSubmit={this.AgregarParticipante}>
                                            <div className="card-body">
                                                <div className="form-group">
                                                    <input type="hidden" name="cajanom" className="form-control" placeholder="Catalogo" ref={this.cajaId} value={this.props.id} readOnly />
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1" style={{ color: "red" }}>*</label>
                                                    <label htmlFor="exampleInputPassword1">Cedula</label>
                                                    <input type="text" name="cajadir" className="form-control" ref={this.cajaCedula} required />
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
                                                    <label htmlFor="exampleInputPassword1">Rol que vas a tener en el rol</label>
                                                    <div></div>
                                                    {rol==="Docente" || rol === "Docente lider semillero"|| rol === "Docente investigador" ?(
                                                        <select ref={this.cajaRol} required>

                                                        <option style={{ color: "black" }}>Lider</option>
                                                        <option style={{ color: "black" }}>Participante</option>
                                                    </select>

                                                
                                                    ):(
                                                        <></>
                                                    )}
                                                    {
                                                        rol === "Estudiante activo" &&
                                                        <select ref={this.cajaRol} required>


                                                            <option style={{ color: "black" }}>Participante</option>
                                                        </select>

                                                    }
                                                
                                                
                                                        
                                                </div>
                                            </div>
                                            <div  class="d-flex justify-content-center ">
                                                <NavLink style={{ width: '50%' }} className="btn btn-success" onClick={this.AgregarParticipante} to={"/ProyectosAulaIntegrador"} >Agregar Participante</NavLink>
                                            </div>
                                            <div>
                                                <p></p>
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
