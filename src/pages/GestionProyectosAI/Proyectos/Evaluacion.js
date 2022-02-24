import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';


export default class Evaluacion extends Component {

    cajaIDRef = React.createRef();
    cajaEstadoRef = React.createRef();
    cajaProyectoRef = React.createRef();
    state = { status: false,
    proyecto:[]}
    actualizar = (e) => {
        e.preventDefault();
        var pro = this.cajaProyectoRef.current.value;
        var est = this.cajaEstadoRef.current.value;
        var estado = {
            proyecto: pro
            , estado: est
        };
        var url = 'http://localhost:8080/gestionproyectosinvestigacion/evaluar/';
        axios.post(url, estado).then(res => {
            this.setState({ status: true });
            if (res.data.respuesta==="Se realizo la validacion exitosamente") {
              alert("Se realizo la validacion exitosamente")
              window.history.back();
            }else{
              alert("No se puedo realizar la actualizacion de estado")
              window.history.back();
            }
        });
    }
      Cargardos = () => {
        var request = "/gestionproyectosaulaintegrador/listarporid/" + this.props.id;
        var url = "http://localhost:8080" + request;
         axios.get(url).then(res => {
          this.setState({
            proyecto: res.data
            , status: true
          })
        });
      }

      componentDidMount = () => {
        this.Cargardos();
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
                    <h3 className="card-title"  >Aceptar o Denegar Convocatoria</h3>
                  </div>
                   
                    {/* /.card-header */}
                    {/* form start */}
                    <form onSubmit={this.actualizar} style={{width: "50%", margin: "auto"}}>
                        <div className="card-body">
                        <div className="form-group">
                            <input type="hidden" name="cajanom" className="form-control"  value={this.props.id} ref={this.cajaIDRef} readOnly/>
                        </div>
                        <div className="card-body box-profile">
    <div className="text-center">
      <img className="profile-user-img img-fluid img-circle" src="https://i.ibb.co/6smVBgh/Captura.png" alt="User profile picture" />
    </div>
    <h3 className="profile-username text-center">Proyecto de Convocatoria</h3>
    <ul className="list-group list-group-unbordered mb-3">
    <li className="list-group-item">
        <b>Proyecto</b> <a className="float-right">{this.state.proyecto.titulo}</a>
        <input type='hidden' ref={this.cajaProyectoRef} value={this.state.proyecto.id} />
      </li>

      <li className="list-group-item">
        <b>Descripcion</b> <a className="float-right">{this.state.proyecto.descripcion}</a>
      </li>
      <li className="list-group-item">
        <b>Metodologia</b> <a className="float-right">{this.state.proyecto.metodologia}</a>
      </li>

      <li className="list-group-item">
        <b>Justificacion</b> <a className="float-right">{this.state.proyecto.justificacion}</a>
      </li>
      <li className="list-group-item">
        <b>Estado</b> <a className="float-right">{this.state.proyecto.estado}</a>
      </li>
    </ul>
  </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                        <label htmlFor="exampleInputPassword1">Evaluar</label>
                        <select className="form-control select2" style={{width: '100%'}} ref={this.cajaEstadoRef} required>
                        <option selected>Elige una opcion</option>                  
                    {(this.state.proyecto.estado==="Propuesta") &&
                        <option value = "Desarrollo">Desarrollo</option>                                                             
                    }
                    {(this.state.proyecto.estado==="Desarrollo") &&
                        <option value = "Finalizado">Finalizado</option>                                                             
                    }
                       <option value = "Rechazar">Rechazar</option>    
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