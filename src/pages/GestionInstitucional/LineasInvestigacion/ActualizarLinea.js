import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';

export default class ActualizarLinea extends Component {

    cajaNombreRef = React.createRef();
    cajaDescripcionRef = React.createRef();
    cajaFechaRef = React.createRef();

    state = { status: false}

    nuevaLinea = (e) => {
        e.preventDefault();
        var nom = this.cajaNombreRef.current.value;
        var des = this.cajaDescripcionRef.current.value;
        var fe = this.cajaFechaRef.current.value;
        var linea = {
            nombre: nom
            , descripcion: des
            , fecha: fe
        };
        var url = 'http://localhost:8080/gestioninstitucional/crearlinea';
        axios.post(url, linea).then(res => {
            this.setState({ status: true });
        });
    }




    render() {
        if(this.state.status === true){
            return <Redirect to="/Lineas" />
        }
        return (
            <div>
                <Aside/>
                <Header/>
            <div className="content-wrapper">
            <section className="content">
                
            <div className="container-fluid">
                <div className="row">
                {/* left column */}
                <div className="col-md-12">
                    {/* general form elements */}
                    <div className="card card-primary">
                    <div className="card-header" style={{align:"center"}}>
                    <h3 className="card-title"  >Actualizar la linea de investigacion</h3>
                  </div>
                   
                    {/* /.card-header */}
                    {/* form start */}
                    <form onSubmit={this.nuevaLinea} style={{width: "50%", margin: "auto"}}>
                        <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">nombre</label>
                            <input type="text" name="cajanom" className="form-control" value = {this.props.nombre} placeholder="Nombre" ref={this.cajaNombreRef} readOnly/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Descripción</label>
                            <input type="text" name="cajatel" className="form-control" placeholder="Descripción" ref={this.cajaDescripcionRef} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Fecha</label>
                            <input type="text" name="cajatel" className="form-control" placeholder="Fecha" ref={this.cajaFechaRef} />
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
