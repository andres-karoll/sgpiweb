import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';

export default class ActualizarLinea extends Component {

    cajaNombreRef = React.createRef();
    cajaDescripcionRef = React.createRef();
    cajaFechaRef = React.createRef();

    state = { status: false,
    linea:{}}
//funcion para actualizar la linea de investigacion enviando las variables del JSON
    actualizarLinea = (e) => {
        e.preventDefault();
        var nom = this.cajaNombreRef.current.value;
        var des = this.cajaDescripcionRef.current.value;
        var fe = this.cajaFechaRef.current.value;
        var linea = {
            nombre: nom
            , descripcion: des
            , fecha: fe
        };
        var url = 'http://localhost:8080/gestioninstitucional/modificarlinea';
        axios.post(url, linea).then(res => {
            this.setState({ status: true });
            if (res.data.respuesta==="se actualizo la linea") {
                alert("se actualizo la linea")
                window.location.href = "/Lineas";
            }else{
              alert("no se pudo actualizar la linea")
              window.location.href = "/Lineas";
            }
        });
    }
    //funcion para obtener la informacion actual de la linea de investigacion
    Cargar = () => {
        var request = "/gestioninstitucional/lineaid/" +this.props.nombre;
        var url = "http://localhost:8080" + request;
         axios.get(url).then(res => {
          this.setState({
            linea: res.data
            , status: true
          })
        });
      }

      componentDidMount = () => {
        this.Cargar();
      }

    render() {
        if(this.state.status === true){
            //return <Redirect to="/Lineas" />
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
                    <h3 className="card-title"  >Actualizar la linea de investigacion</h3>
                  </div>
                   
                    {/* /.card-header */}
                    {/* form start */}
                    <form onSubmit={this.actualizarLinea} style={{width: "50%", margin: "auto"}}>
                        <div className="card-body">
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputEmail1">nombre actual: {this.state.linea.nombre}</label>
                            <input type="text" name="cajanom" className="form-control" value = {this.props.nombre} ref={this.cajaNombreRef} readOnly/>
                        </div>
                        <div className="form-group">
                       
                            <label htmlFor="exampleInputPassword1">Descripción actual: {this.state.linea.descripcion}</label>
                            <textarea type="text" rows="15" name="cajatel" className="form-control" placeholder={this.state.linea.descripcion} ref={this.cajaDescripcionRef}/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1">Fecha de creación actual: {this.state.linea.fecha}</label>
{/*<input type="text" name="cajatel" className="form-control" placeholder="Fecha" ref={this.cajaFechaRef} />*/}
<input type="date" id="start" name="trip-start" style={{ height: "30px"}}
       min="2000-01-01" max="2100-12-31" ref={this.cajaFechaRef} ></input>                        </div>
                        

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
