import React, { Component } from 'react';
import axios from 'axios';

import Header from '../../../components/Global/Header';
import { NavLink} from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
export default class AgregarAreasConocimiento extends Component {
    state = { 
            status: false,
            Areas:[],
            are:[]
        }
    cajaProyecto = React.createRef();
    cajaArea = React.createRef();
    mostrarAreas= () => {
        var request = "/gestionproyectosaulaintegrador/listarareas"
        var url = "http://localhost:8080" + request;
        axios.get(url).then(res => {
            this.setState({
                Areas : res.data
                ,status: true
            });
        });
    }

    componentDidMount = () => {
        this.mostrarAreas();
        this.setState({
            are:this.state.Areas
        })
    }
AgregarAreasConocimiento =  (e) => {
        e.preventDefault();
        var proye = this.cajaProyecto.current.value;
        var areaC= this.cajaArea.current.value;  
        var AreasConocimiento = {
                proyecto:proye,
                area:areaC
        };
        var url = 'http://localhost:8080/gestionproyectosaulaintegrador/agregarareaconocimiento/';
            axios.post(url, AreasConocimiento).then(res => {
            this.setState({ status: true });
            if (res.data.respuesta === "se agrego exitosamente las areas") {
                alert("El area de conocimiento fue agregada exitosamente")
                window.location.href = "/AreasConocimientoProyecto/"+this.props.id
            } else {
                alert(res.data.respuesta)
                window.location.href = "/AreasConocimientoProyecto/"+this.props.id
            }
           
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
                    <h3 className="card-title"  >Agregar areas de conocimiento  </h3>
                  </div>
                    {/* /.card-header */}
                    {/* form start */}
                    <form  style={{width: "50%", margin: "auto"}} onSubmit={this.AgregarAreasConocimiento}>
                        <div className="card-body">
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1">Areas de conocimiento</label>
                            <div></div>
                            <select ref={this.cajaArea} required>
                            {this.state.status === true &&
                              (this.state.Areas.map((are) => {
                                return (
                                  <option style={{ color: "black" }} value={are.id}>{are.nombre}</option>
                                );
                              }
                              )
                              )
                              }
                          </select>   
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputEmail1">Tu proyecto</label>
                            <input type="text" name="cajanom" className="form-control" ref={this.cajaProyecto} value={this.props.id} readOnly/>
                        </div>
                        </div>
                        <div className="card-footer">
                        
                       <NavLink style={{width: '50%'}} className="btn btn-success" onClick={this.AgregarAreasConocimiento} to={"/AreasConocimientoProyecto/"+this.props.id} >Agregar area</NavLink>
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
