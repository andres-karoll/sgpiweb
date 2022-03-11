import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';


export default class EvaluacionConvocatoria extends Component {
  /**
   * definicion de variables 
   */
  cajaIDRef = React.createRef();
  cajaEstadoRef = React.createRef();
  cajaProyectoRef = React.createRef();
  cajaConvocatoriaRef = React.createRef();
  cajaReconocimientos = React.createRef();
  state = {
    status: false,
    proyecto: []
  }
  /**
   * metodo para evaluar un proyecto de convocatoria
   * @param {*} e 
   */
  actualizar = (e) => {
    e.preventDefault();
    var pro = this.cajaProyectoRef.current.value;
    var est = this.cajaEstadoRef.current.value;
    var con = this.cajaConvocatoriaRef.current.value;
    var recono = this.cajaReconocimientos.current.value;
    var estado = {
      proyecto: pro
      , estado: est,
      convocatoria: con,
      reconocimiento: recono
    };
    var url = 'http://localhost:8080/gestionproyectosinvestigacion/aval/';
    axios.post(url, estado).then(res => {
      this.setState({ status: true });
      if (res.data.respuesta === "Se realizo la validacion exitosamente") {
        alert("Se realizo la validacion exitosamente")
        window.location.href = "/HomeInstitucional"
      } else {
        alert("No se puedo realizar la actualizacion de estado")
        window.location.href = "/HomeInstitucional"
      }
    });
  }
  /**
   * metodo para traer datos de un proyecto de convocatoria 
   */
  Cargardos = () => {
    var request = "/gestioninstitucional/datosProyectoConvocatoria/" + this.props.id;
    var url = "http://localhost:8080" + request;
    axios.get(url).then(res => {
      this.setState({
        proyecto: res.data
        , status: true
      })
    });
  }
  /**
   * metodo de inicio 
   */
  componentDidMount = () => {
    this.Cargardos();
  }

  render() {
    var rol = localStorage.getItem("tipo")
    return (
      <div>
        <Aside />
        <Header />
        <div className="content-wrapper">
          <section className="content">

            <div className="container-fluid">
              <div className="row">
                {/* left column */}
                <div className="col-md-12">
                  {/* general form elements */}
                  <div className="card card-primary">
                    <div className="card-header" style={{ align: "center" }}>
                      <h3 className="card-title"  >Aceptar o Denegar Convocatoria</h3>
                    </div>
                    {/* /.card-header */}
                    {/* form start */}
                    <form onSubmit={this.actualizar} style={{ width: "50%", margin: "auto" }}>
                      {this.state.status === true &&
                        (
                          this.state.proyecto.map((pro, i) => {
                            return (
                              <div className="card-body">
                                <div className="form-group">
                                  <input type="hidden" name="cajanom" className="form-control" value={this.props.id} ref={this.cajaIDRef} readOnly />
                                </div>
                                <div className="card-body box-profile">
                                  <div className="text-center">
                                    <img className="profile-user-img img-fluid img-circle" src="https://i.ibb.co/6smVBgh/Captura.png" alt="User profile picture" />
                                  </div>
                                  <h3 className="profile-username text-center">Proyecto de Convocatoria</h3>


                                  <ul className="list-group list-group-unbordered mb-3">
                                    <li className="list-group-item">
                                      <b>Proyecto</b> <a className="float-right">{pro.titulo}</a>
                                      <input type='hidden' ref={this.cajaProyectoRef} value={pro.id} />
                                      <input type='hidden' ref={this.cajaConvocatoriaRef} value={pro.id_convocatoria} />
                                    </li>

                                    <li className="list-group-item">
                                      <b>Descripcion</b> <a className="float-right">{pro.descripcion}</a>
                                    </li>
                                    <li className="list-group-item">
                                      <b>Nombre convocatoria</b> <a className="float-right">{pro.nombre_convocatoria}</a>
                                    </li>

                                    <li className="list-group-item">
                                      <b>Estado en la convocatoria</b> <a className="float-right">{pro.id_proyecto}</a>
                                    </li>

                                  </ul>
                                  {pro.id_proyecto === "Aceptado 2" ? (
                                    <div className="form-group">
                                      <label htmlFor="exampleInputPassword1" style={{ color: "red" }}>*</label>
                                      <label htmlFor="exampleInputPassword1">Reconocimientos</label>
                                      <div></div>
                                      <textarea name="comentarios" rows="5" cols="100" wrap="physical" ref={this.cajaReconocimientos} required />
                                    </div>
                                  ) : (

                                    <input type="hidden" name="comentarios" rows="5" cols="100" wrap="physical" ref={this.cajaReconocimientos} value="" />
                                  )}

                                </div>
                                <div className="form-group">
                                  <label htmlFor="exampleInputPassword1" style={{ color: "red" }}>*</label>
                                  <label htmlFor="exampleInputPassword1">Evaluar</label>
                                  <select className="form-control select2" style={{ width: '100%' }} ref={this.cajaEstadoRef} required>
                                    <option selected>Elige una opcion</option>

                                    {
                                      (pro.id_proyecto === "Propuesta") &&
                                      <option value="Validacion 1">Validacion 1</option>



                                    }
                                    {(pro.id_proyecto === "Validacion 1") &&
                                      <option value="Validacion 2">Validacion 2</option>}

                                    {(pro.id_proyecto === "Validacion 2") &&
                                      <option value="Validacion 3">Validacion 3</option>
                                    }
                                    {(pro.id_proyecto === "Validacion 3") &&
                                      <option value="Desarrollo">Desarrollo</option>
                                    }
                                    {(pro.id_proyecto === "Finalizado") &&
                                      <option value="Aceptado 1">Aceptado 1</option>
                                    }
                                    {(pro.id_proyecto === "Desarrollo") &&
                                      <option value="Finalizado">Finalizado</option>
                                    }
                                    {(pro.id_proyecto === "Finalizado" || pro.id_proyecto === "Aceptado 1" || pro.id_proyecto === "Aceptado 2") &&
                                      <option value="Desarrollo">Volver a desarrollo</option>
                                    }
                                    {(pro.id_proyecto === "Aceptado 1") &&
                                      <option value="Aceptado 2">Aceptado 2</option>
                                    }
                                    {(pro.id_proyecto === "Aceptado 2") &&
                                      <option value="Terminado">Terminar procesos</option>
                                    }
                                    {(pro.id_proyecto === "Propuesta" || pro.id_proyecto === "Validacion 1" || pro.id_proyecto === "Validacion 3" || pro.id_proyecto === "Validacion 2") &&
                                      <option value="Propuesta">Rechazar</option>
                                    }

                                  </select>
                                </div>
                              </div>
                            );
                          }))}
                      {/* /.card-body */}
                      <div className="card-footer">
                        <button className="btn btn-success">Enviar</button>
                      </div>
                    </form>

                  </div>

                  {/* /.card */}
                </div>

                {/*/.col (right) */}
              </div>

              {/* /.row */}
            </div>{/* /.container-fluid */}

          </section>
        </div>
      </div>
    )
  }
}
