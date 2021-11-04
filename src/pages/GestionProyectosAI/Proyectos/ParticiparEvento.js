import React, { Component } from 'react';
import axios from 'axios';

import Header from '../../../components/Global/Header';
import { NavLink} from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
export default class ParticiparEvento extends Component {
    state = { 
            status: false,
            Evento:[],
            eve:[]
          
        }
    cajaProyecto = React.createRef();
    cajaEvento = React.createRef();
    cajaFecha=React.createRef();
    cajaReconocimiento=React.createRef();
    mostrarEventos= () => {
        var request = "/gestionproyectosaulaintegrador/listareventos"
        var url = "http://localhost:8080" + request;
        axios.get(url).then(res => {
            this.setState({
                Evento : res.data
                ,status: true
            });
        });
    }

    componentDidMount = () => {
        this.mostrarEventos();
        this.setState({
            eve:this.state.Evento,
            
        })
    }
ParticiparEvento =  (e) => {
        e.preventDefault();
        var proye = this.cajaProyecto.current.value;
        var even=this.cajaEvento.current.value;
        var fe=this.cajaFecha.current.value;
        var reco=this.cajaReconocimiento.current.value;
        var ParticipacionEvento = {
                proyecto:proye,
                evento:even ,
                fecha:fe,
                reconocimiento:reco
        };
        var url = 'http://localhost:8080/gestionproyectosaulaintegrador/participarevento/';
            axios.post(url, ParticipacionEvento).then(res => {
            this.setState({ status: true });
            window.location.href = "/ProyectoSemillero" ;       
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
                <form  style={{width: "50%", margin: "auto"}} onSubmit={this.ParticiparEvento}>
                    <div className="card-body">
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Eventos vigentes </label>
                        <div></div>
                        <select ref={this.cajaEvento}>
                        {this.state.status === true &&
                          (this.state.Evento.map((eve) => {
                            return (
                              <option style={{ color: "black" }} value={eve.id}>{eve.nombre}</option>
                            );
                          }
                          )
                          )
                          }
                      </select>   
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Tu proyecto</label>
                        <input type="text" name="cajanom" className="form-control" ref={this.cajaProyecto} value={this.props.id} readOnly/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Fecha de participacion</label>
                        <input type="text" name="cajanom" className="form-control" ref={this.cajaFecha}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Reconocimiento</label>
                        <input type="text" name="cajanom" className="form-control" ref={this.cajaReconocimiento}/>
                    </div>
                    </div>
                    <div className="card-footer">
                   <NavLink style={{width: '50%'}} className="btn btn-success" onClick={this.ParticiparEvento} to={"/ProyectoSemillero"} >Participar</NavLink>
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