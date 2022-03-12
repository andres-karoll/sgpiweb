import React, { Component } from 'react';
import axios from 'axios';
import { NavLink, Link } from 'react-router-dom';
import Aside from '../../components/Global/Aside';
import Header from '../../components/Global/Header';

import md5 from 'md5'
export default class Crearusuario extends Component {

 
    cajaCedula = React.createRef();
    cajacodUniversitario = React.createRef();
    cajaCorreoE = React.createRef();
    cajaClave = React.createRef();
    cajaCClave=React.createRef();
    cajaNombre = React.createRef();
    cajaApellido = React.createRef();
    cajaTel = React.createRef();
    cajaVis = React.createRef();
    cajaCorreoP = React.createRef();
    cajaPrograma = React.createRef();
    cajaTipo = React.createRef();
    state = { status: false ,
    programa:[],
    respuestas:[],
    pro:[],
    roles:[],
    rol:[]
    }
    //funcion para crear un programa
    cargarProgramas = () => {
        var url = "http://localhost:8080";
        var request = "/gestioninstitucional/listarprogramas" ;
        axios.get(url + request).then(res => {
          this.setState({
            programa: res.data
            
          });
        });
      }   
      //funcion para listar los roles que puede tener un usuario
      cargarRoles = () => {
        var url = "http://localhost:8080";
        var request = "/gestionusuario/todosroles" ;
        axios.get(url + request).then(res => {
          this.setState({
            roles: res.data
            
          });
        });
      } 
       
      componentDidMount = () => {
        this.cargarProgramas();
        this.cargarRoles();
        this.setState({ pro: this.state.programa, rol:this.state.roles })
      }
    nuevoUsuario = (e) => {
        e.preventDefault();
        var ced = this.cajaCedula.current.value;
        var codU = this.cajacodUniversitario.current.value;
        var correoE = this.cajaCorreoE.current.value;
        var clave = this.cajaClave.current.value;
        var cClave=this.cajaCClave.current.value;
        var nombre = this.cajaNombre.current.value;
        var apellido = this.cajaApellido.current.value;
        var tel = this.cajaTel.current.value;
        var vis = this.cajaVis.current.value;
        var correoP = this.cajaCorreoP.current.value;
        var programa = this.cajaPrograma.current.value;
        var tipoU = this.cajaTipo.current.value;
        
        var grupo = {
            cedula: ced
            , codUniversitario: codU
            , correoEst: correoE
            , contrasena: md5(clave)
            , nombres: nombre
            , apellidos: apellido
            , telefono: tel
            , visibilidad: vis
            , correoPersonal: correoP
            , programa: programa
            , tipo:tipoU
        };
        console.log(grupo)
        if(clave !="" && clave!=cClave){
            alert("Error: las contraseñas no coinciden!");
        }
        
        console.log(grupo)
        var url = 'http://localhost:8080/gestionusuario/guardarusuario/';
        axios.post(url, grupo).then(res => {
           
            this.setState({ respuestas: res.data,
               status: true });
               if (res.data.respuesta==="usuario creado") {
                alert("El usuario fue creado correctamente")
                window.location.href ="/"
            }else if(res.data.respuesta==="el tipo de usuario es incorrecto"){
              alert("El usuario no se pudo crear por favor verifica los datos")
              window.location.href ="/Registro"
            }else{
              alert("El usuario no se pudo crear por favor verifica los datos")
             
              window.location.href ="/Registro"
            }
        });
       
       
      }

  render() {
    var rol = localStorage.getItem("tipo");
    return (
      <div>
        <Aside />
        <Header />
        <section class="vh-100 " style={{ background: 'rgb(2,0,36)' }}>
          
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                <div class="card bg-dark text-white" style={{ borderradius: "1rem" }}>
                  <div class="card-body p-5 text-center">
                    <form onSubmit={this.nuevoUsuario} style={{ width: "50%", margin: "auto" }}>
                        <label>Cedula: </label>
                        <input type="text" name="cajaced" className="form-control" ref={this.cajaCedula} required />
                        <label>Codigo Universitario: </label>
                        <input type="number"  name="cajacodU" className="form-control" ref={this.cajacodUniversitario} required/>
                        <label>Correo Institucional : </label>
                        <input type="email" name="cajaCorreoE" className="form-control" ref={this.cajaCorreoE} required/>
                        <label>nombres: </label>
                        <input type="text" name="cajaNombre" className="form-control" ref={this.cajaNombre} required/>
                        <label>apellidos: </label>
                        <input type="text" name="cajaApellido" className="form-control" ref={this.cajaApellido} required/>
                        <label> Telefono: </label>
                        <input type="text" name="cajaTel" className="form-control" ref={this.cajaTel} required/>
                        <label> Correo Personal: </label>
                        <input type="email"  name="cajaCorreoP" className="form-control" ref={this.cajaCorreoP} required/>
                        <label> Contraseña: </label>
                        <input type="password" name="pwd1" className="form-control" ref={this.cajaClave} required/>
                        <label> Confirmar Contraseña: </label>
                        <input type="password" name="pwd2" className="form-control" ref={this.cajaCClave} required/>
                        
                        <input type="hidden" name="cajaVis" className="form-control" ref={this.cajaVis} value="1"/>
                        <label> programa: </label>
                        <div className="form-outline form-white mb-1">
                          <select ref={this.cajaPrograma}className="form-control" style={{ color: "black" }} >
                          <option selected > Elige una opción </option>
                            {this.state.status === false &&
                              (this.state.programa.map((pro) => {
                                return (
                                  <option style={{ color: "black" }} value={pro.id}>{pro.nombre}</option>
                                );
                              }
                              )
                              )}
                          </select>
                        </div>
                        <label> Tipo de usuario  </label>
                        <div class="form-outline form-white mb-4">
                        
                        <select ref={this.cajaTipo}className="form-control" style={{ color: "black" }} >
                          <option selected > Elige una opción </option>
                            {this.state.status === false &&
                              (this.state.roles.map((rol) => {
                                return (
                                  <option style={{ color: "black" }}>{rol.nombre}</option>
                                );
                              }
                              )
                              )}
                          </select>
                      
                        </div>
                        <br />
                        <button className="btn btn-success" onSubmit={this.nuevoUsuario} >Añadir</button>
                    </form>
                     </div>
                </div>
              </div>
            </div>
         
        </section>
      </div>
    )
  }
}
