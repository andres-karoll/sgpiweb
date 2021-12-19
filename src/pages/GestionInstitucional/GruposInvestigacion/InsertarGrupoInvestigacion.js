import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';

export default class InsertarGrupoInvestigacion extends Component {

    cajaIDRef = React.createRef();
    cajaNombreRef = React.createRef();
    cajaFecha_funRef = React.createRef();
    cajaCategoriaRef = React.createRef();
    cajaFecha_catRef = React.createRef();
    cajaDirector_grupoRef = React.createRef();

    state = { status: false,
    lineas:[],
li:[],
roles:[],
rol:[] }

    nuevoGrupoInvestigacion = (e) => {
        e.preventDefault();
        var idgrupo = this.cajaIDRef.current.value;
        var nom = this.cajaNombreRef.current.value;
        var fe_fun = this.cajaFecha_funRef.current.value;
        var cat = this.cajaCategoriaRef.current.value;
        var fe_cat = this.cajaFecha_catRef.current.value;
        var dir = this.cajaDirector_grupoRef.current.value;
        var grupo = {
            id: idgrupo
            , nombre: nom 
            , fechaFun: fe_fun
            , categoria: cat
            , fechaCat: fe_cat
            , director: dir
        };
        console.log(grupo);
        var url = 'http://localhost:8080/gestioninstitucional/creargruposi';
        axios.post(url, grupo).then(res => {
            this.setState({ status: true });
            
            if (res.data.respuesta==="el grupo se creo") {
                alert("Se creo el grupo de investigación")
                window.location.href = "/GruposInvestigacion";
            }else if (res.data.respuesta==="el grupo no se creo porque el usuario no existe"){
              alert("El grupo no se creo porque el usuario no existe")
              window.location.href = "/GruposInvestigacion";

            }else if (res.data.respuesta==="el grupo no se creo porque el usuario que escogio es un estudiante inactivo"){
                alert("El grupo no se creó porque el usuario que escogió es un estudiante inactivo")
                window.location.href = "/GruposInvestigacion";            
            }else if (res.data.respuesta==="el grupo no se creo porque el usuario que escogio es un estudiante activo"){
                alert("El grupo no se creó porque el usuario que escogió es un estudiante activo")
                window.location.href = "/GruposInvestigacion";
            }else if (res.data.respuesta==="el grupo no se creo porque el usuario que escogio es un egresado"){
                alert("El grupo no se creo porque el usuario que escogio es un egresado")
                window.location.href = "/GruposInvestigacion";
            }else if (res.data.respuesta==="el grupo no se creo porque el usuario que escogio es un investigador en formación"){
                alert("El grupo no se creo porque el usuario que escogio es un investigador en formación")
                window.location.href = "/GruposInvestigacion";
            }else if (res.data.respuesta==="el grupo no se creo porque el usuario que escogio hace parte del personal de biblioteca"){
                alert("El grupo no se creo porque el usuario que escogio hace parte del personal de biblioteca")
                window.location.href = "/GruposInvestigacion";
            }else if (res.data.respuesta==="el grupo no se creo porque el usuario que escogio hace parte del personal de publicaciones"){
                alert("El grupo no se creo porque el usuario que escogio hace parte del personal de publicaciones")
                window.location.href = "/GruposInvestigacion";
            }
            else if (res.data.respuesta==="el grupo no se creo porque el usuario que escogio es un Semillerista"){
                alert("El grupo no se creo porque el usuario que escogio es un Semillerista")
                window.location.href = "/GruposInvestigacion";
            }
            
            
        });
    }
    Cargar = () => {
        var request = "/gestioninstitucional/listarlineas" ;
        var url = "http://localhost:8080" + request;
         axios.get(url).then(res => {
          this.setState({
            lineas: res.data
            , status: true
          })
        });
      }
      
      componentDidMount = () => {
        this.Cargar();
      }




    render() {
        if(this.state.status === true){
            //return <Redirect to="/GruposInvestigacion" />
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
                    <h3 className="card-title"  >Crear un grupo de investigacion</h3>
                  </div>
                   
                    {/* /.card-header */}
                    {/* form start */}
                    <form onSubmit={this.nuevoGrupoInvestigacion} style={{width: "50%", margin: "auto"}}>
                        <div className="card-body">
                        <div className="form-group">
                            <input type="hidden" name="cajanom" className="form-control" placeholder="ID" ref={this.cajaIDRef} />
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1">Nombre del grupo de investigación</label>
                           <input type="text" name="cajadir" className="form-control" placeholder="Nombre" ref={this.cajaNombreRef} required/> 
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1" style={{  width: '50%'}}>Fecha de fundación</label>
                            {/* <input type="text" name="cajatel" className="form-control" placeholder="Fecha fun" ref={this.cajaFecha_funRef} />*/}
                            <input type="date" id="start" name="trip-start" style={{ height: "30px"}}
       min="2000-01-01" max="2100-12-31" ref={this.cajaFecha_funRef} required></input>
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1">Categoria</label>
                            <input type="text" name="cajatel" className="form-control" placeholder="Categoria" ref={this.cajaCategoriaRef} required/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1" style={{  width: '50%'}}>Fecha de la categoria del grupo</label>
                            {/*<input type="text" name="cajatel" className="form-control" placeholder="Fecha cat" ref={this.cajaFecha_catRef} />*/}
                            <input type="date" id="start" name="trip-start" style={{ height: "30px"}}
       min="2000-01-01" max="2100-12-31" ref={this.cajaFecha_catRef} required></input>                        
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1">Cedula Director de grupo</label>
                            <input type="number" name="cajatel" className="form-control" placeholder="Director de grupo" ref={this.cajaDirector_grupoRef} required/>
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
