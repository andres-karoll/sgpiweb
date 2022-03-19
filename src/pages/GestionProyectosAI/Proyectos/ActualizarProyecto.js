import React, { Component } from 'react';
import axios from 'axios';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
import swal from 'sweetalert';
export default class ActualizarProyecto extends Component {
    state = {
        status: false,
        proyecto: []
    }

    /**
     * lista de proyectos por id 
     */
    CargarProyecto = () => {
        var request = "/gestionproyectosaulaintegrador/listarporid/" + this.props.id;
        var url = "http://localhost:8080" + request;
        axios.get(url).then(res => {
            this.setState({
                proyecto: res.data
                , status: true
            })
        });
    }
    /**
     * metodo para cargar metodos al inicio 
     */
    componentDidMount = () => {
        this.CargarProyecto();
    }
    /**
     * deficion de variables
     */
    cajaId = React.createRef();
    cajaTitulo = React.createRef();
    cajaDescripcion = React.createRef();
    cajaMetodologia = React.createRef();
    cajaJustificacion = React.createRef();
    cajaConclusiones=React.createRef();
    /**
     * metodo para actualizar un proyecto 
     * @param {*} e 
     */
    ActualizarProyecto = (e) => {
        e.preventDefault();
        var id = this.cajaId.current.value;
        var tit = this.cajaTitulo.current.value;
        var desc = this.cajaDescripcion.current.value;
        var met = this.cajaMetodologia.current.value;
        var jus = this.cajaJustificacion.current.value;
        var con= this.cajaConclusiones.current.value;
        var proyeto = {
            id: id
            , titulo: tit
            , descripcion: desc
            , metodologia: met
            , justificacion: jus
            , conclusiones:con

        };
        var url = 'http://localhost:8080/gestionproyectosaulaintegrador/actualizarproyecto';
        axios.post(url, proyeto).then(res => {
            if (res.data.respuesta === "el proyecto fue actualizado") {
                swal({
                    title: "El proyecto fue actualizado correctamente",
                    icon:"success"
                  });
                
                window.location.href = "/ProyectosAulaIntegrador"
            } else {
                swal({
                    title: "El proyecto no se pudo actualizar",
                    icon:"error"
                  });
                window.history.back();
            }
        });
    }


    render() {
        return (
            <div>
                <Aside />
                <Header />
                {this.state.status === true &&
          (<React.Fragment>
                <div className="content-wrapper">
                    <section className="content">

                        <div className="container-fluid">
                            <div className="row">
                                {/* left column */}
                                <div className="col-md-12">
                                    {/* general form elements */}
                                    <div className="card card-primary">
                                        <div className="card-header" style={{ align: "center" }}>
                                            <h3 className="card-title"  >Actualizar Proyecto</h3>
                                        </div>
                                        {/* /.card-header */}
                                        {/* form start */}
                                        <form style={{ width: "50%", margin: "auto" }}>
                                            <div className="card-body">
                                                <div className="form-group">
                                                    <input type="hidden" name="cajanom" className="form-control" value={this.state.proyecto.id} ref={this.cajaId}  />
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1">Titulo</label>
                                                    <textarea type="text" name="cajadir" className="form-control" ref={this.cajaTitulo} placeholder={this.state.proyecto.titulo}/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1">Descripcion</label>
                                                    <textarea type="text" name="cajatel" className="form-control" ref={this.cajaDescripcion} placeholder={this.state.proyecto.descripcion}/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1">Metodologia</label>
                                                    <textarea type="text" name="cajatel" className="form-control" ref={this.cajaMetodologia} placeholder={this.state.proyecto.metodologia}/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1">Justificacion</label>
                                                    <textarea type="text" name="cajatel" className="form-control" ref={this.cajaJustificacion} placeholder={this.state.proyecto.justificacion}/>
                                                </div>
                                                {this.state.proyecto.estado==="Finalizado"?(
                                                     <div className="form-group">
                                                     <label htmlFor="exampleInputPassword1">Conclusiones</label>
                                                     <textarea type="text" name="cajatel" className="form-control" ref={this.cajaConclusiones} />
                                                 </div>
                                                ):(
                                                    <input type="hidden" name="cajatel" className="form-control" ref={this.cajaConclusiones} />
                                            
                                                )

                                                }

                                            </div>
                                            <div className="card-footer">
                                                <button className="btn btn-success " onClick={this.ActualizarProyecto}>Enviar</button>
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
                </React.Fragment>
          )}
      </div>
    )
  }
}
