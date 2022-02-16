import React, { Component } from 'react';
import axios from 'axios';

import Header from '../../components/Global/Header';
import { NavLink} from 'react-router-dom';
import Aside from '../../components/Global/Aside';
export default class ParticiparConvocatoria extends Component {
    state = { 
            status: false,
            convocatorias:[],
            conv:[],
            proyecto:[],
            pro:[]
        }
    cajaProyecto = React.createRef();
    cajaConvocatoria = React.createRef();
    cajaEstado=React.createRef();
    mostrarConvocatorias= () => {
        var request = "/gestioninstitucional/convocatoriasestado/abierto"
        var url = "http://localhost:8080" + request;
        axios.get(url).then(res => {
            this.setState({
                convocatorias : res.data
                ,status: true
            });
        });
    }
    mostrarProyectosSemillero= () => {
        var request = "/gestionproyectosinvestigacion/todosLosproyectosusuariosemillero/"+ localStorage.getItem("cedula")
        var url = "http://localhost:8080" + request;
        axios.get(url).then(res => {
            this.setState({
                proyecto : res.data
                ,status: true
            });
        });
    }

    componentDidMount = () => {
        this.mostrarConvocatorias();
        this.mostrarProyectosSemillero();
        this.setState({
            conv:this.state.convocatorias,
            pro:this.state.proyecto
        })
    }
ParticiparConvocatoria =  (e) => {
        e.preventDefault();
        var proye = this.cajaProyecto.current.value;
        var convo= this.cajaConvocatoria.current.value;  
        var estado=this.cajaEstado.current.value;
        var ParticipacionConvocatoria = {
                proyecto:proye,
                convocatoria:convo,
                proyecto_id:estado
        };
        var url = 'http://localhost:8080/gestionproyectosinvestigacion/participarconvocatoria/';
            axios.post(url, ParticipacionConvocatoria).then(res => {
            this.setState({ status: true });
            window.history.back();  
        });
    }   
    render() {            
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
                    <h3 className="card-title"  >Unirse a un semillero</h3>
                  </div>
                    {/* /.card-header */}
                    {/* form start */}
                    <form  style={{width: "50%", margin: "auto"}} onSubmit={this.ParticiparConvocatoria}>
                        <div className="card-body">
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1">Tus proyectos de semillero</label>
                            <div></div>
                            <select ref={this.cajaProyecto}>
                            {this.state.status === true &&
                              (this.state.proyecto.map((pro) => {
                                return (
                                  <option style={{ color: "black" }} value={pro.id}>{pro.titulo}</option>
                                );
                              }
                              )
                              )
                              }
                          </select>
                           
                        </div>
                        
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1">Convocatorias Abiertas</label>
                            <div></div>
                            <select ref={this.cajaConvocatoria}>
                            {this.state.status === true &&
                              (this.state.convocatorias.map((conv) => {
                                return (
                                  <option style={{ color: "black" }} value={conv.id}>{conv.nombre_convocatoria}</option>
                                );
                              }
                              )
                              )
                              }
                          </select>
                          <div className="form-group">
                          <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                        <label htmlFor="exampleInputPassword1">Estado de la participacion </label>
                        <input type="text" name="cajatel" className="form-control" ref={this.cajaEstado} value="Propuesta" readOnly/>
                        </div>
                        </div>
                        </div>
                        <div className="card-footer">
                       <NavLink style={{width: '50%'}} className="btn btn-success" onClick={this.ParticiparConvocatoria} to={"/ProyectoSemillero"} >Participar</NavLink>
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
