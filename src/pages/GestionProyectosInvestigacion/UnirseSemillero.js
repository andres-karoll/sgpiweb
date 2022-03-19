import React, { Component } from 'react';
import axios from 'axios';

import Header from '../../components/Global/Header';
import { NavLink } from 'react-router-dom';
import Aside from '../../components/Global/Aside';
import swal from 'sweetalert';
export default class UnirseSemillero extends Component {
    state = {
        status: false,
        semilleros: [],
        semi: []
    }
    /**
     * definicion de variables
     */
    cajaId = React.createRef();
    cajaCedula = React.createRef();
    /**
     * mostrar semilleros 
     */
    mostrarSemilleros = () => {
        var request = "/gestioninstitucional/listarsemilleros";
        var url = "http://localhost:8080" + request;
        axios.get(url).then(res => {
            this.setState({
                semilleros: res.data
                , status: true
            });
        });
    }
    /**
     * metodo de inicio 
     */
    componentDidMount = () => {
        this.mostrarSemilleros();
        this.setState({ semi: this.state.semilleros })
    }
    /**
     * metodo para ingresar a un semillero 
     * @param {*} e 
     */
    AgregarParticipante = (e) => {
        e.preventDefault();
        var id = this.cajaId.current.value;
        var ced = this.cajaCedula.current.value;
        var participante = {
            cedula: ced,
            semillero: id,
        };
        var url = 'http://localhost:8080/gestionusuario/asignarsemillero';
        axios.post(url, participante).then(res => {
            this.setState({ status: true });
            swal({
                title:'Ya estas incrito a un semillero, por favor ingresa vuelve a iniciar sesion con el rol de semillerista',
                icon:"success"
              }); 
            window.history.back();
        });
    }
    render() {
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
                                    <div className="card card-primary">
                                        <div className="card-header" style={{ align: "center" }}>
                                            <h3 className="card-title"  >Unirse a un semillero</h3>
                                        </div>
                                        {/* /.card-header */}
                                        {/* form start */}
                                        <form style={{ width: "50%", margin: "auto" }} onSubmit={this.AgregarParticipante}>
                                            <div className="card-body">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1" style={{ color: "red" }}>*</label>
                                                    <label htmlFor="exampleInputEmail1">Cedula</label>
                                                    <input type="text" name="cajanom" className="form-control" placeholder="Catalogo" ref={this.cajaCedula} value={localStorage.getItem("cedula")} readOnly />
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1" style={{ color: "red" }}>*</label>
                                                    <label htmlFor="exampleInputPassword1">Semillero</label>
                                                    <select ref={this.cajaId}>
                                                        {this.state.status === true &&
                                                            (this.state.semilleros.map((semi) => {
                                                                return (
                                                                    <option style={{ color: "black" }} value={semi.id}>{semi.nombre}</option>
                                                                );
                                                            }
                                                            )
                                                            )
                                                        }
                                                    </select>

                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <NavLink style={{ width: '50%' }} className="btn btn-success" onClick={this.AgregarParticipante} to={"/ProyectosAulaIntegrador"} >Agregar Participante</NavLink>
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
