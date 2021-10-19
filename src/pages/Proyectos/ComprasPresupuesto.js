import React, { Component } from 'react';
import axios from 'axios';

import { NavLink } from 'react-router-dom';
import Aside from '../../components/Global/Aside';
import Header from '../../components/Global/Header';
import { PureComponent } from 'react';

export default class ComprasPresupuesto extends Component {

  state = {
status: false,
    compra:[]
  }

  cargarCompra= () => {
    var url = "http://localhost:8080";
    var request = "/gestionfinanciera/listarcomprasdelpresupuesto/" +this.props.id;
    axios.get(url + request).then(res => {
      this.setState({
       compra: res.data
        , status: true
      });
    });
    
  }

  componentDidMount = () => {
    this.cargarCompra();
    //this.cargarLineas();

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
                <div class="alert alert-info alert-dismissible">
                  <h1><i class="fas fa-search-dollar nav-icon"></i>Compras del presupuesto</h1>
                  </div>
                  </section>
      </div>


      {this.state.status === true &&
        (
          this.state.compra.map((com, i) => {
           
            return (
                
              <div className="card card-primary card-outline "style={{ width: '70%', marginLeft:"auto", marginRight:"auto"}}>
  <div className="card-body box-profile">
    <div className="text-center">
      <img className="profile-user-img img-fluid img-circle" src="https://i.ibb.co/5kVRz2L/compra.png" alt="User profile picture" />
    </div>
    <h3 className="profile-username text-center">Compra</h3>
    <ul className="list-group list-group-unbordered mb-3">
    <li className="list-group-item">
        <b>ID</b> <a className="float-right">{com.id}</a>
      </li>
      <li className="list-group-item">
      <b>Descripción</b> <a className="float-right">{com.descripcion}</a>
      </li>
      <li className="list-group-item">
        <b>Tipo</b> <a className="float-right">{com.tipo}</a>
      </li>
      <li className="list-group-item">
        <b>Estado</b> <a className="float-right">{com.estado}</a>
      </li>
      <li className="list-group-item">
        <b>Codigo de compra</b> <a className="float-right">{com.codigo_compra}</a>
      </li>
      <li className="list-group-item">
        <b>Fecha de compra</b> <a className="float-right">{com.fecha_compra}</a>
      </li>
      
      <li className="list-group-item">
        <b>Link</b> <a className="float-right ">{com.link}</a>
      </li>
      <li className="list-group-item">
        <b>Fecha de solicitud</b> <a className="float-right ">{com.fecha_solicitud}</a>
      </li>
      <li className="list-group-item">
        <b>Nombre</b> <a className="float-right " >{com.nombre}</a>
      </li>
      <li className="list-group-item">
        <b style={{ fontSize:"x-large"}}>Valor</b> <a className="float-right text-success" style={{ fontSize:"x-large"}}>{com.valor}</a>
      </li>
    </ul>

    <NavLink to={"/ActualizarCompra/" + com.id} className="btn btn-primary">Actualizar</NavLink>
    <NavLink className="btn btn-danger" to={"/EliminarCompra/" + com.id} >Eliminar</NavLink>
  </div>
  {/* /.card-body */}
</div>

            );
        })
      )}
</div>

</div>
)
}
}