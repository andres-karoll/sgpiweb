import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
import swal from 'sweetalert';


export default class RealizarCompra extends Component {

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
//funcion para realizar una compra
    nuevaCompra = (e) => {
        e.preventDefault();
        var idco = this.cajaIDRef.current.value;


        var cod = this.cajaCodigoCompraRef.current.value;
        var val = this.cajaValorRef.current.value;
        var fecco = this.cajaFechaCompraRef.current.value;

        var est = this.cajaEstadoRef.current.value;

        var compra = {
              id: idco
            , codigo_compra: cod
            , fecha_compra: fecco
            , valor: val
            , estado: est
        };
        var url = 'http://localhost:8080/gestionfinanciera/realizarcompra';
        axios.post(url, compra).then(res => {
            this.setState({ status: true });
            if (res.data.respuesta==="se creo") {
                swal({
                    title: "compra realizada",
                    icon:"success"
                  });
                
                window.history.back();
            }
            else if (res.data.respuesta==="la fecha debe ser mayor a la fecha de solicitud") {
                alert("la fecha debe ser mayor a la fecha de solicitud")
                window.history.back();
            }
            else if (res.data.respuesta==="no se puede realizar la compra, el presupuesto se a excedido") {
                alert("no se puede realizar la compra, el presupuesto se a excedido")
                window.history.back();
            }
            else{
                alert("no se pudo crear")
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
                            <input type="hidden" name="cajanom" className="form-control"  value={this.props.id} ref={this.cajaIDRef} readOnly/>
                        </div>
    


                        
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1">Codigo de la compra</label>
                            <input type="text" name="cajatel" className="form-control" placeholder="Codigo" ref={this.cajaCodigoCompraRef} required/>
                        </div>
                        
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1">Valor de la compra</label>
                            <input type="number" name="cajatel" className="form-control"  placeholder="Valor" ref={this.cajaValorRef} required/>
                        </div>
                        
                        
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1" style={{  width: '50%'}}>Fecha de compra</label>
                            <input type="date" id="start" name="trip-start" style={{ height: "30px"}}
       min="2000-01-01" max="2100-12-31" ref={this.cajaFechaCompraRef} required></input>                        </div>
       
                        <div className="form-group">

                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                           {/**  <label htmlFor="exampleInputPassword1">Estado de la compra</label>*/}
                            <input type="hidden" name="cajatel" className="form-control"  value={3}  ref={this.cajaEstadoRef} readOnly/>
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