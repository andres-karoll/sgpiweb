import React, { Component} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';

export default class ActualizarFacultad extends Component {

    cajaIDRef = React.createRef();
    cajaNombreRef = React.createRef();
    cajaDecanoRef = React.createRef();
    cajaCoorRef = React.createRef();

    state = { status: false,
    facultad :{} }

    nuevaFacultad = (e) => {
        e.preventDefault();
        var idfacultad = this.cajaIDRef.current.value;
        var nom = this.cajaNombreRef.current.value;
        var deca = this.cajaDecanoRef.current.value;
        var coo = this.cajaCoorRef.current.value;
        var facultad = {
            id: idfacultad
            , nombre: nom
            , decano: deca
            , coordinador: coo
        };
        var url = 'http://localhost:8080/gestioninstitucional/modificarfacultad';
        axios.post(url, facultad).then(res => {
            this.setState({ status: true });
            if (res.data.respuesta==="la facultad fue actualizada") {
                alert("se actualizó la facultad")
                window.location.href = "/Facultades";
            }else if (res.data.respuesta==="la falcultad no fue creada el primer usuario es un estudiante inactivo"){
                alert("la falcultad no fue creada el primer usuario es un estudiante inactivo")
              }else if (res.data.respuesta==="la falcultad no fue creada el primer usuario es un estudiante activo"){
                  alert("la falcultad no fue creada el primer usuario es un estudiante activo")
              }else if (res.data.respuesta==="la falcultad no fue creada el primer usuario es un semillerista"){
                  alert("la falcultad no fue creada el primer usuario es un semillerista")
              }else if (res.data.respuesta==="la falcultad no fue creada el primer usuario ya es Lider investigacion facultad"){
                  alert("la falcultad no fue creada el primer usuario ya es Lider investigacion facultad")
              }else if (res.data.respuesta==="la falcultad no fue creada el segundo usuario es un estudiante inactivo"){
                  alert("la falcultad no fue creada el segundo usuario es un estudiante inactivo")
              }else if (res.data.respuesta==="la falcultad no fue creada el segundo usuario es un estudiante activo"){
                  alert("la falcultad no fue creada el segundo usuario es un estudiante activo")
              }else if (res.data.respuesta==="la falcultad no fue creada el segundo usuario es un semillerista"){
                  alert("la falcultad no fue creada el segundo usuario es un semillerista")
              }else if (res.data.respuesta==="la falcultad no fue creada el segundo ya es Coordinador investigacion facultad"){
                  alert("la falcultad no fue creada el segundo ya es Coordinador investigacion facultad")
              }
              else{
                alert("NO se pudo actualizar la facultad correctamente")
                window.location.href = "/Facultades";
              }
        });
    }
    cargar = () => {
        var request = "/gestioninstitucional/facultadid/" + this.props.id;
        var url = "http://localhost:8080" + request;
        axios.get(url).then(res => {
            this.setState({
                facultad: res.data
                ,status: true
            });
        });
    }
    componentDidMount = () => {
        this.cargar();
    }

    render() {
        if(this.state.status === true){
            //return <Redirect to="/Facultades" />
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
                    <h3 className="card-title"  >Actualizar Facultad</h3>
                  </div>
                   
                    {/* /.card-header */}
                    {/* form start */}
                    <form onSubmit={this.nuevaFacultad} style={{width: "50%", margin: "auto"}}>
                        <div className="card-body">
                        <div className="form-group">
                            <input type="hidden" name="cajanom" className="form-control" value = {this.props.id} placeholder="ID" ref={this.cajaIDRef} readOnly/>
                        </div>
                        <div className="form-group">
                        
                            <label htmlFor="exampleInputPassword1">Nombre de Facultad: {this.state.facultad.nombre}</label>
                            <input type="text" name="cajadir" className="form-control"  placeholder={this.state.facultad.nombre} ref={this.cajaNombreRef} />
                        </div>
                        <div className="form-group">
                        
                            <label htmlFor="exampleInputPassword1">Cedula del Coordinador invitado: {this.state.facultad.coor_inv}</label>
                            <div className="form-group">
                            <label htmlFor="exampleInputPassword1" style={{color: "red"}}>Si desea actualizar del lider ingrese la cedula</label>
                            <input type="text" name="cajatel" className="form-control" placeholder={this.state.facultad.coor_inv} ref={this.cajaCoorRef} />
                            </div>
                        </div>
                        <div className="form-group">
                        
                            <label htmlFor="exampleInputPassword1">Decano actual: {this.state.facultad.decano}</label>
                            <div className="form-group">
                            <label htmlFor="exampleInputPassword1" style={{color: "red"}}>Si desea actualizar del lider ingrese la cedula</label>
                            <input type="number" name="cajatel" className="form-control" placeholder={this.state.facultad.decano} ref={this.cajaDecanoRef} />
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
