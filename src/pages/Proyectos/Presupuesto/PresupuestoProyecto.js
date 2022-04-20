import React, { Component } from 'react';
import axios from 'axios';

import { NavLink, Link } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
import swal from 'sweetalert';
export default class PresupuestoProyecto extends Component {

  state = {
status: false,
    presupuesto:[],
    compratotal:[]
  }
//funcion para obtener el presupuesto del proyecto
  cargarPresupuesto= () => {
    var url = "http://localhost:8080";
    var request = "/gestionfinanciera/listarpresupuestoporproyecto/" +this.props.id;
    axios.get(url + request).then(res => {
      this.setState({
      
       presupuesto: res.data
        , status: true
        
      });
      if (this.state.presupuesto.length === 0) {
        swal({
          title: "este proyecto no tiene presupuesto",
          icon:"error"
        });
     
        window.history.back();
    }

    });
    
  }

  

  componentDidMount = () => {
    this.cargarPresupuesto();

    //this.cargarLineas();

  }

  render() {
    var rol=localStorage.getItem("tipo")
    return (
    <div>
      <Aside/>
      <Header/>
      <div className="content-wrapper">
      
      <div>
            <section className="content">
                <br />
                <div class="alert alert-info alert-dismissible">
                  <h1><i class="fas fa-file-invoice-dollar nav-icon"></i>Presupuesto</h1>
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
          this.state.presupuesto.map((pre, i) => {
        
            return (
              <div className="card card-primary card-outline "style={{ width: '50%', marginLeft:"auto", marginRight:"auto"}}>
  <div className="card-body box-profile">
    <div className="text-center">
      <img className="profile-user-img img-fluid img-circle" src="https://i.ibb.co/BTKFRzf/dollar.png" alt="User profile picture" />
    </div>
    <h3 className="profile-username text-center">Presupuesto</h3>
    <ul className="list-group list-group-unbordered mb-3">

      <li className="list-group-item">
        <b>Descripción</b> <a className="float-right">{pre.descripcion}</a>
      </li>
      <li className="list-group-item">
        <b>Fecha</b> <a className="float-right">{pre.fecha}</a>
      </li>
      
      <li className="list-group-item">
      <b className="text-success">Monto de presupuesto</b>
        <h3 className="text-success float-right">${pre.monto}</h3>
      </li>
  


    </ul>
    {
             rol==="Docente investigador"||rol==="Docente lider semillero" || rol==="Semillerista" ?(
             
              <></>
             
              ) :(
                <NavLink to={"/ActualizarPresupuesto/" + pre.id} className="btn btn-primary" style={{width: "50%"}}>Actualizar</NavLink>
             )
           }
 {
             rol==="Docente investigador"|| rol==="Docente lider semillero"  || rol==="Semillerista"?(
             
              <></>
             
              ) :(
                <NavLink className="btn btn-danger" to={"/EliminarPresupuesto/" + pre.id} style={{width: "50%"}}>Eliminar</NavLink>
             )
           }
    
  </div>
  
  <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <li className="nav-item">
          <a href="#" className="nav-link ">
            <i className="fas fa-lightbulb nav-icon" />   
                 
            <p>
              Compras
              <i className="right fas fa-angle-left" />
            </p>
                      
          </a>
          {rol==="Profesional investigacion"&&
          <ul className="nav nav-treeview">
          <Link to={"/ComprasPresupuesto/" + pre.id}>
          <li className="nav-item">
            <a  className="nav-link">
              <i className="fas fa-eye nav-icon" />
              
              <p>Ver Compras del presupuesto</p>
               
            </a>
          </li>
          </Link>
        </ul>
          
          }
           {rol==="Profesional investigacion"&&
           <ul className="nav nav-treeview">
           <Link to={"/ComprasSolicitadas/" + pre.id}>
           <li className="nav-item">
             <a  className="nav-link">
               <i className="fas fa-eye nav-icon" />
               
               <p>Ver Compras solicitadas</p>
                
             </a>
           </li>
           </Link>
         </ul>
          
        }
         {rol==="Profesional investigacion"&&
           
           <ul className="nav nav-treeview">
           <Link to={"/ComprasRealizadas/" + pre.id}>
           <li className="nav-item">
             <a  className="nav-link">
               <i className="fas fa-eye nav-icon" />
               
               <p>Ver Compras realizadas</p>
                
             </a>
           </li>
           </Link>
         </ul>
          
        }
        {rol==="Docente lider semillero"&&
           
           <ul className="nav nav-treeview">
           <Link to={"/ComprasRealizadas/" + pre.id}>
           <li className="nav-item">
             <a  className="nav-link">
               <i className="fas fa-eye nav-icon" />
               
               <p>Ver Compras realizadas</p>
                
             </a>
           </li>
           </Link>
         </ul>
          
        }

{rol==="Docente investigador"&&
           
           <ul className="nav nav-treeview">
           <Link to={"/ComprasRealizadas/" + pre.id}>
           <li className="nav-item">
             <a  className="nav-link">
               <i className="fas fa-eye nav-icon" />
               
               <p>Ver Compras realizadas</p>
                
             </a>
           </li>
           </Link>
         </ul>
          
        }

{rol==="Admin"&&
           
           <ul className="nav nav-treeview">
           <Link to={"/ComprasRealizadas/" + pre.id}>
           <li className="nav-item">
             <a  className="nav-link">
               <i className="fas fa-eye nav-icon" />
               
               <p>Ver Compras realizadas</p>
                
             </a>
           </li>
           </Link>
         </ul>
          
        }
         {rol==="Profesional investigacion"&&
            <ul className="nav nav-treeview">
            <Link to={"/ComprasRechazadas/" + pre.id}>
            <li className="nav-item">
              <a  className="nav-link">
                <i className="fas fa-exclamation-circle nav-icon" />
                
                <p>Ver Compras rechazadas</p>
                 
              </a>
            </li>
            </Link>
          </ul>
          
        }
         {rol==="Profesional investigacion"&&
           <ul className="nav nav-treeview">
           <Link to={"/ComprasAceptadas/" + pre.id}>
           <li className="nav-item">
             <a  className="nav-link">
               <i className="fas fa-check nav-icon" />
               
               <p>Ver Compras aceptadas</p>
                
             </a>
           </li>
           </Link>
         </ul>
          
        }
      
         {rol==="Docente investigador"&&
         <ul className="nav nav-treeview">

         <Link to={"/CrearCompra/" + pre.id}>
         <li className="nav-item">
           <a  className="nav-link">
             <i className="fas fa-cart-plus nav-icon" />
             
             <p>Solicitar Compra</p>
              
           </a>
         </li>
         </Link>
         
       </ul>
         
         }
          
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