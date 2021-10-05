
import React, { Component } from 'react'

export default class FormularioLogin extends Component {
  state={
    form:{
      username:'',
      password:''
    }
  }
 
  render() {
    return (
      <div>
        <div className="py-5 text-muted text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <form className>
                  <div className="form-group"> 
                  <label>Correo Institucional</label> 
                  <input type="email" className="form-control" placeholder="Correo Intitucional" /> 
                  <small className="form-text text-muted" /> 
                  </div>
                  <div className="form-group"> 
                  <label>Contraseña</label> 
                  <input type="password" className="form-control" placeholder="Contraseña" /> 
                  </div>
                  <a href="/Gradoprueba">Ingregar</a>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

