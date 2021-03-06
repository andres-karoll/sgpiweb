import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
import swal from 'sweetalert';
export default class ActualizarPrograma extends Component {

    cajaIDRef = React.createRef();
    cajaNombreRef = React.createRef();
    cajaFacultadRef = React.createRef();
    cajaDirectorRef = React.createRef();

    state = { status: false,
        facultades:[],
        facul:[],
    programa:{} }
//funcion para actualizar el programa asignando las variables del JSON
    actualizarPrograma = (e) => {
        e.preventDefault();
        var idprograma = this.cajaIDRef.current.value;
        var nom = this.cajaNombreRef.current.value;
        var facul = this.cajaFacultadRef.current.value;
        var direc = this.cajaDirectorRef.current.value;
        var programa = {
            id: idprograma
            , nombre: nom
            , facultad_id: facul
            , director: direc
        };
        var url = 'http://localhost:8080/gestioninstitucional/modificarprograma';
        axios.post(url, programa).then(res => {
            this.setState({ status: true });
            if (res.data.respuesta==="se actualizo el programa") {
                swal({
                    title: "se actualizó el programa",
                    icon:"success"
                  });
                window.location.href = "/Programas";
            }else if (res.data.respuesta==="el semillero no se creo porque el usuario es un estudiante inactivo") {
                swal({
                    title: "el semillero no se creo porque el usuario es un estudiante inactivo",
                    icon:"error"
                  });
                window.location.href = "/Programas";
            }else if (res.data.respuesta==="el semillero no se creo porque el usuario es un estudiante activo") {
                swal({
                    title: "el semillero no se creo porque el usuario es un estudiante activo",
                    icon:"error"
                  });
                window.location.href = "/Programas";
            }else if (res.data.respuesta==="el semillero no se creo porque el usuario es un semillerista") {
                swal({
                    title: "el semillero no se creo porque el usuario es un semillerista",
                    icon:"error"
                  });
                window.location.href = "/Programas";
            }else{
                swal({
                    title: "no se pudo actualizar el programa",
                    icon:"error"
                  });
              window.location.href = "/Programas";
            }
        });
    }

//funcion para listar las facultades del aplicativo
    Cargar = () => {
        var request = "/gestioninstitucional/listarfacultades" ;
        var url = "http://localhost:8080" + request;
         axios.get(url).then(res => {
          this.setState({
            facultades: res.data
            , status: true
          })
        });
      }
//funcion para obtener la informacion actual del programa
      Cargardos = () => {
        var request = "/gestioninstitucional/programaid/" + this.props.id ;
        var url = "http://localhost:8080" + request;
         axios.get(url).then(res => {
          this.setState({
            programa: res.data
            , status: true
          })
        });
      }
      componentDidMount = () => {
        this.Cargar();
        this.Cargardos();
        
      }
    render() {
        if(this.state.status === true){
            //return <Redirect to="/Programas" />
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
                    <h3 className="card-title"  >Actualizar Programa</h3>
                  </div>
                   
                    {/* /.card-header */}
                    {/* form start */}
                    <form onSubmit={this.actualizarPrograma} style={{width: "50%", margin: "auto"}}>
                        <div className="card-body">
                        <div className="form-group">
                            <input type="hidden" name="cajanom" className="form-control" value = {this.props.id} placeholder="ID" ref={this.cajaIDRef} readOnly/>
                        </div>
                        <div className="form-group">

                            <label htmlFor="exampleInputPassword1">Nombre de Programa actual: {this.state.programa.nombre}</label>
                            <input type="text" name="cajadir" className="form-control" placeholder={this.state.programa.nombre} ref={this.cajaNombreRef}/>
                        </div>
                        <div className="form-group">
                            <label style={{    width: '50%'}} htmlFor="exampleInputPassword1">Facultad actual: {this.state.programa.Facultad}</label>
                            <select ref={this.cajaFacultadRef} style={{width: '50%',  height: "30px"}} required>
                            <option disabled selected value={this.state.programa.Facultad_id}>{this.state.programa.Facultad}</option>
                                {this.state.status === true && 
                            
                            ( this.state.facultades.map((facul) => {
                            return(
                                    <option value={facul.id}>{facul.nombre}</option> 
                                    );
                                })
                                )}
                            </select>
                        
                        
                        </div>
                        <div className="form-group">

                            <label htmlFor="exampleInputPassword1">Director actual: {this.state.programa.Director}</label>
                            <div className="form-group">
                            <label htmlFor="exampleInputPassword1" style={{color: "red"}}>Si desea actualizar el lider ingrese la cedula</label>
                            <input type="text" name="cajatel" className="form-control" placeholder={this.state.programa.Director} ref={this.cajaDirectorRef}/>
                            </div>
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