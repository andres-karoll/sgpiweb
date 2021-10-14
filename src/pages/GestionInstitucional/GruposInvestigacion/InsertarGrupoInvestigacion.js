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
            , director_grupo: dir
        };
        console.log(grupo);
        var url = 'http://localhost:8080/gestioninstitucional/creargruposi';
        axios.post(url, grupo).then(res => {
            this.setState({ status: true });
            window.location.href = "/GruposInvestigacion";
        });
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
                            <label htmlFor="exampleInputEmail1">ID</label>
                            <input type="text" name="cajanom" className="form-control" placeholder="ID" ref={this.cajaIDRef} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Nombreeeeeee</label>
                           {/* /.card  <input type="text" name="cajadir" className="form-control" placeholder="Nombre" ref={this.cajaNombreRef} /> */}
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Fecha Fun</label>
                            <input type="text" name="cajatel" className="form-control" placeholder="Fecha fun" ref={this.cajaFecha_funRef} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Categoria</label>
                            <input type="text" name="cajatel" className="form-control" placeholder="Categoria" ref={this.cajaCategoriaRef} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Fecha cat</label>
                            <input type="text" name="cajatel" className="form-control" placeholder="Fecha cat" ref={this.cajaFecha_catRef} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Director de grupo</label>
                            <input type="text" name="cajatel" className="form-control" placeholder="Director de grupo" ref={this.cajaDirector_grupoRef} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Prueba lineas</label>
                            <select >
                      {this.state.status === true && 
                
                ( this.state.roles.map((rol) => {
                  return(
                        <option ref={this.cajaNombreRef} value={rol.nombre}>{rol.nombre}</option> 
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
