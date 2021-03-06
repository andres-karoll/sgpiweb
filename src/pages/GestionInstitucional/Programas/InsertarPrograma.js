import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
import swal from 'sweetalert';
export default class InsertarPrograma extends Component {

    cajaIDRef = React.createRef();
    cajaNombreRef = React.createRef();
    cajaFacultadRef = React.createRef();
    cajaDirectorRef = React.createRef();

    state = { status: false,
    facultades:[],
    facul:[]
}
//funcion para crear un programa asignando las vareibales del JSON
    nuevoPrograma = (e) => {
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
        var url = 'http://localhost:8080/gestioninstitucional/crearprograma';
        axios.post(url, programa).then(res => {
            this.setState({ status: true });
            
            if (res.data.respuesta==="se creo el programa") {
                swal({
                    title: "se creo el programa",
                    icon:"success"
                  });
                window.location.href = "/Programas";
            }else if (res.data.respuesta==="la facultad no existe") {
                swal({
                    title: "la facultad no existe",
                    icon:"error"
                  });
                
                window.location.href = "/Programas";
            }else if (res.data.respuesta==="el usuario no existe") {
                swal({
                    title: "el usuario no existe",
                    icon:"error"
                  });
         
                window.location.href = "/Programas";
            }else if (res.data.respuesta==="el programa no se creo porque el usuario es un estudiante inactivo") {
                swal({
                    title: "el programa no se creo porque el usuario es un estudiante inactivo",
                    icon:"error"
                  });
         
                window.location.href = "/Programas";
            }else if (res.data.respuesta==="el programa no se creo porque el usuario es un estudiante activo") {
                swal({
                    title: "el programa no se creo porque el usuario es un estudiante activo",
                    icon:"error"
                  });
               
                window.location.href = "/Programas";
            }else if (res.data.respuesta==="el programa no se creo porque el usuario es un semillerista") {
                swal({
                    title: "el programa no se creo porque el usuario es un semillerista",
                    icon:"error"
                  });
         
                window.location.href = "/Programas";
            }else if (res.data.respuesta==="el programa no se creo porque el usuario ya es Director de programa") {
                swal({
                    title: "el programa no se creo porque el usuario ya es Director de programa",
                    icon:"error"
                  });
                window.location.href = "/Programas";
            }else{
                swal({
                    title: "no se pudo crear el programa",
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
      componentDidMount = () => {
        this.Cargar();
        
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
                    <h3 className="card-title"  >Crear un Programa</h3>
                  </div>
                   
                    {/* /.card-header */}
                    {/* form start */}
                    <form onSubmit={this.nuevoPrograma} style={{width: "50%", margin: "auto"}}>
                        <div className="card-body">
                        <div className="form-group">
                            <input type="hidden" name="cajanom" className="form-control" placeholder="ID" ref={this.cajaIDRef} required/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1">Nombre de Programa</label>
                            <input type="text" name="cajadir" className="form-control" placeholder="Nombre de programa" ref={this.cajaNombreRef} required/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label style={{    width: '50%'}} htmlFor="exampleInputPassword1">Facultad</label>
                            <select ref={this.cajaFacultadRef} style={{width: '50%',  height: "30px"}} required>
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
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1">Cedula del Director</label>
                            <input type="number" name="cajatel" className="form-control" placeholder="Director" ref={this.cajaDirectorRef} required/>
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