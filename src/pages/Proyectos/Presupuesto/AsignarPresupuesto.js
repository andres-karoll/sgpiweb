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
        });
    }




    render() {
        if(this.state.status === true){
            return <Redirect to="/Proyectos" />
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
                            <label htmlFor="exampleInputEmail1">ID</label>
                            <input type="text" name="cajanom" className="form-control"  placeholder="ID" ref={this.cajaIDRef} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Monto de dinero</label>
                            <input type="text" name="cajatel" className="form-control" placeholder="Monto de dinero" ref={this.cajaMontoRef} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Fecha</label>
                            <input type="text" name="cajatel" className="form-control" value={new Date().getFullYear()+"-"+(new Date().getMonth() + 1)+"-"+new Date().getDate()} ref={this.cajaFechaRef} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Descripción</label>
                            <input type="text" name="cajatel" className="form-control" placeholder="Descripcion" ref={this.cajaDescripcionRef} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Proyecto</label>
                            <input type="text" name="cajatel" className="form-control" value={this.props.id} placeholder="Proyecto" ref={this.cajaProyectoRef} readOnly/>
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
