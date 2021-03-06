import React, { Component } from 'react';
import axios from 'axios';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
import swal from 'sweetalert';
export default class CrearMacro extends Component {
    /**
     * definicion de variables 
     */
    cajaNombre = React.createRef();
    cajaDescripcion = React.createRef();
    cajaFecha_inicio = React.createRef();
    cajaEstado = React.createRef();
    /**
     * metodo para crear un macro proyecto 
     */
    CrearMacro = (e) => {
        e.preventDefault();
        var nom = this.cajaNombre.current.value;
        var desc = this.cajaDescripcion.current.value;
        var fecha_i = this.cajaFecha_inicio.current.value;
        var esta = this.cajaEstado.current.value;
        var macro = {
            nombre: nom,
            estado: esta,
            descripcion: desc,
            fechainicio: fecha_i
        };
        var url = 'http://localhost:8080/gestionproyectosaulaintegrador/crearMacro';
        axios.post(url, macro).then(res => {
            this.setState({ status: true });
            if (res.data.respuesta === "el macro proyecto se creo correctamente") {
                swal({
                    title: "El proyecto fue creado correctamente",
                    icon:"success"
                  });
                window.history.back();
            } else {
                swal({
                    title: "el macro proyecto proyecto no se pudo crear correctamente",
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
                                            <h3 className="card-title"  >Crear Macro proyecto</h3>
                                        </div>
                                        {/* /.card-header */}
                                        {/* form start */}
                                        <form onSubmit={this.CrearMacro} style={{ width: "50%", margin: "auto" }} >
                                            <div className="card-body">

                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1" style={{ color: "red" }}>*</label>
                                                    <label htmlFor="exampleInputPassword1">Nombre</label>
                                                    <input type="text" name="cajadir" className="form-control" ref={this.cajaNombre} required />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1" style={{ color: "red" }}>*</label>
                                                    <label htmlFor="exampleInputPassword1">Descripcion</label>
                                                    <textarea rows="5" cols="100" wrap="physical" type="text" name="cajatel" className="form-control" ref={this.cajaDescripcion} required />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1" style={{ color: "red" }}>*</label>
                                                    <label htmlFor="exampleInputPassword1" style={{ width: '50%' }}>Fecha de inicio</label>
                                                    {/*<input type="text" name="cajatel" className="form-control" placeholder="Fecha_fun" ref={this.cajaFecha_funRef} />*/}
                                                    <input type="date" id="start" name="trip-start" style={{ height: "30px" }}
                                                        min="2000-01-01" max="2100-12-31" ref={this.cajaFecha_inicio} required></input>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1" style={{ color: "red" }}>*</label>
                                                    <label htmlFor="exampleInputPassword1">Estado del macro proyecto</label>
                                                    <div></div>
                                                    <select ref={this.cajaEstado} required>
                                                        <label htmlFor="exampleInputPassword1" style={{ color: "red" }}>*</label>
                                                        <option style={{ color: "black" }} >Inicio</option>
                                                        <option style={{ color: "black" }} >Finalizada</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="card-footer d-flex justify-content-center">
                                                <button style={{ fontSize: "large" }} className="btn btn-success">Crear macro proyecto</button>
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
