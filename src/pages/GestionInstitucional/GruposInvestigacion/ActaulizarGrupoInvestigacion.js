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

    state = { status: false }

    nuevoGrupoInvestigacion = (e) => {
        e.preventDefault();
        var idgrupo = parseInt(this.cajaIDRef.current.value);
        var nom = this.cajaNombreRef.current.value;
        var fe_fun = this.cajaFecha_funRef.current.value;
        var cat = this.cajaCategoriaRef.current.value;
        var fe_cat = this.cajaFecha_catRef.current.value;
        var dir = this.cajaDirector_grupoRef.current.value;
        var grupo = {
            id: this.props.id
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
        });
    }

    render() {
        if(this.state.status === true){
            return <Redirect to="/GruposInvestigacion" />
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
                    <h1 className="card-title"  >Actualizar el grupo de investigacion</h1>
                  </div>
                   
                    {/* /.card-header */}
                    {/* form start */}
                    <form onSubmit={this.nuevoGrupoInvestigacion} style={{width: "50%", margin: "auto"}}>
                        <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">ID</label>
                            <input type="text" name="cajanom" className="form-control" value = {this.props.id} placeholder="ID" ref={this.cajaIDRef} readOnly/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1">Nombre</label>
                            <input type="text" name="cajadir" className="form-control" value = {this.props.nombre} placeholder="Nombre" ref={this.cajaNombreRef} required/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1" style={{  width: '20%'}}>Fecha Fun</label>
                            {/*<input type="text" name="cajatel" className="form-control" placeholder="Fecha fun" ref={this.cajaFecha_funRef} />*/}
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
                            <label htmlFor="exampleInputPassword1" style={{  width: '20%'}}>Fecha cat</label>
                            {/*<input type="text" name="cajatel" className="form-control" placeholder="Fecha cat" ref={this.cajaFecha_catRef} />*/}
                            <input type="date" id="start" name="trip-start" style={{ height: "30px"}}
       min="2000-01-01" max="2100-12-31" ref={this.cajaFecha_catRef} required></input> 
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1">Director de grupo</label>
                            <input type="text" name="cajatel" className="form-control" placeholder="Director de grupo" ref={this.cajaDirector_grupoRef} required/>
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
