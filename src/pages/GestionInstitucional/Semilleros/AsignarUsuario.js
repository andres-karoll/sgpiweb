import React, { Component } from 'react';
import axios from 'axios';
import { NavLink, Redirect } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
import swal from 'sweetalert';
export default class AsignarUsuario extends Component {

    cajaSemilleroRef = React.createRef();
    cajaUsuarioRef = React.createRef();

    state = { status: false }
//funcion para asignar un usuario al semillero
    nuevaAsignacion = (e) => {
        e.preventDefault();
        var semi = this.cajaSemilleroRef.current.value;
        var usu = this.cajaUsuarioRef.current.value;
        var asignacion = {
            cedula: usu
            , semillero: semi
        };
        var url = 'http://localhost:8080/gestioninstitucional/asignarsemillero';
        axios.post(url, asignacion).then(res => {
            this.setState({ status: true });
            if (res.data.respuesta==="el usuario fue asignado exitosamente") {
                swal({
                    title: "el usuario fue asignado exitosamente",
                    icon:"success"
                  });
                
                //window.location.href = "/Semilleros";
            }else{
              alert("el usuario no fue asignado exitosamente")
              //window.location.href = "/Semilleros";
            }
        });
    }
    render() {
        if(this.state.status === true){
         return <Redirect to="/Semilleros"/>
        }
        return (
            <div>
                <Aside />
                <Header />
                <div className="content-wrapper">
                    <section className="content">

                        <div className="container-fluid">
                            <div className="row">
                                {/* left column */}
                                <div className="col-md-12">
                                    {/* general form elements */}
                                    <div className="card card-primary" style={{ width: '50%', marginLeft:"auto", marginRight:"auto"}}>
                                        <div className="card-header" style={{ align: "center" }}>
                                            <h3 className="card-title"  >Asignar usuario</h3>
                                        </div>
                <form onSubmit={this.nuevaAsignacion} className="form-horizontal">
                    <div className="card-body">
                    <div className="form-group row">
                        <div className="col-sm-5">
                        <input type="hidden" className="form-control" id="inputEmail3" value = {this.props.id} placeholder="Semillero" ref={this.cajaSemilleroRef} readOnly/>
                        </div>
                    </div>

                    <div className="form-group row">
                    <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Cedula de la persona a ingresar</label>
                        <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputEmail3" placeholder="Cedula" ref={this.cajaUsuarioRef} required/>
                        </div>
                    </div>

                    </div>
                    {/* /.card-body */}
                    <div className="card-footer">
                    <button type="submit" className="btn btn-success">Enviar</button>
                    <NavLink to="/Semilleros" className="btn btn-danger">Cancelar</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    {/* /.card-footer */}
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