import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';



export default class DesAsignarNota extends Component {

    cajaIDComentarioRef = React.createRef();

    state = { status: false}
//funcion para borrar una nota de un comentario
    nuevaCalificacion = (e) => {
        e.preventDefault();
        var idc = this.cajaIDComentarioRef.current.value;
        var calificacion = {
        id: idc
        };
        var url = 'http://localhost:8080/productos/eliminarnota';
        axios.post(url, calificacion).then(res => {
            this.setState({ status: true });
            if (res.data.respuesta==="se elimino la nota") {
                alert("se elimino la nota")
                window.history.back();
            }else{
              alert("No se pudo eliminar la nota")
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
                    <form onSubmit={this.nuevaCalificacion} style={{width: "100%", margin: "auto"}}>
                    <div>
                            <input type="hidden" name="cajatel" className="form-control" value={this.props.id} ref={this.cajaIDComentarioRef} readOnly/>
            <section className="content">
                <br />
                <div class="alert alert-danger alert-dismissible">
   
                  <h1><i class="icon fas fa-shield-alt"></i> Alert!</h1>
                  <h2><i class="icon fas fa-exclamation"></i> ¿Esta seguro que quiere eliminar la Calificacion?</h2>

                  </div>
                  </section>
            </div>
                        {/* /.card-body */}
                        <div className="card-footer">
                        <button className="btn btn-danger">Eliminar</button>
                        </div>
                    </form>

            </div>
            </div>
        )
    }
}
