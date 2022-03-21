import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, NavLink } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
import swal from 'sweetalert';
export default class EliminarGrupoInvestigacion extends Component {

    state = { status: false };
//funcion para eliminar un grupo de investigacion
    eliminarGrupo = () => {
        var request = "/gestioninstitucional/eliminargruposi/" + this.props.id;
        var url = "http://localhost:8080" + request;
        axios.get(url).then(res => {
            this.setState({ status: true });
            if (res.data==="Se elimino con exito") {
                swal({
                    title: "Se elimino con exito",
                    icon:"success"
                  });
                
            }else{
                swal({
                    title: "no se pudo eliminar es probable que tenga asociada una linea de investigacion, programa o semillero",
                    icon:"error"
                  });
            }
        });
    }

    render() {
        if(this.state.status === true){
            return <Redirect to="/GruposInvestigacion" />
        }
        return (
            <div>
               
                <Aside/>
                <Header/>
            <div className="content-wrapper">
            <div>
            <section className="content">
                <br />
                <div class="alert alert-info alert-dismissible">
                  <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                  <h1><i class="icon fas fa-shield-alt"></i> Alert!</h1>
                  <h2><i class="icon fas fa-exclamation"></i> ¿Esta seguro que quiere eliminar el grupo de investigacion?</h2>
                  
                  <div>
                <NavLink to="/GruposInvestigacion" className="btn btn-info">Cancelar</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={this.eliminarGrupo} className="btn btn-danger">Eliminar</button>
                </div>
                  </div>
                  </section>
            </div>
                </div>
            </div>
        )
    }
}