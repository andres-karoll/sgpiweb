import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';



export default class ActualizarComentario extends Component {

    cajaIDRef = React.createRef();
    cajaComentarioRef = React.createRef();
    cajaFaseRef = React.createRef();
    cajaNivelRef = React.createRef();
    cajaFechaRef = React.createRef();
    cajaProductoIDRef = React.createRef();

    state = { status: false}

    nuevoComentario = (e) => {
        e.preventDefault();
        var idcom = this.cajaIDRef.current.value;
        var com = this.cajaComentarioRef.current.value;
        var fas = this.cajaFaseRef.current.value;
        var niv = this.cajaNivelRef.current.value;
        var fec = this.cajaFechaRef.current.value;
        var pro = this.cajaProductoIDRef.current.value;
        var comentario = {
            id: idcom
            , comentario: com
            , fase: fas
            , nivel: niv
            , fecha: fec 
            , producto_id: pro
        };
        var url = 'http://localhost:8080/productos/crearcomentario';
        axios.post(url, comentario).then(res => {
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
                    <h3 className="card-title"  >Actualizar Comentario</h3>
                  </div>
                   
                    {/* /.card-header */}
                    {/* form start */}
                    <form onSubmit={this.nuevoComentario} style={{width: "50%", margin: "auto"}}>
                        <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">ID</label>
                            <input type="text" name="cajanom" className="form-control"  placeholder="ID" ref={this.cajaIDRef} value={this.props.id} readOnly/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Comentario</label>
                            <input type="text" name="cajatel" className="form-control" placeholder="Comentario" ref={this.cajaComentarioRef} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Fase</label>
                            <input type="text" name="cajatel" className="form-control" ref={this.cajaFaseRef} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Nivel</label>
                            <input type="text" name="cajatel" className="form-control" placeholder="Nivel" ref={this.cajaNivelRef} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Fecha</label>
                            <input type="text" name="cajatel" className="form-control" value={new Date().getFullYear()+"-"+(new Date().getMonth() + 1)+"-"+new Date().getDate()} ref={this.cajaFechaRef} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Producto ID </label>
                            <input type="text" name="cajatel" className="form-control" placeholder="Proyecto" ref={this.cajaProductoIDRef} required/>
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
