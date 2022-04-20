import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
import swal from 'sweetalert';
export default class InsertarClaseMateria extends Component {

    cajaNumeroRef = React.createRef();
    cajaNombreRef = React.createRef();
    cajaSemestreRef = React.createRef();
    cajaMateriaRef = React.createRef();
    cajaProfesorRef = React.createRef();

    state = {
        status: false,
        materias: [],
        mate: []
    }
//funcion para crear la clase en donde se definen las variables para llenar el JSON que sera enviado
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
            if (res.data.respuesta === "se creo la clase") {
                swal({
                    title: "se creo la clase",
                    icon:"success"
                  });
                window.history.back();
            } else if (res.data.respuesta === "el usuario no existe") {
                swal({
                    title: "el usuario no existe",
                    icon:"error"
                  });
                

            } else if (res.data.respuesta === "la materia no existe") {
                swal({
                    title: "la materia no existe",
                    icon:"error"
                  });
                


            } else if (res.data.respuesta === "la clase ya existe") {
                swal({
                    title: "la clase ya existe",
                    icon:"error"
                  });
    


            } else if (res.data.respuesta === "esta persona es usuario inactivo") {
                swal({
                    title: "el usuario es un estudiante inactivo",
                    icon:"error"
                  });
             

            } else if (res.data.respuesta === "esta persona es usuario activo") {
                swal({
                    title: "el usuario es un estudiante activo",
                    icon:"error"
                  });
            

            } else if (res.data.respuesta === "esta persona es usuario semillerista") {
                swal({
                    title: "el usuario es un semillerista",
                    icon:"error"
                  });
           

            } else {
                swal({
                    title: "no se pudo crear la clase",
                    icon:"error"
                  });
                

            }

        });
    }
//funcion para obtener la lista de las materias creadas
    Cargar = () => {
        var request = "/gestioninstitucional/listarmaterias";
        var url = "http://localhost:8080" + request;
        axios.get(url).then(res => {
            this.setState({
                materias: res.data
                , status: true
            })
        });
    }
    componentDidMount = () => {
        this.Cargar();
    }

    render() {
        if (this.state.status === true) {
            //return <Redirect to="/Clases" />
        }
        return (
            <div>
                <Aside />
                <Header />
                <div className="content-wrapper">
                    <section className="content">

                        <div className="container-fluid">
                            <div className="row">
                                {/* left column */}
                                <div className="col-md-12">
                                    {/* general form elements */}
                                    <div className="card card-primary">
                                        <div className="card-header" style={{ align: "center" }}>
                                            <h3 className="card-title"  >Crear una Clase</h3>
                                        </div>

                                        {/* /.card-header */}
                                        {/* form start */}
                                        <form onSubmit={this.nuevaClase} style={{ width: "50%", margin: "auto" }}>
                                            <div className="card-body">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1" style={{ color: "red" }}>*</label>
                                                    <label htmlFor="exampleInputEmail1">Numero</label>
                                                    <input type="text" name="cajanom" className="form-control" placeholder="Numero" ref={this.cajaNumeroRef} required />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1" style={{ color: "red" }}>*</label>
                                                    <label htmlFor="exampleInputPassword1">Nombre de la Clase</label>
                                                    <input type="text" name="cajadir" className="form-control" placeholder="Nombre de clase" ref={this.cajaNombreRef} required />
                                                </div>
                                                {/** 
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Semestre</label>
                            <input type="text" name="cajatel" className="form-control" placeholder="Semestre" ref={this.cajaSemestreRef}/>
                        </div>*/}
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1" style={{ color: "red" }}>*</label>
                                                    <label htmlFor="exampleInputPassword1">Semestre</label>
                                                    <select className="form-control select2" style={{ width: '100%' }} ref={this.cajaSemestreRef} required>
                                                        <option selected="selected">1</option>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                        <option>6</option>
                                                        <option>7</option>
                                                        <option>8</option>
                                                        <option>9</option>
                                                        <option>10</option>


                                                    </select>
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1" style={{ color: "red" }}>*</label>
                                                    <label style={{ width: '50%' }} htmlFor="exampleInputPassword1">Materia actual es {this.props.catalogo}</label>

                                                    <input type="text" name="cajadir" className="form-control" value={this.props.catalogo} ref={this.cajaMateriaRef} readOnly />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1" style={{ color: "red" }}>*</label>
                                                    <label htmlFor="exampleInputPassword1">Profesor</label>
                                                    <input type="text" name="cajatel" className="form-control" placeholder="Profesor" ref={this.cajaProfesorRef} required />
                                                </div>





                                            </div>
                                            {/* /.card-body */}
                                            <div className="card-footer d-flex justify-content-center">
                                                <button className="btn btn-success">Crear clase</button>
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