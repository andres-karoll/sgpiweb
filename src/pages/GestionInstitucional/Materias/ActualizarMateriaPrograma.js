import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
import swal from 'sweetalert';
export default class ActualizarMateriaPrograma extends Component {

    cajaCatalogoRef = React.createRef();
    cajaNombreRef = React.createRef();
    cajaProgramaRef = React.createRef();

    state = { status: false,
        programas:[],
        progra:[],
    materia:{} }
//metodo para ctualizar la materia asiganndo las variables del JSON
    actualizarMateria = (e) => {
        e.preventDefault();
        var cata = this.cajaCatalogoRef.current.value;
        var nom = this.cajaNombreRef.current.value;
        var pro = this.cajaProgramaRef.current.value;
        var materia = {
            catalogo: cata
            , nombre: nom
            , programa: pro
        };
        var url = 'http://localhost:8080/gestioninstitucional/modificarmateria';
        axios.post(url, materia).then(res => {
            this.setState({ status: true });
            if (res.data.respuesta==="la materia fue actualizada") {
                swal({
                    title: "la materia fue actualizada",
                    icon:"success"
                  });
                window.history.back();
            }else{
              alert("la materia no fue actualizada")
              window.history.back();
            }
        });
    }
    //metodo para lisatr los programas del aplicativo
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
      //metodo para obtener la informacion actual de la materia
      Cargardos = () => {
        var request = "/gestioninstitucional/materiaid/" + this.props.catalogo ;
        var url = "http://localhost:8080" + request;
         axios.get(url).then(res => {
          this.setState({
            materia: res.data
            , status: true
          })
        });
      }
      componentDidMount = () => {
        this.Cargar();
        this.Cargardos();
      }
    render() {
        var programa = localStorage.getItem("programa");
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
                    <form onSubmit={this.actualizarMateria} style={{width: "50%", margin: "auto"}}>
                        <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Catalogo actual: {this.state.materia.catalogo}</label>
                            <div className="form-group">
                            <label htmlFor="exampleInputPassword1" style={{color: "red"}}>El catalogo no puede ser modificado</label>
                            <input type="text" name="cajanom" className="form-control" value = {this.props.catalogo} placeholder="Catalogo" ref={this.cajaCatalogoRef}/>
                            </div>
                        </div>
                        <div className="form-group">
            
                            <label htmlFor="exampleInputPassword1">Nombre de la Materia actual: {this.state.materia.nombre}</label>
                            
                            <input type="text" name="cajadir" className="form-control" placeholder="Nombre de la materia" ref={this.cajaNombreRef}/>
                        </div>
                        <div className="form-group">

                            <input type="hidden" name="cajadir" className="form-control" value={programa} ref={this.cajaProgramaRef} readOnly/>
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