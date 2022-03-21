import React, { Component } from 'react';
import axios from 'axios';
import { NavLink, Redirect } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
import swal from 'sweetalert';
export default class DesAsignarProgramaSemillero extends Component {

    cajaSemilleroRef = React.createRef();
    cajaProgramaRef = React.createRef();

    state = { programas: [],status: false }
//funcion para des asignar un programa a un semillero
    nuevaAsignacion = (e) => {
        e.preventDefault();
        var semi = this.cajaSemilleroRef.current.value;
        var pro = this.cajaProgramaRef.current.value;
        var asignacion = {
            programa: pro
            , semillero: semi
        };
        var url = 'http://localhost:8080/gestioninstitucional/desasignarsemilleroaprograma';
        axios.post(url, asignacion).then(res => {
            this.setState({ status: true });
            if (res.data.respuesta==="se desasigno correctamente") {
                swal({
                    title: "se desasigno correctamente",
                    icon:"success"
                  });
             
                window.location.href = "/Semilleros";
            }else{
              alert("NO se desasigno correctamente")
              window.location.href = "/Semilleros";
            }
        });
    }
    //funcion para obtener la lista de programas del semillero
    Cargar = () => {
        var request = "/gestioninstitucional/listarprogramadelsemillero/"+this.props.id;
        var url = "http://localhost:8080" + request;
         axios.get(url).then(res => {
          this.setState({
            programas: res.data
            , status: true
          })
        });
      }
      componentDidMount = () => {
        this.Cargar();
      }

      

    render() {
        if(this.state.status === true){
           // return <Redirect to="/Semilleros"/>
        }
        return (
            <div>
                <Aside/>
                <Header/>
            <div className="content-wrapper">
                <div className="card card-info">
                <div className="card-header">
                    <h3 className="card-title">DES-Asignar programa al Semillero</h3>
                </div>
                {/* /.card-header */}
                {/* form start */}
                <form onSubmit={this.nuevaAsignacion} className="form-horizontal">
                    <div className="card-body">
                    <div className="form-group row">
                        <div className="col-sm-10">
                        <input type="hidden" className="form-control" id="inputEmail3" value = {this.props.id} placeholder="Semillero" ref={this.cajaSemilleroRef} readOnly/>
                        </div>
                    </div>
                    {/** 
                    <div className="form-group row">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Programa</label>
                        <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputPassword3" placeholder="Programa" ref={this.cajaProgramaRef}/>
                        </div>
                    </div>*/}
                    </div>
                    <div className="form-group row">
                    <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Programa</label>
                        <div className="col-sm-10">
                            <select ref={this.cajaProgramaRef} style={{width: '50%',  height: "30px"}} required>
                                {this.state.status === true && 
                            
                            ( this.state.programas.map((pro) => {
                            return(
                                    <option value={pro.id}>{pro.nombre}</option> 
                                    );
                                })
                                )}
                            </select>
                        </div>
                    </div>

                    {/* /.card-body */}
                    <div className="card-footer">
                    <button type="submit" className="btn btn-success">Enviar</button>
                    <NavLink to="/Semilleros" className="btn btn-danger">Cancelar</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    {/* /.card-footer */}
                </form>
                </div>
            </div>
            </div>

        )    
    }
}