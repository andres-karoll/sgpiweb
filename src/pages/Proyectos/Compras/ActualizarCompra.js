import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';


export default class ActualizarCompra extends Component {

    cajaIDRef = React.createRef();
    cajaFechaSolicitudRef = React.createRef();
    cajaNombreRef = React.createRef();
    cajaTipoRef = React.createRef();
    cajaCodigoCompraRef = React.createRef();
    cajaValorRef = React.createRef();
    cajaFechaCompraRef = React.createRef();
    cajaEstadoRef = React.createRef();
    cajaLinkRef = React.createRef();
    cajaDescripcionRef = React.createRef();
    cajaPresupuestoRef = React.createRef();

    state = { status: false}

    nuevaCompra = (e) => {
        e.preventDefault();
        var idco = this.cajaIDRef.current.value;
        var fecso = this.cajaFechaSolicitudRef.current.value;
        var nom = this.cajaNombreRef.current.value;
        var tip = this.cajaTipoRef.current.value;
       // var cod = this.cajaCodigoCompraRef.current.value;
        //var val = this.cajaValorRef.current.value;
       // var fecco = this.cajaFechaCompraRef.current.value;
        var est = this.cajaEstadoRef.current.value;
        var lin = this.cajaLinkRef.current.value;
        var desc = this.cajaDescripcionRef.current.value;
        var pre = this.cajaPresupuestoRef.current.value;
        var compra = {
              id: idco
            , fecha_solicitud: fecso
            , nombre: nom
            , tipo: tip

            , estado: est
            , link: lin
            , descripcion: desc
            , presupuesto: pre
        };
        var url = 'http://localhost:8080/gestionfinanciera/crearcompra';
        axios.post(url, compra).then(res => {
            this.setState({ status: true });
        });
    }




    render() {
        if(this.state.status === true){
            return <Redirect to="/Proyectos" />
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
                    <h3 className="card-title"  >Crear compra y asignarla a un presupuesto</h3>
                  </div>
                   
                    {/* /.card-header */}
                    {/* form start */}
                    <form onSubmit={this.nuevaCompra} style={{width: "50%", margin: "auto"}}>
                        <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">ID</label>
                            <input type="text" name="cajanom" className="form-control"  value={this.props.id} ref={this.cajaIDRef} readOnly/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1">Nombre de la compra</label>
                            <input type="text" name="cajatel" className="form-control" ref={this.cajaNombreRef} required/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1" style={{  width: '50%'}}>Fecha de solicitud de la compra</label>
                            <input type="date" id="start" name="trip-start" style={{ height: "30px"}}
       min="2000-01-01" max="2100-12-31" ref={this.cajaFechaSolicitudRef} required></input>
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1">Tipo de compra</label>
                            <input type="text" name="cajatel" className="form-control" placeholder="Tipo" ref={this.cajaTipoRef} required/>
                        </div>
             
                         <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1">Estado de la compra</label>
                            <input type="text" name="cajatel" className="form-control"  placeholder="Estado" ref={this.cajaEstadoRef} required/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1">Link de referencia</label>
                            <input type="url" name="cajatel" className="form-control"  placeholder="Estado" ref={this.cajaLinkRef} />
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1">Descripción de la compra</label>
                            <input type="text" name="cajatel" className="form-control"  placeholder="Descripción" ref={this.cajaDescripcionRef} required/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1">ID del presupuesto</label>
                            <input type="text" name="cajatel" className="form-control"   ref={this.cajaPresupuestoRef} required/>
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
