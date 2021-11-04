import React, { Component, NavLink } from 'react'
import axios from 'axios'
export default class FormularioLogin extends Component {

  cajaCorreo = React.createRef();
  cajaClave = React.createRef();
  cajaTipo = React.createRef();

  state = {
    status: false,
    lineas: [],
    li: [],
    roles: [],
    rol: []
  }

  login = async (e) => {
    e.preventDefault();

    var correo = this.cajaCorreo.current.value;
    var clave = this.cajaClave.current.value;
    var tipo = this.cajaTipo.current.value;

    var grupo = {
      correoEstudiantil: correo
      , contrasena: clave
      , tipoUsuario: tipo

    };
    var reTipo = tipo;

    var url = 'http://localhost:8080/gestionusuario/login';
    await axios.post(url, grupo)
      .then(response => {
        return response.data;
      }).then(response => {
        if (response != null) {
          localStorage.setItem("cedula", response.cedula)
          localStorage.setItem("tipo", reTipo)
          alert('bienvenido');
          window.location.href = "/HomeInstitucional/" + grupo.tipoUsuario;
        } else {
          alert('el usuario o contraseña son incorrectos');
        }
      })
  }
  CargarRoles = () => {
    var request = "/gestionusuario/todosroles";
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
    this.setState({ rol: this.state.roles })
  }

  render() {
    return (
      <div>
        <section class="vh-100 " style={{ background: 'rgb(2,0,36)' }}>
          <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                <div class="card bg-dark text-white" style={{ borderradius: "1rem" }}>
                  <div class="card-body p-5 text-center">
                    <div class="mb-md-5 mt-md-4 pb-5">
                      <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                      <p class="text-white-50 mb-5">Please enter your login and password!</p>
                      <form onSubmit={this.login}>
                        <div class="form-outline form-white mb-4">
                          <input type="email" id="typeEmailX" class="form-control form-control-lg" ref={this.cajaCorreo} />
                          <label class="form-label" for="typeEmailX">Email</label>
                        </div>
                        <div class="form-outline form-white mb-4">
                          <input type="password" id="typePasswordX" class="form-control form-control-lg" ref={this.cajaClave} />
                          <label class="form-label" for="typePasswordX">Password</label>
                        </div>
                        <div class="form-outline form-white mb-4">
                          <select ref={this.cajaTipo}>
                            {this.state.status === true &&
                              (this.state.roles.map((rol) => {
                                return (
                                  <option style={{ color: "black" }}>{rol.nombre}</option>
                                );
                              }
                              )
                              )}
                          </select>
                        </div>
                        <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
                        <button class="btn btn-outline-light btn-lg px-5" type="submit" onClick={this.login}>Login</button>
                      </form>
                      <div class="d-flex justify-content-center text-center mt-4 pt-1">
                        <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                        <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                        <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
                      </div>
                    </div>
                    <div>
                      <p class="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

