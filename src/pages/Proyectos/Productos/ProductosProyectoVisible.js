import React, { Component } from 'react';
import axios from 'axios';

import { NavLink, Link } from 'react-router-dom';
import Navar from  '../../../components/Navar'
import Footer from '../../../components/Footer';

export default class ProductosProyectoVisible extends Component {

  state = {
status: false,
    productos:[]
  }

  cargarProductos= () => {
    var url = "http://localhost:8080";
    var request = "/productos/listarproductosproyecto/" +this.props.id;
    axios.get(url + request).then(res => {
      this.setState({
       productos: res.data
        , status: true
      });
      //window.location.href = "/Proyectos";
    });
    
  }
  Cargar = () => {
    var request = "/gestioninstitucional/listargruposi" ;
    var url = "http://localhost:8080" + request;
     axios.get(url).then(res => {
      this.setState({
        gruposi: res.data
        , status: true
      })
    });
  }

  componentDidMount = () => {
    this.cargarProductos();
    this.Cargar();

  }

  render() {
    return (
    <div style={{backgroundColor: "#080424"}}>
 <Navar/>
      
      <div>
            <section className="content">
                <br />
                <div class="alert alert-info alert-dismissible">
                  <h1><i class="fas fa-copy nav-icon"></i>Productos</h1>
                  </div>
                  </section>
      </div>


      {this.state.status === true &&
        (
          this.state.productos.map((pro, i) => {
           
            return (
              <div className="card card-primary card-outline "style={{ width: '50%', marginLeft:"auto", marginRight:"auto"}}>
  <div className="card-body box-profile">
    <div className="text-center">
      <img className="profile-user-img img-fluid img-circle" src="https://i.ibb.co/d49h1cM/archivo.png" alt="User profile picture" />
    </div>
    <h3 className="profile-username text-center">Producto</h3>
    <ul className="list-group list-group-unbordered mb-3">
    <li className="list-group-item">
        <b>ID</b> <a className="float-right">{pro.id}</a>
      </li>
      <li className="list-group-item">
      <b>Titulo del producto</b> <a className="float-right">{pro.titulo_producto}</a>
      </li>
      <li className="list-group-item">
        <b>Tipo de producto</b> <a className="float-right">{pro.tipo_producto}</a>
      </li>
      <li className="list-group-item">
        <b>Fecha</b> <a className="float-right">{pro.fecha}</a>
      </li>
      <li className="list-group-item">
        <b>URL del repocitorio</b> <a className="float-right" >{pro.url_repo}</a>

      </li>
      <a href={pro.url_repo}>Descargar archivo</a>
      <div className="card-body">

      </div>
    </ul>

  </div>

</div>

            );
        })
      )}
     
    <Footer/>
</div>


)
}
}