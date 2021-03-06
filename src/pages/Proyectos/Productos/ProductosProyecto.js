import React, { Component } from 'react';
import axios from 'axios';
import { NavLink, Link } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
import swal from 'sweetalert';
export default class ProductosProyecto extends Component {

  state = {
    status: false,
    productos: []
  }
//funcion para listar los productos de un proyecto
  cargarProductos= () => {


    var url = "http://localhost:8080";
    var request = "/productos/listarproductosproyecto/" + this.props.id;
    axios.get(url + request).then(res => {
      this.setState({
        productos: res.data
        , status: true
      });
      if (this.state.productos.length === 0) {
        swal({
          title: "este proyecto no tiene productos",
          icon:"error"
        });
        window.history.back();
      }
    });
  }
  componentDidMount = () => {
    this.cargarProductos();
  }
  render() {
    var rol = localStorage.getItem("tipo");
    return (
      <div>
        <Aside />
        <Header />
        <div className="content-wrapper">
          <div>
            <section className="content">
              <br />
              <div class="alert alert-info alert-dismissible">
                <h1><i class="fas fa-copy nav-icon"></i>Productos</h1>
              </div>
            </section>
          </div>
          <div className="wrapper">
            <aside className="control-sidebar control-sidebar-dark">
              {/* Control sidebar content goes here */}
            </aside>
            {/* /.control-sidebar */}
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
    <h3 className="profile-username text-center">Producto: {pro.tipo_producto}</h3>
    <ul className="list-group list-group-unbordered mb-3">
  
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
    {
            rol === "Investigador formacion"  || rol === "Semillerista"|| rol === "Admin"? (
              <NavLink to={"/ActualizarProducto/" + pro.id} style={{width: "50%"}} className="btn btn-primary">Actualizar producto</NavLink>
            ) : (
              <></>
              
    
  )
          }
          {rol === "Investigador formacion"  || rol === "Semillerista"|| rol === "Admin"? (
            <NavLink className="btn btn-danger" to={"/EliminarProducto/" + pro.id}  style={{width: "50%"}}>Eliminar producto</NavLink>
              
            ) : (
              <></>  
     
  )}
           </div>
  {/* /.card-body */}
  <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <li className="nav-item">
          <a href="#" className="nav-link ">
            <i className="fas fa-lightbulb nav-icon" />        
            <p>
              Comentarios
              <i className="right fas fa-angle-left" />
            </p>
                      
          </a>
          <ul className="nav nav-treeview">

            <Link to={"/ComentariosProducto/" + pro.id}>
            <li className="nav-item">
              <a  className="nav-link">
                <i className="fas fa-eye nav-icon" />
                
                <p>Ver comentarios de este producto</p>
                 
              </a>
            </li>
            </Link>
            
          </ul>
          <ul className="nav nav-treeview">
          {rol === "Egresado"  || rol === "Estudiante inactivo" || rol==="Estudiante activo"|| rol==="Semillerista"|| rol==="Investigador formacion"|| rol==="Director programa" ? (
              <></>
            ) : (
              <Link to={"/CrearComentario/" + pro.id}>
              <li className="nav-item">
                <a  className="nav-link">
                  <i className="fas fa-comment nav-icon" />
                  
                  <p>Crear comentario</p>
                   
                </a>
              </li>
              </Link>
  )}
            
            
          </ul>
        </li>
                    </ul>
</div>

            );
        })
      )}
</div>

</div>
)
}

}