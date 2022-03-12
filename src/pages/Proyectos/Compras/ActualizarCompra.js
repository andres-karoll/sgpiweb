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

    state = { status: false,
    compra:{}}
//funcion para obtener la informacion actual de la compra
    Cargar = () => {
        var request = "/gestionfinanciera/compraid/" +this.props.id;
        var url = "http://localhost:8080" + request;
         axios.get(url).then(res => {
          this.setState({
            compra: res.data
            , status: true
          })
        });
      }
      componentDidMount = () => {
        this.Cargar();
      }
//metodo para actualizar la compra asignan las variables del JSON
    actualizarCompra = (e) => {
        e.preventDefault();
        var idco = this.cajaIDRef.current.value;

        var nom = this.cajaNombreRef.current.value;
        var tip = this.cajaTipoRef.current.value;
        var lin = this.cajaLinkRef.current.value;
        var desc = this.cajaDescripcionRef.current.value;

        var compra = {
              id: idco

            , nombre: nom
            , tipo: tip

            , link: lin
            , descripcion: desc

        };
        var url = 'http://localhost:8080/gestionfinanciera/modificarcompra';
        axios.post(url, compra).then(res => {
            this.setState({ status: true });
            if (res.data.respuesta==="se actualizo la compra") {
                alert("se actualizo la compra")
                window.location.href ="/ComprasPresupuesto/" + this.state.compra.presupuesto
            }else{
              alert("no se pudo actualizar la compra")
              window.location.href ="/ComprasPresupuesto/" + this.state.compra.presupuesto
            }
        });
    }

    

    render() {
        if(this.state.status === true){
           // return <Redirect to="/Proyectos" />
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
                    <h3 className="card-title"  >Actualizar compra</h3>
                  </div>
                   
                    {/* /.card-header */}
                    {/* form start */}
                    <form onSubmit={this.actualizarCompra} style={{width: "50%", margin: "auto"}}>
                        <div className="card-body">
                        <div className="form-group">
                            <input type="hidden" name="cajanom" className="form-control"  value={this.props.id} ref={this.cajaIDRef} readOnly/>
                        </div>
                        <div className="form-group">
                     
                            <label htmlFor="exampleInputPassword1">Nombre de la compra actual: {this.state.compra.nombre}</label>
                            <input type="text" name="cajatel" className="form-control" placeholder={this.state.compra.nombre} ref={this.cajaNombreRef} />
                        </div>
                        <div className="form-group">
                        
                            <label htmlFor="exampleInputPassword1">Tipo de compra actual: {this.state.compra.tipo}</label>
                      
                            <select className="form-control select2" style={{width: '100%'}} ref={this.cajaTipoRef}  >
                        <option selected="selected">{this.state.compra.tipo}</option>
                        <option>Servicio</option>
                        <option>Articulo</option>
                        </select>
                        </div>
                        <div className="form-group">
                  
                            <label htmlFor="exampleInputPassword1">Link de referencia actual: {this.state.compra.link}</label>
                            <input type="url" name="cajatel" className="form-control"  placeholder={this.state.compra.link} ref={this.cajaLinkRef} />
                        </div>
                        <div className="form-group">
                        
                            <label htmlFor="exampleInputPassword1">Descripción de la compra actual: {this.state.compra.descripcion}</label>
                            <textarea type="text" rows="15" name="cajatel" className="form-control"  placeholder={this.state.compra.descripcion} ref={this.cajaDescripcionRef} />
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
