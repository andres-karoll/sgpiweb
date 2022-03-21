import React, { Component } from 'react';
import axios from 'axios';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
import swal from 'sweetalert';
export default class ModificarMacro extends Component {
    /**
     * definicion de variables 
     */
    cajaNombre = React.createRef();
    cajaDescripcion = React.createRef();
    /**
     * modificacion de macroproyecto 
     * @param {} e 
     */
    CrearMacro = (e) => {
        e.preventDefault();
        var nom = this.cajaNombre.current.value;
        var desc = this.cajaDescripcion.current.value;

        var macro = {
            id: this.props.id,
            nombre: nom,
            descripcion: desc,
        };
        var url = 'http://localhost:8080/gestionproyectosaulaintegrador/ModificarMacro';
        axios.post(url, macro).then(res => {
            this.setState({ status: true });
            if (res.data.respuesta === "el macro proyecto fue modificado") {
                swal({
                    title:"el macro proyecto fue modificado",
                    icon:"success"
                  });
                window.history.back();
            } else {
                swal({
                    title:"el macro proyecto proyecto no se pudo modificar",
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
                                            <h3 className="card-title"  >Modificar Macro</h3>
                                        </div>
                                        {/* /.card-header */}
                                        {/* form start */}
                                        <form onSubmit={this.CrearMacro} style={{ width: "50%", margin: "auto" }} >
                                            <div className="card-body">

                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1" style={{ color: "red" }}>*</label>
                                                    <label htmlFor="exampleInputPassword1">Nombre</label>
                                                    <input type="text" name="cajadir" className="form-control" ref={this.cajaNombre} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1" style={{ color: "red" }}>*</label>
                                                    <label htmlFor="exampleInputPassword1">Descripcion</label>
                                                    <textarea rows="5" cols="100" wrap="physical" type="text" name="cajatel" className="form-control" ref={this.cajaDescripcion} />
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <button style={{ fontSize: "large" }} className="btn btn-success">Modificar macro proyecto</button>
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
