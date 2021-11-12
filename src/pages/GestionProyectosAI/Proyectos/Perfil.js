import React, { Component } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';

class Perfil extends Component  {
     
    state = {
        Perfil: {}
        , status: false
    }

    mostrarPerfil = () => {
        var request = "/gestionusuario/buscarusuario/"+this.props.id ;
        var url = "http://localhost:8080" + request;
        axios.get(url).then(res => {
            this.setState({
                Perfil: res.data
                ,status: true
            });
        });
    }

    componentDidMount = () => {
        this.mostrarPerfil();
    }

    render(){
        
        return (
            <div>
            <Header/>
                <Aside /> 
            <div className="content-wrapper">
                
        
                <br /><br />  
                <h1 align="center"><u>Detalles Perfil </u></h1>
                {this.state.status === true &&
                
                (
                    <React.Fragment>
                        <br />

                        <br /><br />
                        <h3 align="center">Nombre completo: <span style={{color: "green", fontWeight: "bold"}}>{this.state.Perfil.nombres} {this.state.Perfil.apellidos}</span></h3>
                        <h3 align="center">Codigo Universitario: <span style={{color: "green", fontWeight: "bold"}}>{this.state.Perfil.cod_Universitario}</span></h3>
                        <h3 align="center">Correo Estudiantil: <span style={{color: "green", fontWeight: "bold"}}>{this.state.Perfil.correo_est}</span></h3>
                        <h3 align="center">Telefono: <span style={{color: "green", fontWeight: "bold"}}>{this.state.Perfil.telefono}</span></h3>
                        <h3 align="center">Programa: <span style={{color: "green", fontWeight: "bold"}}>{this.state.Perfil.programa}</span></h3>
                        <h3 align="center">Correo Personal: <span style={{color: "green", fontWeight: "bold"}}>{this.state.Perfil.correo_personal}</span></h3>
                        <div className="d-flex justify-content-center " >
                        <NavLink to={"/Modificar/" + this.state.Perfil.cedula} className="btn btn-primary ">Modificar</NavLink> &nbsp;&nbsp;
                        <NavLink to={"/delete/" + this.state.Perfil.nombres} className="btn btn-danger">Borrar</NavLink>
                        </div>
                    </React.Fragment>


                )}
            </div>
            </div>
        )
    }
}
export default Perfil
