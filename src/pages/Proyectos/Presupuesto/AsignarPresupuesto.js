import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';


export default class AsignarPresupuesto extends Component {

    cajaIDRef = React.createRef();
    cajaMontoRef = React.createRef();
    cajaFechaRef = React.createRef();
    cajaDescripcionRef = React.createRef();
    cajaProyectoRef = React.createRef();

    state = { status: false}

    nuevoPresupuesto = (e) => {
        e.preventDefault();
        var idpre = this.cajaIDRef.current.value;
        var mon = this.cajaMontoRef.current.value;
        var fec = this.cajaFechaRef.current.value;
        var des = this.cajaDescripcionRef.current.value;
        var pro = this.cajaProyectoRef.current.value;
        var presupuesto = {
            id: idpre
            , monto: mon
            , fecha: fec
            , proyecto: pro
            , descripcion: des
        };
        var url = 'http://localhost:8080/gestionfinanciera/crearpresupuesto';
        axios.post(url, presupuesto).then(res => {
            this.setState({ status: true });
            if (res.data.respuesta==="se creo") {
                alert("el presupuesto se asigno")
                window.history.back();
            }else{
              alert("no se pudo asignar el presupuesto")
              window.history.back();
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
                    <h3 className="card-title"  >Asignar presupuesto</h3>
                  </div>
                   
                    {/* /.card-header */}
                    {/* form start */}
                    <form onSubmit={this.nuevoPresupuesto} style={{width: "50%", margin: "auto"}}>
                        <div className="card-body">
                        <div className="form-group">
                            <input type="hidden" name="cajanom" className="form-control"  placeholder="ID" ref={this.cajaIDRef} />
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1">Monto de dinero</label>
                            <input type="number" name="cajatel" className="form-control" placeholder="Monto de dinero" ref={this.cajaMontoRef} required/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1">Fecha</label>
                            <input type="date" id="start" name="trip-start"
       min="2000-01-01" max="2100-12-31" ref={this.cajaFechaRef} required></input>
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1">Descripción</label>
                            <textarea type="text" rows="15"  name="cajatel" className="form-control" placeholder="Descripcion" ref={this.cajaDescripcionRef} required/>
                        </div>
                        <div className="form-group">
                            <input type="hidden"  name="cajatel" className="form-control" value={this.props.id} placeholder="Proyecto" ref={this.cajaProyectoRef} readOnly/>
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
