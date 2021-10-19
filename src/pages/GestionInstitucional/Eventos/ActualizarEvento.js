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

    state = { status: false}

    nuevaEvento = (e) => {
        e.preventDefault();
        var ida = this.cajaIDRef.current.value
        var nom = this.cajaNombreRef.current.value;
        var fec = this.cajaFechaRef.current.value;
        var est = this.cajaEstadoRef.current.value;
        var ent = this.cajaEntidadRef.current.value;
        var sit = this.cajaSitioWebRef.current.value;
        var mem = this.cajaMemoriabRef.current.value;
        var evento = {
            id:ida,
            nombre: nom,
            fecha: fec,
            estado: est,
            entidad: ent,
            sitio_web: sit,
            url_memoria: mem
            
        };
        var url = 'http://localhost:8080/gestioninstitucional/crearevento';
        axios.post(url, evento).then(res => {
            this.setState({ status: true });
        });
    }




    render() {
        if(this.state.status === true){
            return <Redirect to="/Eventos" />
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
                    <h3 className="card-title"  >Crear un Evento</h3>
                  </div>
                   
                    {/* /.card-header */}
                    {/* form start */}
                    <form onSubmit={this.nuevaEvento} style={{width: "50%", margin: "auto"}}>
                        <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">id</label>
                            <input type="text" name="cajanom" className="form-control" value = {this.props.id} placeholder="ID" ref={this.cajaIDRef} readOnly/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Nombre</label>
                            <input type="text" name="cajatel" className="form-control" placeholder="Nombre" ref={this.cajaNombreRef} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Fecha inicio</label>
                            {/* form start 
                            <input type="text" name="cajatel" className="form-control" placeholder="Fecha inicio" ref={this.cajaFechaRef} />
*/}

                            <input type="date" id="start" name="trip-start"
       min="2000-01-01" max="2100-12-31" ref={this.cajaFechaRef}></input>
                        
                        
                        </div>



                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Estado</label>
                            <input type="text" name="cajatel" className="form-control" placeholder="Estado" ref={this.cajaEstadoRef} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Entidad</label>
                            <input type="text" name="cajatel" className="form-control" placeholder="Entidad" ref={this.cajaEntidadRef} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Sitio Web</label>
                            <input type="text" name="cajatel" className="form-control" placeholder="Sitio Web" ref={this.cajaSitioWebRef} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">URL de Memoria</label>
                            <input type="text" name="cajatel" className="form-control" placeholder="URL Memoria" ref={this.cajaMemoriabRef} />
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
