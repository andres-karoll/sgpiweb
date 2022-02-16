import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';



export default class AsignarComentario extends Component {

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
            if (res.data.respuesta==="el comentario se creo") {
                alert("el comentario se creo")
                window.history.back();
            }else{
              alert("no se pudo crear el comentario")
              window.history.back();
            }
        });
    }




    render() {

        if(this.state.status === true){
            //return <Redirect to="/Proyectos" />
        }
        var rol=localStorage.getItem("tipo")
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
                    <h3 className="card-title"  >Crear Comentario</h3>
                  </div>
                   
                    {/* /.card-header */}
                    {/* form start */}
                    <form onSubmit={this.nuevoComentario} style={{width: "50%", margin: "auto"}}>
                        <div className="card-body">
                        <div className="form-group">
                            <input type="hidden" name="cajanom" className="form-control"  placeholder="ID" ref={this.cajaIDRef} required/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1">Comentario</label>
                            <input type="text" name="cajatel" className="form-control" placeholder="Comentario" ref={this.cajaComentarioRef} required/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1">Fase</label>
                            <input type="text" name="cajatel" className="form-control" ref={this.cajaFaseRef} required/>
                        </div>
                        <div className="form-group">
                        {
                            rol==="Docentes"&&
                            <input type="text" name="cajatel" className="form-control" placeholder="Nivel" ref={this.cajaNivelRef} required/>
                        
                        }
                        {
                            rol==="Docentes"&&
                            <input type="text" name="cajatel" className="form-control" placeholder="Nivel" ref={this.cajaNivelRef} required/>
                        
                        }
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1">Nivel</label>
                            <input type="text" name="cajatel" className="form-control" placeholder="Nivel" ref={this.cajaNivelRef} required/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1">Fecha</label>
                            <input type="date" id="start" name="trip-start"
       min="2000-01-01" max="2100-12-31" ref={this.cajaFechaRef} required></input>
                        </div>
                        <div className="form-group">
                            <input type="hidden" name="cajatel" className="form-control" value={this.props.id} placeholder="Proyecto" ref={this.cajaProductoIDRef} readOnly/>
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
