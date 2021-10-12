import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';

export default class ActualizarSemillero extends Component {

    cajaIDRef = React.createRef();
    cajaNombreRef = React.createRef();
    cajaDescripcionRef = React.createRef();
    cajaFecha_funRef = React.createRef();
    cajaGrupoInvestigacionRef = React.createRef();
    cajaLiderSemilleroRef = React.createRef();
    cajaLineaInvestigacionFef = React.createRef();

    state = { status: false }

    nuevoSemillero = (e) => {
        e.preventDefault();
        var idsemillero = this.props.id;
        var nom = this.cajaNombreRef.current.value;
        var descrip = this.cajaDescripcionRef.current.value;
        var fe_fun = this.cajaFecha_funRef.current.value;
        var grupoi = this.cajaGrupoInvestigacionRef.current.value;
        var lider = this.cajaLiderSemilleroRef.current.value;
        var linea = this.cajaLineaInvestigacionFef.current.value;
        var semillero = {
            id: idsemillero
            , nombre: nom
            , descripcion: descrip
            , fechaFun: fe_fun
            , grupoInvestigacion: grupoi
            , liderSemillero: lider
            , lineaInvestigacion: linea
        };
        var url = 'http://localhost:8080/gestioninstitucional/crearsemilleros';
        axios.post(url, semillero).then(res => {
            this.setState({ status: true });
        });
    }

    render() {
        if(this.state.status === true){
            return <Redirect to="/Semilleros" />
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
                    <h3 className="card-title"  >Actualizar Semillero</h3>
                  </div>
                   
                    {/* /.card-header */}
                    {/* form start */}
                    <form onSubmit={this.nuevoSemillero} style={{width: "50%", margin: "auto"}}>
                        <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">ID</label>
                            <input type="text" name="cajanom" className="form-control" value = {this.props.id} placeholder="ID" ref={this.cajaIDRef} readOnly/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Nombre</label>
                            <input type="text" name="cajadir" className="form-control" placeholder="Nombre" ref={this.cajaNombreRef} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">descripción</label>
                            <input type="text" name="cajatel" className="form-control" placeholder="descripcion" ref={this.cajaDescripcionRef} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Fecha_fun</label>
                            <input type="text" name="cajatel" className="form-control" placeholder="Fecha_fun" ref={this.cajaFecha_funRef} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Grupo de investigacion</label>
                            <input type="text" name="cajatel" className="form-control" placeholder="grupo de investigacion" ref={this.cajaGrupoInvestigacionRef} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Lider de semillero</label>
                            <input type="text" name="cajatel" className="form-control" placeholder="lider de semillero" ref={this.cajaLiderSemilleroRef} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Linea de investigacion</label>
                            <input type="text" name="cajatel" className="form-control" placeholder="Linea de investigacion" ref={this.cajaLineaInvestigacionFef} />
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
