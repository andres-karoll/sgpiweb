import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';

export default class ActualizarConvocatorias extends Component {

    cajaIDRef = React.createRef();
    cajaEstadoRef = React.createRef();
    cajaTipoRef = React.createRef();
    cajaFechaInicioRef = React.createRef();
    cajaFechaFinalRef = React.createRef();
    cajaNombreRef = React.createRef();
    cajaContextoRef = React.createRef();
    cajaNumProductosRef = React.createRef();
    cajaEntidadRef = React.createRef();
    

    state = { status: false}

    nuevaConvocatorias = (e) => {
        e.preventDefault();
        var idcon = this.cajaIDRef.current.value;
        var est = this.cajaEstadoRef.current.value;
        var tip = this.cajaTipoRef.current.value;
        var fei = this.cajaFechaInicioRef.current.value;
        var fef = this.cajaFechaFinalRef.current.value;
        var ent = this.cajaEntidadRef.current.value;
        var nomcon = this.cajaNombreRef.current.value;
        var numpro = this.cajaNumProductosRef.current.value;
        var con = this.cajaContextoRef.current.value;
        var convocatoria = {
            id: idcon
            , estado: est
            , tipo: tip
            , fecha_inicio: fei
            , fecha_final: fef
            , entidad: ent
            , nombre_convocatoria: nomcon
            , numero_productos:numpro
            , contexto: con
        };
        var url = 'http://localhost:8080/gestioninstitucional/crearconvocatoria';
        axios.post(url, convocatoria).then(res => {
            this.setState({ status: true });
        });
    }

    render() {
        if(this.state.status === true){
            return <Redirect to="/Convocatorias" />
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
                    <h3 className="card-title"  >Crear una Convocatoria</h3>
                  </div>
                   
                    {/* /.card-header */}
                    {/* form start */}
                    <form onSubmit={this.nuevaConvocatorias} style={{width: "50%", margin: "auto"}}>
                        <div className="card-body">
                        <div className="form-group">
                        
                            <label htmlFor="exampleInputEmail1">ID</label>
                            <input type="text" name="cajanom" className="form-control" value ={this.props.id} ref={this.cajaIDRef} readOnly/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1">Nombre de la convocatoria</label>
                            <input type="text" name="cajatel" className="form-control" placeholder="Tipo" ref={this.cajaNombreRef} required/>
                        </div> 
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1">Contexto</label>
                            <input type="text" name="cajatel" className="form-control" placeholder="Tipo" ref={this.cajaContextoRef} required/>
                        </div> 
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1">Estado</label>
                            <select className="form-control select2" style={{width: '100%'}} ref={this.cajaEstadoRef} required>
                            <option selected="selected"></option>
                            <option>Abierto</option>
                            <option>Cerrado</option>
                            </select>
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1">Tipo</label>
                            <input type="text" name="cajatel" className="form-control" placeholder="Tipo" ref={this.cajaTipoRef} required/>
                        </div> 
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1" style={{  width: '50%'}}>Fecha de inicio</label>
                            <input type="date" id="start" name="trip-start" style={{ height: "30px"}}
                             min="2000-01-01" max="2100-12-31" ref={this.cajaFechaInicioRef} required></input>
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1" style={{  width: '50%'}}>Fecha final</label>
                            <input  type="date" id="start" name="trip-start" style={{ height: "30px"}}
                             min="2000-01-01" max="2100-12-31" ref={this.cajaFechaFinalRef} required></input>
                            
                        </div>
                        <div class="form-group">
                  

                            </div>
                        <div className="form-group">
                      
                            <label htmlFor="exampleInputPassword1">Numero de productos</label>
                            <input type="number" name="cajatel" className="form-control" placeholder="Tipo" ref={this.cajaNumProductosRef} />
                        </div>
                        <div className="form-group">
                        
                            <label htmlFor="exampleInputPassword1">Entidad</label>
                            <input type="text" name="cajatel" className="form-control" placeholder="Tipo" ref={this.cajaEntidadRef} />
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
