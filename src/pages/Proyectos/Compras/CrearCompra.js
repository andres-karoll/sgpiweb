import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
import swal from 'sweetalert';


export default class CrearCompra extends Component {

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
//funcion para crear una compra nuevaasignando las variables del JSON
    nuevaCompra = (e) => {
        e.preventDefault();
        var idco = this.cajaIDRef.current.value;
        var fecso = this.cajaFechaSolicitudRef.current.value;
        var nom = this.cajaNombreRef.current.value;
        var tip = this.cajaTipoRef.current.value;

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
            if (res.data.respuesta==="compra creada") {
                swal({
                    title: "compra creada",
                    icon:"success"
                  });
              
                window.history.back();
            }else{
              alert("no se pudo crear la compra")
              window.history.back();
            }
        });
    }




    render() {
        if(this.state.status === true){
            //return <Redirect to="/Proyectos" />
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
                            <input type="hidden" name="cajanom" className="form-control"  placeholder="ID" ref={this.cajaIDRef} required/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1">Nombre de la compra</label>
                            <input type="text" name="cajatel" className="form-control" placeholder="Nombre" ref={this.cajaNombreRef} required/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1" style={{  width: '50%'}}>Fecha de solicitud de la compra</label>
                            <input type="date" id="start" name="trip-start"
       min="2000-01-01" max="2100-12-31" ref={this.cajaFechaSolicitudRef} required></input>
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1">Tipo de compra</label>
                    
                            <select className="form-control select2" style={{width: '100%'}} ref={this.cajaTipoRef}  >
                      
                        <option>Servicio</option>
                        <option>Articulo</option>
                        </select>
                        </div>
         
                        <div className="form-group">

                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            {/**  <label htmlFor="exampleInputPassword1">Estado de la compra</label>*/}
                            <input type="hidden" name="cajatel" className="form-control"  value={1}  ref={this.cajaEstadoRef} readOnly/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1">Link de referencia</label>
                            <input type="url" name="cajatel" className="form-control"  placeholder="Link" ref={this.cajaLinkRef} required/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1">Descripción de la compra</label>
                            <input type="text" name="cajatel" className="form-control"  placeholder="Descripción" ref={this.cajaDescripcionRef} required/>
                        </div>
                        <div className="form-group">
                            <input type="hidden" name="cajatel" className="form-control"  value={this.props.id} ref={this.cajaPresupuestoRef} readOnly/>
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
