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

    state = { status: false }

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
        var url = 'http://localhost:8080/gestioninstitucional/crearprograma';
        axios.post(url, programa).then(res => {
            this.setState({ status: true });
        });
    }

    render() {
        if(this.state.status === true){
            return <Redirect to="/Programas" />
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
                            <label htmlFor="exampleInputEmail1">ID</label>
                            <input type="text" name="cajanom" className="form-control" value = {this.props.id} placeholder="ID" ref={this.cajaIDRef} readOnly/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Nombre de Programa</label>
                            <input type="text" name="cajadir" className="form-control" placeholder="Nombre de programa" ref={this.cajaNombreRef} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Facultad</label>
                            <input type="text" name="cajatel" className="form-control" placeholder="Facultad" ref={this.cajaFacultadRef}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Director</label>
                            <input type="text" name="cajatel" className="form-control" placeholder="Director" ref={this.cajaDirectorRef} />
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
