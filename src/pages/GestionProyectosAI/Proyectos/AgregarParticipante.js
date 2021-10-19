import React, { Component } from 'react';
import axios from 'axios';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
import { NavLink} from 'react-router-dom';
export default class AgregarParticipante extends Component {
    state = { 
            status: false
        }
    cajaId = React.createRef();
    cajaCedula = React.createRef();
    cajaFecha = React.createRef();
    cajaRol = React.createRef();
    

AgregarParticipante =  (e) => {
        e.preventDefault();
        var ids = this.cajaId.current.value;
        var cedula= this.cajaCedula.current.value;  
        var ro=this.cajaRol.current.value;
        var fecha=this.cajaFecha.current.value;
        var participante = {
                id:ids,
                usuario:cedula,
                fechainicio:fecha,
                rol:ro
        };
        var url = 'http://localhost:8080/gestionproyectosaulaintegrador/agregarParticipante';
            axios.post(url, participante).then(res => {
            this.setState({ status: true });
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
                    <h3 className="card-title"  >Actualizar una Materia</h3>
                  </div>
                    {/* /.card-header */}
                    {/* form start */}
                    <form  style={{width: "50%", margin: "auto"}} onSubmit={this.AgregarParticipante}>
                        <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Id</label>
                            <input type="text" name="cajanom" className="form-control" placeholder="Catalogo" ref={this.cajaId} value={this.props.id} readOnly/>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Cedula</label>
                            <input type="text" name="cajadir" className="form-control"   ref={this.cajaCedula} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Fecha</label>
                            <input type="text" name="cajatel" className="form-control"ref={this.cajaFecha}/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Rol que vas a tener en el rol</label>
                        <div></div>
                        <select ref={this.cajaRol}>
                                    <option style={{color: "black"}}>Lider</option>
                                    <option style={{color: "black"}}>coLider</option>
                        </select>
                        </div>
                        </div>
                        <div className="card-footer">               
                        <NavLink style={{width: '50%'}} className="btn btn-success" onClick={this.AgregarParticipante} to={"/ProyectosAulaIntegrador/"} >Agregar Participante</NavLink>
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
