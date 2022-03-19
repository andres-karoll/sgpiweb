import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
import swal from 'sweetalert';


export default class ActualizarPresupuesto extends Component {

    cajaIDRef = React.createRef();
    cajaMontoRef = React.createRef();
    cajaFechaRef = React.createRef();
    cajaDescripcionRef = React.createRef();
    cajaProyectoRef = React.createRef();

    state = { status: false,
    presupuesto:{}}

//funcion para traer la informacion actual del presupuesto
    Cargar = () => {
        var request = "/gestionfinanciera/presupuestoid/" +this.props.id;
        var url = "http://localhost:8080" + request;
         axios.get(url).then(res => {
          this.setState({
            presupuesto: res.data
            , status: true
          })
        });
      }

      componentDidMount = () => {
        this.Cargar();
      }
//funcion para actualizar el presupuesto enviando las variables del JSON
    actualizarPresupuesto = (e) => {
        e.preventDefault();
        var idpre = this.cajaIDRef.current.value;
        var mon = this.cajaMontoRef.current.value;
        var fec = this.cajaFechaRef.current.value;
        var des = this.cajaDescripcionRef.current.value;
      
        var presupuesto = {
            id: idpre
            , monto: mon
            , fecha: fec
            , descripcion: des
        };
        var url = 'http://localhost:8080/gestionfinanciera/modificarpresupuesto';
        axios.post(url, presupuesto).then(res => {
            this.setState({ status: true });
            if (res.data.respuesta==="se actualizo el presupuesto") {
                swal({
                    title: "el presupuesto se actualizó",
                    icon:"success"
                  });
               
                window.location.href ="/PresupuestoProyecto/" + this.state.presupuesto.proyecto
            }else{
              alert("no se pudo actualizar el presupuesto")
              window.location.href ="/Proyectos"
            }
        });
    }




    render() {
        if(this.state.status === true){
           // return <Redirect to="/Proyectos" />
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
                    <h3 className="card-title"  >Actualizar presupuesto</h3>
                  </div>
                   
                    {/* /.card-header */}
                    {/* form start */}
                    <form onSubmit={this.actualizarPresupuesto} style={{width: "50%", margin: "auto"}}>
                        <div className="card-body">
                        <div className="form-group">
                            <input type="hidden" name="cajanom" className="form-control"  value={this.props.id} placeholder="ID" ref={this.cajaIDRef} />
                        </div>
                        <div className="form-group">
                     
                            <label htmlFor="exampleInputPassword1">Monto de dinero actual: {this.state.presupuesto.monto}</label>
                            <input type="number" name="cajatel" className="form-control" placeholder={this.state.presupuesto.monto} ref={this.cajaMontoRef} />
                        </div>
                        <div className="form-group">
                    
                            <label htmlFor="exampleInputPassword1">Fecha actual: {this.state.presupuesto.fecha}</label>
                            <input type="date" id="start" name="trip-start"
       min="2000-01-01" max="2100-12-31" ref={this.cajaFechaRef} ></input>
                        </div>
                        <div className="form-group">
              
                            <label htmlFor="exampleInputPassword1">Descripción actual {this.state.presupuesto.descripcion}</label>
                            <textarea type="text" rows="15" name="cajatel" className="form-control" placeholder={this.state.presupuesto.descripcion} ref={this.cajaDescripcionRef} />
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
