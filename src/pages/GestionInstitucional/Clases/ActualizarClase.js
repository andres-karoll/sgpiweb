import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';

export default class ActualizarClase extends Component {

    cajaNumeroRef = React.createRef();
    cajaNombreRef = React.createRef();
    cajaSemestreRef = React.createRef();
    cajaMateriaRef = React.createRef();
    cajaProfesorRef = React.createRef();

    state = { status: false }

    nuevaClase = (e) => {
        e.preventDefault();
        var num = this.cajaNumeroRef.current.value;
        var nom = this.cajaNombreRef.current.value;
        var sem = this.cajaSemestreRef.current.value;
        var mat = this.cajaMateriaRef.current.value;
        var pro = this.cajaProfesorRef.current.value;
        var clase = {
            numero: num
            , nombre: nom
            , semestre: sem
            , materia: mat
            , profesor: pro
        };
        var url = 'http://localhost:8080/gestioninstitucional/crearclase';
        axios.post(url, clase).then(res => {
            this.setState({ status: true });
        });
    }

    render() {
        if(this.state.status === true){
            return <Redirect to="/Clases" />
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
                    <h3 className="card-title"  >Actualizar Clase</h3>
                  </div>
                   
                    {/* /.card-header */}
                    {/* form start */}
                    <form onSubmit={this.nuevaClase} style={{width: "50%", margin: "auto"}}>
                        <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Numero</label>
                            <input type="text" name="cajanom" className="form-control" value = {this.props.numero} placeholder="Numero" ref={this.cajaNumeroRef} readOnly/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Nombre de la Clase</label>
                            <input type="text" name="cajadir" className="form-control" placeholder="Nombre de clase" ref={this.cajaNombreRef} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Semestre</label>
                            <input type="text" name="cajatel" className="form-control" placeholder="Semestre" ref={this.cajaSemestreRef}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Materia</label>
                            <input type="text" name="cajatel" className="form-control" placeholder="Materia" ref={this.cajaMateriaRef} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Profesor</label>
                            <input type="text" name="cajatel" className="form-control" placeholder="Profesor" ref={this.cajaProfesorRef} />
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
