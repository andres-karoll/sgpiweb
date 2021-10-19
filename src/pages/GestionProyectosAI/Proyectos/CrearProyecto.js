import React, { Component } from 'react';
import axios from 'axios';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
import { NavLink} from 'react-router-dom';
export default class CrearProyecto extends Component {
    state = { 
            status: false,
            tipo:[],
            tip:[],
            clase:[],
            cla:[]}
CargarTipos = () => {
    var request = "/gestionfiltroproyecto/todoslostiposproyecto" ;
    var url = "http://localhost:8080" + request;
   axios.get(url).then(res => {
     
      this.setState({
        tipo: res.data
        , status: true
      })
    });
  }
CargarClase = () => {
    var request = "/gestioninstitucional/listarclasespormateria/"+this.props.id ;
    var url = "http://localhost:8080" + request;
    axios.get(url).then(res => {
      this.setState({
        clase: res.data
        , status: true
      })
    });
  }
    cajaId = React.createRef();
    cajaTitulo = React.createRef();
    cajaDescripcion = React.createRef();
    cajaMetodologia = React.createRef();
    cajaJustificacion = React.createRef();
    cajaEstado = React.createRef();
    cajaFecha = React.createRef();
    cajaVis = React.createRef();
    cajaCiu = React.createRef();
    cajaTipo = React.createRef();
    cajaClase=React.createRef();
    cajaRol=React.createRef();
    cajaParticipante=React.createRef();
componentDidMount = () => {
        this.CargarTipos();
        this.setState({tip:this.state.tipo,
        cla:this.state.clase});
        this.CargarClase();
    }
CrearProyecto =  (e) => {
        e.preventDefault();
        var ids = this.cajaId.current.value;
        var tit= this.cajaTitulo.current.value;
        var desc = this.cajaDescripcion.current.value;
        var met = this.cajaMetodologia.current.value;
        var jus = this.cajaJustificacion.current.value;
        var esta=this.cajaEstado.current.value;
        var fecha=this.cajaFecha.current.value;
        var vis=this.cajaVis.current.value;
        var ciu=this.cajaCiu.current.value;
        var tip=this.cajaTipo.current.value;
        var part=localStorage.getItem("recorreo");
        var ro=this.cajaRol.current.value;
        var clas=this.cajaClase.current.value;
        var proyecto = {
                id:ids,
                titulo:tit,
                estado:esta,
                descripcion:desc,
                fechainicio:fecha,
                visibilidad:vis,
                ciudad:ciu,
                metodologia:met,
                justificacion:jus,
                tipo:tip,
                usuario:part,
                rol:ro,
                clase:clas
        };
        var url = 'http://localhost:8080/gestionproyectosaulaintegrador/crearproyecto';
            axios.post(url, proyecto).then(res => {
            this.setState({ status: true });
        });
    }   
    render() {    
         
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
                    <h3 className="card-title"  >Actualizar una Materia</h3>
                  </div>
                    {/* /.card-header */}
                    {/* form start */}
                    <form  style={{width: "50%", margin: "auto"}} onSubmit={this.CrearProyecto}>
                        <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Id</label>
                            <input type="text" name="cajanom" className="form-control" placeholder="Catalogo" ref={this.cajaId} />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Titulo</label>
                            <input type="text" name="cajadir" className="form-control"   ref={this.cajaTitulo} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Descripcion</label>
                            <input type="text" name="cajatel" className="form-control"ref={this.cajaDescripcion}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Fecha inicio</label>
                            <input type="text" name="cajatel" className="form-control"ref={this.cajaFecha} />                        
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Estado del proyecto</label>
                        <div></div>
                        <select ref={this.cajaEstado}>
                                    <option style={{color: "black"}} >Propuesta</option>
                            
                        </select>
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1">visibilidad del proyecto</label>
                        <div></div>
                        <select ref={this.cajaVis}>
                                    <option style={{color: "black"}}value={0} >Publico</option>
                                    <option style={{color: "black"}}value={1} >Privado</option>
                        </select>
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Ciudad</label>
                        <div></div>
                        <select ref={this.cajaCiu}>
                                    <option style={{color: "black"}}>Bogota</option>
                                    <option style={{color: "black"}}>Cali</option>
                        </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Metodologia</label>
                            <input type="text" name="cajatel" className="form-control" ref={this.cajaMetodologia}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Justificacion</label>
                            <input type="text" name="cajatel" className="form-control" ref={this.cajaJustificacion}/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Tipo de proyecto</label>
                        <div></div>
                        <select ref={this.cajaTipo}>
                        {this.state.status === true &&
                            ( this.state.tipo.map((tip) => {
                                return(
                                    <option style={{color: "black"}}>{tip.nombre}</option> 
                                    );
                                }
                                )
                                )
                                }    
                        </select>
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Rol que vas a tener en el rol</label>
                        <div></div>
                        <select ref={this.cajaRol}>
                                    <option style={{color: "black"}}>Lider</option>
                                    <option style={{color: "black"}}>coLider</option>
                        </select>
                        </div>
                        
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Clase</label>
                        <div></div>   
                        <select ref={this.cajaClase}>
                        {this.state.status === true &&
                            ( this.state.clase.map((cla) => 
                            { 
                                return(
                                    <option style={{color: "black"}} value={cla.numero}>{cla.nombre}</option> 
                                    );
                                }
                                )
                                )
                                }    
                        </select>
                        </div>
                        
                      
                        </div>
                        <div className="card-footer">               
                        <NavLink style={{width: '50%'}} className="btn btn-success" onClick={this.CrearProyecto} to={"/ProyectosAulaIntegrador/"} >Crear Proyecto</NavLink>
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
