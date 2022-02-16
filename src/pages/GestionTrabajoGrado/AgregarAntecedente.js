import React, { Component } from 'react';
import axios from 'axios';

import Header from '../../components/Global/Header';
import { NavLink} from 'react-router-dom';
import Aside from '../../components/Global/Aside';
export default class AgregarAntecedente extends Component {
    state = { 
            status: false,
            semilleros:[],
            semi:[]
        }
    cajaId = React.createRef();
    cajaAnte = React.createRef();
    mostrarSemilleros= () => {
        var request = "/gestionproyectosaulaintegrador/todosLosproyectos";
        var url = "http://localhost:8080" + request;
        axios.get(url).then(res => {
            this.setState({
                semilleros: res.data
                ,status: true
            });
        });
    }

    componentDidMount = () => {
        this.mostrarSemilleros();
        this.setState({semi:this.state.semilleros})
    }
AgregarAntecedente =  (e) => {
        e.preventDefault();
        var pro = this.cajaId.current.value;
        var ant= this.cajaAnte.current.value;  
        var participante = {
                proyecto:pro,
                antecedente:ant,
        };
        var url = 'http://localhost:8080/gestionproyectosinvestigacion/agregarantecedente';
            axios.post(url, participante).then(res => {
            this.setState({ status: true });
            console.log(res.data.respuesta)
            if (res.data.respuesta === "se agrego exitosamente el antecedente") {
                alert("se agrego exitosamente el antecedentee")
                window.location.href = "/Antecedentes/"+this.props.id ;       
            }else if(res.data.respuesta === "el antecedente aun no a terminado"){
                alert("el antecedente aun no a terminado")
                window.history.back();
            }
             else {
                alert("no se agrego el antecedente")
                window.history.back();       
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
                    <h3 className="card-title"  >Agregar Antecedente</h3>
                  </div>
                    {/* /.card-header */}
                    {/* form start */}
                    <form  style={{width: "50%", margin: "auto"}} onSubmit={this.AgregarAntecedente}>
                        <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Proyecto</label>
                            <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <input type="text" name="cajanom" className="form-control" placeholder="Catalogo" ref={this.cajaId} value={this.props.id} readOnly/>
                        </div>
                        
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1">Antecedente</label>
                            <select ref={this.cajaAnte} required>
                            {this.state.status === true &&
                              (this.state.semilleros.map((semi) => {
                                return (
                                  <option style={{ color: "black" }} value={semi.id}>{semi.titulo}</option>
                                );
                              }
                              )
                              )
                              }
                          </select>
                           
                        </div>
                        </div>
                        <div className="card-footer">
                       <NavLink style={{width: '50%'}} className="btn btn-success" onClick={this.AgregarAntecedente} to={"/ProyectosAulaIntegrador"} >Agregar Participante</NavLink>
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
