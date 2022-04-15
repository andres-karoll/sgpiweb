import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { NavLink } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';

export default class EliminarParticipante extends Component {
    /**
     * definicion de 
     */
    cajaCedula = React.createRef();
    cajaFecha = React.createRef();
    cajaId = React.createRef();
    state = {
        status: false,
        participantes: []
    };
    /**
     * metodo para mostrar un participante 
     */
    mostrarParticipantes = () => {
        var request = "/gestionproyectosaulaintegrador/listarparticipantesporporyecto/" + this.props.id;
        var url = "http://localhost:8080" + request;
        axios.get(url).then(res => {
            this.setState({
                participantes: res.data
                , status: true
            });
        });
    }
    /**
     * metodo de inicio 
     */
    componentDidMount = () => {
        this.mostrarParticipantes();
        this.setState({ pra: this.state.participantes })
    }
    /**
     * 
     * @param {metodo para eliminar un participante de un proyecto } e 
     */
    eliminarParticipante = (e) => {
        e.preventDefault();
        var ced = this.cajaCedula.current.value;
        var proyecto = this.cajaId.current.value;
        var fecha = this.cajaFecha.current.value;
        var participante = {
            cedula: ced,
            id: proyecto,
            fechafin: fecha
        }
        var request = "/gestionproyectosaulaintegrador/eliminarparticipante";
        var url = "http://localhost:8080" + request
        axios.post(url, participante).then(res => {
            this.setState({ status: true });
            if (res.data.respuesta === "el participante termino su proceso en el proyecto") {
                swal({
                    title:"El participante termino su proceso",
                    icon:"success"
                  });
                window.history.back();
            } else {
                swal({
                    title:"Ocurrio un error",
                    icon:"error"
                  });
                window.history.back();
            }
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
                                            <h3 className="card-title"  >Eliminar Partiipante</h3>
                                        </div>
                                        {/* /.card-header */}
                                        {/* form start */}
                                        <form style={{ width: "50%", margin: "auto" }} >
                                            <div className="card-body">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Participante</label>
                                                    <div></div>
                                                    <select ref={this.cajaCedula}  style={{ width: '46%' }}>
                                                        {this.state.status === true &&
                                                            (this.state.participantes.map((pra) => {
                                                                return (
                                                                    <option style={{ color: "black" }} value={pra.cedula}>{pra.nombre}</option>
                                                                );
                                                            }
                                                            )
                                                            )
                                                        }
                                                    </select>
                                                </div>

                                                <div className="form-group">

                            

                                                    <input type="hidden" name="cajadir" className="form-control" ref={this.cajaId} value={this.props.id} readOnly />

                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1"  style={{ width: '30%' }}>Fecha Fin</label>
                                                    <input type="date" id="start" name="trip-start" style={{ height: "30px" }}
                                                        min="2000-01-01" max="2100-12-31" ref={this.cajaFecha} required></input>

                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <NavLink style={{ width: '50%'  }} className="btn btn-success" onClick={this.eliminarParticipante} to={"/ProyectosAulaIntegrador/"} >eliminar participante</NavLink>
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