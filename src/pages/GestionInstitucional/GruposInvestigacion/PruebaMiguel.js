import React, { Component } from 'react'
import axios from 'axios'


export default class PruebaMiguel extends Component {

  manejadorSubmit = e => {
    e.preventDefault();
  }
  state = {
    form: {
      "correoEstudiantil": "",
      "contrasena": ""
    },
    status: false,
    roles: [],
    error: false,
    errorMsg: "",
    rol:[]
  }

  InicioSesion = async e => {
    await this.setState(
      {
        form: {
          ...this.state.form,
          [e.target.name]: e.target.value
        }
      }
    )
  }
  CargarRoles = () => {
    var request = "/gestioninstitucional/listarlineasdelgrupo/2" ;
    var url = "http://localhost:8080" + request;
     axios.get(url).then(res => {
      this.setState({
        roles: res.data
        , status: true
      })
    });
  }
  componentDidMount = () => {
    this.CargarRoles();
    this.setState({rol:this.state.roles})
  }
  manejadorBoton = async () => {
    let url = "http://localhost:8080/gestionusuario/login";
    console.log(this.state.form)
    await axios.post(url, this.state.form)
      .then(response => {
        console.log(response.data)
        return response.data;
      }).then(response => {
        if (response != null) {
          var respuesta = response[0];
          console.log("hola");
          //cookies.set('cedula',respuesta.cedula,{path:"/"})   
          alert('bienvenido');
          window.location.href = "/Home/Login/Dashboart";
        } else {

          alert('el usuario o contraseña son incorrectos');
        }

      }).catch(error => {
        console.log(error);
        this.setState({
          error: true,
          errorMsg: "Error:Al conectar con el Api"
        })
      })
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <div className="py-5 text-muted text-center">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <form onSubmit={this.manejadorSubmit} >
                    <div className="form-group">
                      <label>Correo Institucional</label>
                      <input type="email" className="form-control" placeholder="Correo Intitucional" name="correoEstudiantil" onChange={this.InicioSesion} />
                      <small className="form-text text-muted" />
                    </div>
                    <div className="form-group">
                      <label>Contraseña</label>
                      <input type="password"
                        className="form-control"
                        placeholder="contraseña"
                        name="contrasena"
                        onChange={this.InicioSesion}
                      />
                   
                      <select >
                      {this.state.status === true &&
                
                ( this.state.roles.map((rol) => {
                  return(
                        <option key={rol.nombre} value={rol.nombre}>{rol.nombre}</option> 
                        );
                      })
                      )}
                      </select>
                  </div>
                    <button onClick={this.manejadorBoton}>Ingregar</button>

                  </form>
                  {this.state.error === true &&
                    <div className="alert alert-danger" role="alert">
                      {this.state.errorMsg}
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}