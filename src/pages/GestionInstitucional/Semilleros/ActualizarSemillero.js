import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
import swal from 'sweetalert';
export default class ActualizarSemillero extends Component {

    cajaIDRef = React.createRef();
    cajaNombreRef = React.createRef();
    cajaDescripcionRef = React.createRef();
    cajaFecha_funRef = React.createRef();
    cajaGrupoInvestigacionRef = React.createRef();
    cajaLineaInvestigacionFef = React.createRef();
    cajaLiderRef = React.createRef();

    state = { status: false,
        gruposi:[],
        grup:[],
    lineas:[],
semillero:{} }
//funcion para actualizar un semillero y asignar las variables del JSON
    actualizarSemillero = (e) => {
        e.preventDefault();
        var idsemillero = this.props.id;
        var nom = this.cajaNombreRef.current.value;
        var descrip = this.cajaDescripcionRef.current.value;
        var fe_fun = this.cajaFecha_funRef.current.value;
        var grupoi = this.cajaGrupoInvestigacionRef.current.value;
        var linea = this.cajaLineaInvestigacionFef.current.value;
        var lider = this.cajaLiderRef.current.value;
        var semillero = {
            id: idsemillero
            , nombre: nom
            , descripcion: descrip
            , fechaFun: fe_fun
            , grupoInvestigacion: grupoi
            , lineaInvestigacion: linea
            , liderSemillero: lider
        };
        var url = 'http://localhost:8080/gestioninstitucional/modificarsemillero';
        axios.post(url, semillero).then(res => {
            this.setState({ status: true });
            if (res.data.respuesta==="el semillero fue actualizado") {
                swal({
                    title: "el semillero fue actualizado",
                    icon:"success"
                  });
         
                window.location.href = "/Semilleros";
            }else if (res.data.respuesta==="el usuario ingresado no existe") {
                swal({
                    title: "el usuario ingresado no existe",
                    icon:"error"
                  });
                
                window.location.href = "/Semilleros";
            }else if (res.data.respuesta==="el semillero no se creo porque el usuario es un estudiante inactivo") {
                swal({
                    title: "el semillero no se creo porque el usuario es un estudiante inactivo",
                    icon:"error"
                  });
                
                window.location.href = "/Semilleros";
            }else if (res.data.respuesta==="el semillero no se creo porque el usuario es un estudiante activo") {
                swal({
                    title: "el semillero no se creo porque el usuario es un estudiante activo",
                    icon:"error"
                  });
              
                window.location.href = "/Semilleros";
            }else if (res.data.respuesta==="el semillero no se creo porque el usuario es un semillerista") {
                swal({
                    title: "el semillero no se creo porque el usuario es un semillerista",
                    icon:"error"
                  });
                
                window.location.href = "/Semilleros";
            }else if (res.data.respuesta==="el semillero no se creo porque el usuario ya es lider de semillero") {
                swal({
                    title: "el semillero no se creo porque el usuario ya es lider de semillero",
                    icon:"error"
                  });
             
                window.location.href = "/Semilleros";
            }else{
                swal({
                    title: "NO se pudo actualizar el semillero correctamente",
                    icon:"error"
                  });
              window.location.href = "/Semilleros";
            }
        });
    }
    //funcion para listar los grupos de investigacion
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
      //funcion para listar las lineas de investigacion
      Cargardos = () => {
        var request = "/gestioninstitucional/listarlineas" ;
        var url = "http://localhost:8080" + request;
         axios.get(url).then(res => {
          this.setState({
            lineas: res.data
            , status: true
          })
        });
      }
      //funcion para obtener la informacion actual del semillero
      cargartres = () => {
        var request = "/gestioninstitucional/semilleroid/" + this.props.id;
        var url = "http://localhost:8080" + request;
        axios.get(url).then(res => {
            this.setState({
                semillero: res.data
                ,status: true
            });
        });
    }
      componentDidMount = () => {
        this.Cargar();
        this.Cargardos();
        this.cargartres();
      }

    render() {
        if(this.state.status === true){
            //return <Redirect to="/Semilleros" />
        }
        return (
            <div>
                <Aside/>
                <Header/>
            <div className="content-wrapper">
            <section className="content">
                
            <div className="container-fluid">
                <div className="row">
                {/* left column */}
                <div className="col-md-12">
                    {/* general form elements */}
                    <div className="card card-primary">
                    <div className="card-header" style={{align:"center"}}>
                    <h3 className="card-title"  >Actualizar Semillero</h3>
                  </div>
                   
                    {/* /.card-header */}
                    {/* form start */}
                    <form onSubmit={this.actualizarSemillero} style={{width: "50%", margin: "auto"}}>
                        <div className="card-body">
                        <div className="form-group">
                            <input type="hidden" name="cajanom" className="form-control" value = {this.props.id} placeholder="ID" ref={this.cajaIDRef} readOnly/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Nombre del semillero actual: {this.state.semillero.nombre}</label>
                            <input type="text" name="cajadir" className="form-control" placeholder={this.state.semillero.nombre} ref={this.cajaNombreRef}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">descripci??n actual: {this.state.semillero.descripcion}</label>

                            <textarea type="text" rows="15" name="cajatel" className="form-control" placeholder={this.state.semillero.descripcion} ref={this.cajaDescripcionRef}/>
                        </div>
                        <div className="form-group">
                        
                            <label htmlFor="exampleInputPassword1" style={{  width: '50%'}}>Fecha de fundaci??n actual: {this.state.semillero.fecha_fun}</label>
{/*<input type="text" name="cajatel" className="form-control" placeholder="Fecha_fun" ref={this.cajaFecha_funRef} />*/}
<input type="date" id="start" name="trip-start" style={{ height: "30px"}}
       min="2000-01-01" max="2100-12-31" placeholder={this.state.semillero.fecha_fun} ref={this.cajaFecha_funRef}></input>
                               </div>
                               <div className="form-group">
                            <label htmlFor="exampleInputPassword1">lider actual del semillero: {this.state.semillero.lider_semillero}</label>
                            <div className="form-group">
                            <label htmlFor="exampleInputPassword1" style={{color: "red"}}>Si desea actualizar del lider ingrese la cedula</label>
                        
                            <input type="number" name="cajadir" className="form-control" placeholder={this.state.semillero.lider_semillero} ref={this.cajaLiderRef}/>
                            </div>
                        </div>
                        <div className="form-group">
                     
                            <label htmlFor="exampleInputPassword1" style={{  width: '50%'}}>Grupo de investigacion actual: {this.state.semillero.grupo_investigacion}</label>
                            <select ref={this.cajaGrupoInvestigacionRef} style={{width: '50%',  height: "30px"}} required>
                            <option disabled selected value={this.state.semillero.grupo_investigacion_id}>{this.state.semillero.grupo_investigacion}</option>
                                {this.state.status === true && 
                            
                            ( this.state.gruposi.map((grup) => {
                            return(
                                
                                    <option value={grup.id}>{grup.nombre}</option> 
                                    );
                                })
                                )}
                            </select>
                        </div>

                        <div className="form-group">
                        
                            <label style={{    width: '50%'}} htmlFor="exampleInputPassword1">Linea de investigacion actual: {this.state.semillero.linea_investigacion}</label>
                            <select ref={this.cajaLineaInvestigacionFef} style={{width: '50%',  height: "30px"}} required>
                            <option disabled selected value={this.state.semillero.linea_investigacion}>{this.state.semillero.linea_investigacion}</option>
                                {this.state.status === true && 
                            
                            ( this.state.lineas.map((li) => {
                            return(
                                    <option value={li.id}>{li.nombre}</option> 
                                    );
                                })
                                )}
                            </select>
                        </div>




                        </div>
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