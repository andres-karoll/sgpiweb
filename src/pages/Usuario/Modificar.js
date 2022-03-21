import React, { Component } from 'react';
import axios from 'axios';
import Aside from '../../components/Global/Aside';
import Header from '../../components/Global/Header';
import md5 from 'md5'

export default class Modificar extends Component {

    cajaCedulaRef = React.createRef();
    cajaTelefonoRef = React.createRef();
    cajaClaveRef = React.createRef();
    cajaCorreoRef = React.createRef();

    state = { status: false,

    usua:{} }
//funcion para modificar un usuario enviadno las variables correspondientes al JSON
    nuevoUsuario = (e) => {
        e.preventDefault();
        var cedu = this.cajaCedulaRef.current.value;
        var tele = this.cajaTelefonoRef.current.value;
        var cla = this.cajaClaveRef.current.value;
        var cor = this.cajaCorreoRef.current.value;
        var usuario = {
            cedula: cedu
            , telefono: tele
            , clave: md5(cla)
            , correoP: cor
        };
        var url = 'http://localhost:8080/gestionusuario/modificarusuario';
        axios.post(url, usuario).then(res => {
            this.setState({ status: true });
            if (res.data.respuesta==="el usuario fue actualizado") {
                alert("el usuario fue actualizado")
                window.location.href = "/HomeInstitucional";
            }else{
              alert("el usuario NO fue actualizado")
              window.location.href = "/HomeInstitucional";
            }
        });
    }

      Cargar = () => {
        var request = "/gestionusuario/buscarusuario/" + this.props.cedula ;
        var url = "http://localhost:8080" + request;
         axios.get(url).then(res => {
          this.setState({
            usua: res.data
            , status: true
          })
        });
      }
      componentDidMount = () => {
        this.Cargar();
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
                    <h3 className="card-title"  >Actualizar una Materia</h3>
                  </div>
                   
                    {/* /.card-header */}
                    {/* form start */}
                    <form onSubmit={this.nuevoUsuario} style={{width: "50%", margin: "auto"}}>
                        <div className="card-body">
                        <div className="form-group">
                            <div className="form-group">
                            <label htmlFor="exampleInputPassword1" style={{color: "red"}}>Cedula del usuario</label>
                            <input type="text" name="cajanom" className="form-control" value = {this.props.cedula} placeholder="Catalogo" ref={this.cajaCedulaRef}/>
                            </div>
                        </div>
                        <div className="form-group">
            
                            <label htmlFor="exampleInputPassword1">Telefono actual: {this.state.usua.telefono}</label>
                            
                            <input type="text" name="cajadir" className="form-control" placeholder={this.state.usua.telefono} ref={this.cajaTelefonoRef}/>
                        </div>
                        <div className="form-group">

                            <label style={{    width: '50%'}} htmlFor="exampleInputPassword1">Contraseña</label>
                            <input type="text" name="cajadir" className="form-control" ref={this.cajaClaveRef}/>
                        </div>

                        <div className="form-group">

                            <label style={{    width: '50%'}} htmlFor="exampleInputPassword1">Correo personal actual: {this.state.usua.correo_personal}</label>
                            <input type="email" name="cajadir" className="form-control" placeholder={this.state.usua.correo_personal}ref={this.cajaCorreoRef}/>
                        </div>
                        </div>
                        {/* /.card-body */}
                        <div className="card-footer">
                        <button className="btn btn-success">Actualizar</button>
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
