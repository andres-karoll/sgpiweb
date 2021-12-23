import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';

export default class ActualizarPrograma extends Component {

    cajaIDRef = React.createRef();
    cajaNombreRef = React.createRef();
    cajaFacultadRef = React.createRef();
    cajaDirectorRef = React.createRef();

    state = { status: false,
        facultades:[],
        facul:[],
    programa:{} }

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
        var url = 'http://localhost:8080/gestioninstitucional/modificarprograma';
        axios.post(url, programa).then(res => {
            this.setState({ status: true });
            if (res.data.respuesta==="se actualizo el programa") {
                alert("se actualizó el programa")
                window.location.href = "/Programas";
            }else if (res.data.respuesta==="el semillero no se creo porque el usuario es un estudiante inactivo") {
                alert("el semillero no se creo porque el usuario es un estudiante inactivo")
                window.location.href = "/Programas";
            }else if (res.data.respuesta==="el semillero no se creo porque el usuario es un estudiante activo") {
                alert("el semillero no se creo porque el usuario es un estudiante activo")
                window.location.href = "/Programas";
            }else if (res.data.respuesta==="el semillero no se creo porque el usuario es un semillerista") {
                alert("el semillero no se creo porque el usuario es un semillerista")
                window.location.href = "/Programas";
            }else{
              alert("no se pudo actualizar el programa")
              window.location.href = "/Programas";
            }
        });
    }


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
                    <form onSubmit={this.nuevoPrograma} style={{width: "50%", margin: "auto"}}>
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
                            <label htmlFor="exampleInputPassword1" style={{color: "red"}}>Si desea actualizar del lider ingrese la cedula</label>
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
