import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
import swal from 'sweetalert';


export default class ActualizarComentario extends Component {

    cajaIDRef = React.createRef();
    cajaComentarioRef = React.createRef();
    cajaFaseRef = React.createRef();
    cajaNivelRef = React.createRef();
    cajaFechaRef = React.createRef();
    cajaProductoIDRef = React.createRef();

    state = { status: false,
    comentario:{}}

//funcion para obtener la informacion actual del comentario
    Cargar = () => {
        var request = "/productos/comentarioid/" +this.props.id;
        var url = "http://localhost:8080" + request;
         axios.get(url).then(res => {
          this.setState({
            comentario: res.data
            , status: true
          })
        });
      }
      componentDidMount = () => {
        this.Cargar();
      }
      //metodo para actualizar el comentario asignando las variables del JSON
    actualizarComentario = (e) => {
        e.preventDefault();
        var idcom = this.cajaIDRef.current.value;
        var com = this.cajaComentarioRef.current.value;
        var fas = this.cajaFaseRef.current.value;
        var niv = this.cajaNivelRef.current.value;
        var fec = this.cajaFechaRef.current.value;
        var comentario = {
            id: idcom
            , comentario: com
            , fase: fas
            , nivel: niv
            , fecha: fec 
        };
        var url = 'http://localhost:8080/productos/modificarcomentario';
        axios.post(url, comentario).then(res => {
            this.setState({ status: true });
            if (res.data.respuesta==="se actualizo el comentario") {
                swal({
                    title: "se actualizo el comentario",
                    icon:"success"
                  });
                
                window.location.href ="/ComentariosProducto/" + this.state.comentario.producto_id
            }else{
              alert("no se pudo crear el comentario")
              window.location.href ="/ComentariosProducto/" + this.state.comentario.producto_id
            }
        });
    }




    render() {
        if(this.state.status === true){
            //return <Redirect to="/Proyectos" />
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
                    <h3 className="card-title"  >Actualizar Comentario</h3>
                  </div>
                   
                    {/* /.card-header */}
                    {/* form start */}
                    <form onSubmit={this.actualizarComentario} style={{width: "50%", margin: "auto"}}>
                        <div className="card-body">
                        <div className="form-group">
                            <input type="hidden" name="cajanom" className="form-control"  placeholder="ID" ref={this.cajaIDRef} value={this.props.id} readOnly/>
                        </div>
                        <div className="form-group">
                     
                            <label htmlFor="exampleInputPassword1">Comentario actual: {this.state.comentario.comentario}</label>
                            <input type="text" name="cajatel" className="form-control" placeholder={this.state.comentario.comentario} ref={this.cajaComentarioRef} />
                        </div>
                        <div className="form-group">
                      
                            <label htmlFor="exampleInputPassword1">Fase actual: {this.state.comentario.fase}</label>
                            <input type="text" name="cajatel" className="form-control" placeholder={this.state.comentario.fase} ref={this.cajaFaseRef} />
                        </div>
                        <div className="form-group">
                       
                            <label htmlFor="exampleInputPassword1">Nivel actual: {this.state.comentario.nivel}</label>
                            <input type="text" name="cajatel" className="form-control" placeholder={this.state.comentario.nivel} ref={this.cajaNivelRef} />
                        </div>
                        <div className="form-group">
                        
                            <label htmlFor="exampleInputPassword1">Fecha actual: {this.state.comentario.fecha}</label>
                            <input type="date" id="start" name="trip-start"
       min="2000-01-01" max="2100-12-31" ref={this.cajaFechaRef} ></input>
                        </div>
                        <div className="form-group">
                            <input type="hidden" name="cajatel" className="form-control" placeholder="Proyecto" ref={this.cajaProductoIDRef} />
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