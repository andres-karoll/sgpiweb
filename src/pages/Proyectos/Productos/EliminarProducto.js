import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, NavLink } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
import swal from 'sweetalert';


export default class EliminarProducto extends Component {

    state = { status: false };
//funcion para eliminar un producto
    eliminarProducto = () => {
        var request = "/productos/eliminarproducto/" + this.props.id;
        var url = "http://localhost:8080" + request;
        axios.get(url).then(res => {
            this.setState({ status: true });
            if (res.data==="Se elimino con exito") {
                swal({
                    title: "Se elimino con exito",
                    icon:"success"
                  });
                  window.history.back();
            }else{
                swal({
                    title: "no se pudo eliminar",
                    icon:"error"
                  });
                  window.history.back();
            }
        });
    }

    render() {
       
        return (
            <div>
               
                <Aside/>
                <Header/>
            <div className="content-wrapper">
            <div>
            <section className="content">
                <br />
                <div class="alert alert-danger alert-dismissible">
                  <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                  <h1><i class="icon fas fa-shield-alt"></i> Alert!</h1>
                  <h2><i class="icon fas fa-exclamation"></i> ¿Esta seguro que quiere eliminar el producto?</h2>
                  
                  <div>
                <NavLink to="/Proyectos" className="btn btn-info">Cancelar</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={this.eliminarProducto} className="btn btn-danger">Eliminar</button>
                </div>
                  </div>
                  </section>
            </div>
                </div>
            </div>
        )
    }
}