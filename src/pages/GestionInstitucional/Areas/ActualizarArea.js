import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';

export default class ActualizarArea extends Component {

    cajaIDRef = React.createRef();
    cajaNombreRef = React.createRef();
    cajaDescripcionRef = React.createRef();
    cajaGranAreaRef = React.createRef();

    state = { status: false,
    area:{}}

    nuevaArea = (e) => {
        e.preventDefault();
        var ida = this.cajaIDRef.current.value
        var nom = this.cajaNombreRef.current.value;
        var des = this.cajaDescripcionRef.current.value;
        var gran = this.cajaGranAreaRef.current.value;
        var area = {
            id:ida,
            nombre: nom
            , descripcion: des
            , gran_area: gran
        };
        var url = 'http://localhost:8080/gestioninstitucional/modificararea';
        axios.post(url, area).then(res => {
            this.setState({ status: true });
            if (res.data.respuesta==="se actualizo la area") {
                alert("se actualizó la area")
                window.location.href ="/AreasConocimiento"
            }else{
              alert("no se pudo actualizar la area")
              window.location.href ="/AreasConocimiento"
            }
        });
    }
    Cargar = () => {
        var request = "/gestioninstitucional/areaid/" +this.props.id;
        var url = "http://localhost:8080" + request;
         axios.get(url).then(res => {
          this.setState({
            area: res.data
            , status: true
          })
        });
      }


    componentDidMount = () => {
        this.Cargar();
    }
    render() {
        if(this.state.status === true){
            //return <Redirect to="/AreasConocimiento" />
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
                    <h3 className="card-title"  >Actualizar la Area</h3>
                  </div>
                   
                    {/* /.card-header */}
                    {/* form start */}
                    <form onSubmit={this.nuevaArea} style={{width: "50%", margin: "auto"}}>
                        <div className="card-body">
                        <div className="form-group">
                            <input   type="hidden" name="cajanom" className="form-control" value = {this.props.id} placeholder="ID" ref={this.cajaIDRef} readOnly/>
                        </div>
                        <div className="form-group">
                      
                            <label  htmlFor="exampleInputPassword1"  >Nombre actual:{this.state.area.nombre} </label>
                            <input  type="text" name="cajatel" className="form-control" placeholder={this.state.area.nombre} ref={this.cajaNombreRef} />
                        </div>
                        <div className="form-group">

                            <label htmlFor="exampleInputPassword1">Descripción actual: {this.state.area.descripcion}</label>
                            <textarea type="text" rows="15"  type="text" name="cajatel" className="form-control" placeholder={this.state.area.descripcion} ref={this.cajaDescripcionRef} />
                        </div>
                        <div className="form-group">
                            <label   htmlFor="exampleInputPassword1">Grand area actual: {this.state.area.gran_area}</label>
                            <input   type="text" name="cajatel" className="form-control" placeholder={this.state.area.gran_area} ref={this.cajaGranAreaRef} />
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
