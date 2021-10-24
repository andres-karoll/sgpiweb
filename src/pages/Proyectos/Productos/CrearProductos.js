import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';



export default class CrearProducto extends Component {

    cajaIDRef = React.createRef();
    cajaTituloRef = React.createRef();
    cajaTipoRef = React.createRef();
    cajaURLRef = React.createRef();
    cajaProyectoRef = React.createRef();
    cajaFechaRef = React.createRef();

    state = { status: false}

    nuevoProducto = (e) => {
        e.preventDefault();
        var idpro = this.cajaIDRef.current.value;
        var tit = this.cajaTituloRef.current.value;
        var tip = this.cajaTipoRef.current.value;
        var url = this.cajaURLRef.current.value;
        var pro = this.cajaProyectoRef.current.value;
        var fec = this.cajaFechaRef.current.value;
        var producto = {
            id: idpro
            , titulo_producto: tit
            , tipo_producto: tip
            , url_repo: url
            , proyecto: pro
            , fecha: fec
        };
        var url = 'http://localhost:8080/productos/crearproducto';
        axios.post(url, producto).then(res => {
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
                    <h3 className="card-title"  >Crear Producto</h3>
                  </div>
                   
                    {/* /.card-header */}
                    {/* form start */}
                    <form onSubmit={this.nuevoProducto} style={{width: "50%", margin: "auto"}}>
                        <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">ID</label>
                            <input type="text" name="cajanom" className="form-control"  placeholder="ID" ref={this.cajaIDRef} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Titulo del producto</label>
                            <input type="text" name="cajatel" className="form-control" placeholder="Titulo" ref={this.cajaTituloRef} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Tipo</label>
                            <input type="text" name="cajatel" className="form-control" ref={this.cajaTipoRef} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">URL del producto</label>
                            <input type="text" name="cajatel" className="form-control" placeholder="Descripcion" ref={this.cajaURLRef} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Fecha</label>
                            <input type="text" name="cajatel" className="form-control" value={new Date().getFullYear()+"-"+(new Date().getMonth() + 1)+"-"+new Date().getDate()} ref={this.cajaFechaRef} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Proyecto </label>
                            <input type="text" name="cajatel" className="form-control" value={this.props.id} placeholder="Proyecto" ref={this.cajaProyectoRef} readOnly/>
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
