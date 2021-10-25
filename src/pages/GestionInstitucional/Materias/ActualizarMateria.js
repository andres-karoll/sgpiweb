import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';

export default class ActualizarMateria extends Component {

    cajaCatalogoRef = React.createRef();
    cajaNombreRef = React.createRef();
    cajaProgramaRef = React.createRef();

    state = { status: false,
        programas:[],
        progra:[] }

    nuevaMateria = (e) => {
        e.preventDefault();
        var cata = this.cajaCatalogoRef.current.value;
        var nom = this.cajaNombreRef.current.value;
        var pro = this.cajaProgramaRef.current.value;
        var materia = {
            catalogo: cata
            , nombre: nom
            , programa: pro
        };
        var url = 'http://localhost:8080/gestioninstitucional/crearmateria';
        axios.post(url, materia).then(res => {
            this.setState({ status: true });
            window.location.href = "/Materias";
        });
    }
    Cargar = () => {
        var request = "/gestioninstitucional/listarprogramas" ;
        var url = "http://localhost:8080" + request;
         axios.get(url).then(res => {
          this.setState({
            programas: res.data
            , status: true
          })
        });
      }
      componentDidMount = () => {
        this.Cargar();
        
      }
    render() {
        if(this.state.status === true){
            //return <Redirect to="/Materias" />
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
                    <h3 className="card-title"  >Actualizar una Materia</h3>
                  </div>
                   
                    {/* /.card-header */}
                    {/* form start */}
                    <form onSubmit={this.nuevaMateria} style={{width: "50%", margin: "auto"}}>
                        <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Catalogo</label>
                            <input type="text" name="cajanom" className="form-control" value = {this.props.catalogo} placeholder="Catalogo" ref={this.cajaCatalogoRef} readOnly/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1">Nombre de la Materia</label>
                            
                            <input type="text" name="cajadir" className="form-control" placeholder="Nombre de la materia" ref={this.cajaNombreRef} required/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label style={{    width: '50%'}} htmlFor="exampleInputPassword1">Programa</label>
                            <select ref={this.cajaProgramaRef} style={{width: '50%',  height: "30px"}} required>
                                {this.state.status === true && 
                            
                            ( this.state.programas.map((progra) => {
                            return(
                                    <option value={progra.id}>{progra.nombre}</option> 
                                    );
                                })
                                )}
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
