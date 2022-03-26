import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
import swal from 'sweetalert';
export default class InsertarArea extends Component {

    cajaIDRef = React.createRef();
    cajaNombreRef = React.createRef();
    cajaDescripcionRef = React.createRef();
    cajaGranAreaRef = React.createRef();

    state = { status: false }
    // funcion para crear  una nueva area en donde se definen las variables para llenar el JSON que sera enviado
    nuevaArea = (e) => {
        e.preventDefault();
        var ida = this.cajaIDRef.current.value
        var nom = this.cajaNombreRef.current.value;
        var des = this.cajaDescripcionRef.current.value;
        var gran = this.cajaGranAreaRef.current.value;
        var area = {
            id: ida,
            nombre: nom
            , descripcion: des
            , gran_area: gran
        };
        var url = 'http://localhost:8080/gestioninstitucional/creararea';
        axios.post(url, area).then(res => {
            this.setState({ status: true });
            if (res.data.respuesta === "se creo la area") {
                swal({
                    title: "se creo la area",
                    icon:"success"
                  });
                window.history.back();
            } else {
                alert("no se pudo crear")

            }
        });
    }




    render() {
        if (this.state.status === true) {
            //return <Redirect to="/AreasConocimiento" />
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
                                            <h3 style={{ fontSize: "large" }} className="card-title"  >Crear una Area</h3>
                                        </div>

                                        {/* /.card-header */}
                                        {/* form start */}
                                        <form onSubmit={this.nuevaArea} style={{ width: "50%", margin: "auto" }}>
                                            <div className="card-body">
                                                <div className="form-group">
                                                    <input type="hidden" style={{ fontSize: "large" }} name="cajanom" className="form-control" placeholder="ID" ref={this.cajaIDRef} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1" style={{ color: "red" }}>*</label>
                                                    <label style={{ fontSize: "large" }} htmlFor="exampleInputPassword1">Nombre</label>
                                                    <input style={{ fontSize: "large" }} type="text" name="cajatel" className="form-control" placeholder="Nombre" ref={this.cajaNombreRef} required />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1" style={{ color: "red" }}>*</label>
                                                    <label style={{ fontSize: "large" }} htmlFor="exampleInputPassword1">Descripción</label>
                                                    <textarea type="text" rows="15" style={{ fontSize: "large" }} name="cajatel" className="form-control" placeholder="Descripcion" ref={this.cajaDescripcionRef} required />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1" style={{ color: "red" }}>*</label>
                                                    <label style={{ fontSize: "large" }} htmlFor="exampleInputPassword1">Gran Area de conocimiento</label>
                                                    <input style={{ fontSize: "large" }} type="text" name="cajatel" className="form-control" placeholder="Grand area" ref={this.cajaGranAreaRef} required />
                                                </div>


                                            </div>
                                            {/* /.card-body */}
                                            <div className="card-footer">
                                                <button style={{ fontSize: "large" }} className="btn btn-success">Enviar</button>
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