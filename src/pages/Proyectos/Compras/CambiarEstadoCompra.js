import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
import swal from 'sweetalert';

export default class CambiarEstadoCompra extends Component {

    cajaIDRef = React.createRef();
    cajaEstadoRef = React.createRef();

    state = { status: false}
//metodo para cambiar el estado de la compra
    actualizar = (e) => {
        e.preventDefault();
        var idco = this.cajaIDRef.current.value;
        var est = this.cajaEstadoRef.current.value;

        var estado = {
              id_compra: idco
            , estado: est

        };
        var url = 'http://localhost:8080/gestionfinanciera/actualizarestadocompra';
        axios.post(url, estado).then(res => {
            this.setState({ status: true });
            if (res.data.respuesta==="se creo") {
                swal({
                    title: "se actualizo la compra",
                    icon:"success"
                  });
              
                window.history.back();
            }else{
              alert("no se pudo actualizar la compra")
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
                    <h3 className="card-title"  >Cambiar el estado de la compra</h3>
                  </div>
                   
                    {/* /.card-header */}
                    {/* form start */}
                    <form onSubmit={this.actualizar} style={{width: "50%", margin: "auto"}}>
                        <div className="card-body">
                        <div className="form-group">
                            <input type="hidden" name="cajanom" className="form-control"  value={this.props.id} ref={this.cajaIDRef} readOnly/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                        <label htmlFor="exampleInputPassword1">Estado de la compra</label>
                        <select className="form-control select2" style={{width: '100%'}} ref={this.cajaEstadoRef} required>
                        <option selected="selected"></option>
                        <option value = "1">Solicitada</option>
                        <option value = "2">Aceptada</option>
                        <option value = "3">Realizada</option>
                        <option value = "4">Denegada</option>
                        </select>
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