import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
import swal from 'sweetalert';
export default class InsertarLinea extends Component {

    cajaNombreRef = React.createRef();
    cajaDescripcionRef = React.createRef();
    cajaFechaRef = React.createRef();

    state = { status: false}
//funcion para crear una linea de investigacion asignando las variables del JSON
    nuevaLinea = (e) => {
        e.preventDefault();
        var nombr = this.cajaNombreRef.current.value;
        var des = this.cajaDescripcionRef.current.value;
        var fe = this.cajaFechaRef.current.value;
        var linea = {
            descripcion: des
            , fecha: fe
            , nombre: nombr
            
        };
        var url = 'http://localhost:8080/gestioninstitucional/crearlinea';
        axios.post(url, linea).then(res => {
            this.setState({ status: true });
            if (res.data.respuesta==="se creo la linea") {
                swal({
                    title: "se creo la linea",
                    icon:"success"
                  });
            }else{
              alert("no se pudo creo la linea")
             
            }
        });
    }




    render() {
        if(this.state.status === true){
            return <Redirect to="/Lineas" />
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
                    <h3 className="card-title"  >Crear una linea de investigacion</h3>
                  </div>
                   
                    {/* /.card-header */}
                    {/* form start */}
                    <form onSubmit={this.nuevaLinea} style={{width: "50%", margin: "auto"}}>
                        <div className="card-body">
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputEmail1">nombre</label>
                            <input type="text" name="cajanom" className="form-control" placeholder="Nombre" ref={this.cajaNombreRef} required/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1">Descripción</label>
                            <textarea type="text" rows="15" name="cajatel" className="form-control" placeholder="Descripción" ref={this.cajaDescripcionRef} required/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1" style={{  width: '50%'}}>Fecha de creación</label>
                            {/*<input type="text" name="cajatel" className="form-control" placeholder="Fecha" ref={this.cajaFechaRef} />*/}
                            <input type="date" id="start" name="trip-start" style={{ height: "30px"}}
       min="2000-01-01" max="2100-12-31" ref={this.cajaFechaRef} required></input>
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