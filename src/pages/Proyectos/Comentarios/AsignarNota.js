import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
import swal from 'sweetalert';


export default class AsignarNota extends Component {

    cajaCalificacionRef = React.createRef();
    cajaIDComentarioRef = React.createRef();

    state = { status: false}
//metodo para asignar una calificacion a un comentario
    nuevaCalificacion = (e) => {
        e.preventDefault();
        var cal = this.cajaCalificacionRef.current.value;
        var idc = this.cajaIDComentarioRef.current.value;
        var calificacion = {
            calificacion: cal
            , id: idc
        };
        var url = 'http://localhost:8080/productos/asignarnota';
        axios.post(url, calificacion).then(res => {
            this.setState({ status: true });
            if (res.data.respuesta==="se asigno la nota") {
                swal({
                    title: "se asigno la nota",
                    icon:"success"
                  });
              
                window.history.back();
            }else{
              alert("No se pudo")
              window.history.back();
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
                    <h3 className="card-title"  >Asignar Nota</h3>
                  </div>
                   
                    {/* /.card-header */}
                    {/* form start */}
                    <form onSubmit={this.nuevaCalificacion} style={{width: "50%", margin: "auto"}}>
                        <div className="card-body">
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputEmail1">Calificación</label>
                           {/* <input type="text" name="cajanom" className="form-control"  placeholder="Calificación" ref={this.cajaCalificacionRef} required/>*/}
                            <input type="number" placeholder="1.0" className="form-control" step="0.5" min="0" max="5" ref={this.cajaCalificacionRef} required/>
                        </div>

                        <div className="form-group">
                            <input type="hidden" name="cajatel" className="form-control" value = {this.props.id} ref={this.cajaIDComentarioRef} readOnly/>
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