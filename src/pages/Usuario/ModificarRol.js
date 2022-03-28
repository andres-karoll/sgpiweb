import React, { Component } from 'react';
import axios from 'axios';
import Aside from '../../components/Global/Aside';
import Header from '../../components/Global/Header';
import swal from 'sweetalert';

export default class ModificarRol extends Component {

    cajaCedulaRef = React.createRef();
    cajaRolRef = React.createRef();

    state = { status: false}
//funcion para modificar el rol de un usuario en especifico
    modificarRol = (e) => {
        e.preventDefault();
        var ced = this.cajaCedulaRef.current.value
        var ro = this.cajaRolRef.current.value;
        var roll = {
            cedula:ced,
            rol: ro           
        };
        var url = 'http://localhost:8080/gestionusuario/asignartipousuario';
        axios.post(url, roll).then(res => {
            this.setState({ status: true });
            if (res.data.respuesta==="ingresado correctamente") {
                
                swal({
                    title:"se agrego el rol al usuario",
                    icon:"success"
                  });
                window.history.back();
            }else if (res.data.respuesta==="el usuario o el tipo de usuario no existe") {
                swal({
                    title:"el usuario o el tipo de usuario no existe",
                    icon:"error"
                  });
            }
        });
    }




    render() {
      
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
                    <h3 className="card-title"  >Modificar Rol</h3>
                  </div>
                   
                    {/* /.card-header */}
                    {/* form start */}
                    <form onSubmit={this.modificarRol} style={{width: "50%", margin: "auto"}}>
                        <div className="card-body">
                       
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1">Cedula de usuario</label>
                            <input type="text" name="cajatel" className="form-control" placeholder="Cedula" ref={this.cajaCedulaRef} required/>
                        </div>

                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                        <label htmlFor="exampleInputPassword1">Rol a asignar</label>
                        <select className="form-control select2" style={{width: '100%'}} ref={this.cajaRolRef} required>
                        <option selected="selected">Roles</option>
                        <option>Admin</option>
                        <option>Coordinador investigacion facultad</option>
                        <option>Direccion investigacion corporativo</option>
                        <option>Director programa</option>
                        <option>Docente</option>
                        <option>Docente investigador</option>
                        <option>Docente lider semillero</option>
                        <option>Egresado</option>
                        <option>Estudiante activo</option>
                        <option>Estudiante inactivo</option>
                        <option>Investigador formacion</option>
                        <option>Lider grupo investigacion</option>
                        <option>Lider investigacion facultad</option>
                        <option>Personal biblioteca</option>
                        <option>Personal publicaciones</option>
                        <option>Profesional investigacion</option>
                        <option>Semillerista</option>
                       
                        </select>
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
