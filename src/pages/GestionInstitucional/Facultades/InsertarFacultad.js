import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
import swal from 'sweetalert';
export default class InsertarFacultad extends Component {

    cajaIDRef = React.createRef();
    cajaNombreRef = React.createRef();
    cajaDecanoRef = React.createRef();
    cajaCoorRef = React.createRef();

    state = { status: false }
//metodo para insertar una facultad agregando las variables para el JSON
    nuevaFacultad = (e) => {
        e.preventDefault();
        var idfacultad = this.cajaIDRef.current.value;
        var nom = this.cajaNombreRef.current.value;
        var deca = this.cajaDecanoRef.current.value;
        var coo = this.cajaCoorRef.current.value;
        var facultad = {
            id: idfacultad
            , nombre: nom
            , decano: deca
            , coordinador: coo
        };
        var url = 'http://localhost:8080/gestioninstitucional/crearfacultad';
        axios.post(url, facultad).then(res => {
            this.setState({ status: true });
            if (res.data.respuesta === "la facultad fue actualizada") {
                swal({
                    title: "se actualizó la facultad",
                    icon:"success"
                  });
               
                window.location.href = "/Facultades";
            } else if (res.data.respuesta === "la falcultad no fue creada el primer usuario es un estudiante inactivo") {
                swal({
                    title: "la falcultad no fue creada el primer usuario es un estudiante inactivo",
                    icon:"error"
                  });
              
            } else if (res.data.respuesta === "la falcultad no fue creada el primer usuario es un estudiante activo") {
                swal({
                    title: "la falcultad no fue creada el primer usuario es un estudiante activo",
                    icon:"error"
                  });
                
            } else if (res.data.respuesta === "la falcultad no fue creada el primer usuario es un semillerista") {
                swal({
                    title: "la falcultad no fue creada el primer usuario es un semillerista",
                    icon:"error"
                  });
                
            } else if (res.data.respuesta === "la falcultad no fue creada el primer usuario ya es Lider investigacion facultad") {
                swal({
                    title: "la falcultad no fue creada el primer usuario ya es Lider investigacion facultad",
                    icon:"error"
                  });
            
            } else if (res.data.respuesta === "la falcultad no fue creada el segundo usuario es un estudiante inactivo") {
                swal({
                    title: "la falcultad no fue creada el segundo usuario es un estudiante inactivo",
                    icon:"error"
                  });
              
            } else if (res.data.respuesta === "la falcultad no fue creada el segundo usuario es un estudiante activo") {
                swal({
                    title: "la falcultad no fue creada el segundo usuario es un estudiante activo",
                    icon:"error"
                  });
              
            } else if (res.data.respuesta === "la falcultad no fue creada el segundo usuario es un semillerista") {
                swal({
                    title: "la falcultad no fue creada el segundo usuario es un semillerista",
                    icon:"error"
                  });
              
            } else if (res.data.respuesta === "la falcultad no fue creada el segundo ya es Coordinador investigacion facultad") {
                swal({
                    title: "la falcultad no fue creada el segundo ya es Coordinador investigacion facultad",
                    icon:"error"
                  });
                
            }
            else {
                swal({
                    title: "NO se pudo actualizar la facultad correctamente",
                    icon:"error"
                  });
             
                window.location.href = "/Facultades";
            }
        });
    }

    render() {
        if (this.state.status === true) {
            return <Redirect to="/Facultades" />
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
                                            <h3 className="card-title"  >Crear una Facultad</h3>
                                        </div>

                                        {/* /.card-header */}
                                        {/* form start */}
                                        <form onSubmit={this.nuevaFacultad} style={{ width: "50%", margin: "auto" }}>
                                            <div className="card-body">
                                                <div className="form-group">
                                                    <input type="hidden" name="cajanom" className="form-control" placeholder="ID" ref={this.cajaIDRef} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1" style={{ color: "red" }}>*</label>
                                                    <label htmlFor="exampleInputPassword1">Nombre de Facultad</label>
                                                    <input type="text" name="cajadir" className="form-control" placeholder="Nombre de facultad" ref={this.cajaNombreRef} required />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1" style={{ color: "red" }}>*</label>
                                                    <label htmlFor="exampleInputPassword1">Cedula del Decano</label>
                                                    <input type="number" name="cajatel" className="form-control" placeholder="Decano Obligatorio" ref={this.cajaDecanoRef} required />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1" style={{ color: "red" }}>*</label>
                                                    <label htmlFor="exampleInputPassword1">Cedula del Coordinador invitado</label>
                                                    <input type="number" name="cajatel" className="form-control" placeholder="Coordinador invitado" ref={this.cajaCoorRef} required />
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
