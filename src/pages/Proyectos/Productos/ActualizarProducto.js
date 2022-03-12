import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
import UploadService from '../../../services/upload-files.service';
import UploadFiles from '../../../components/Upload-files.component';



export default class CrearProducto extends Component {
    
    cajaIDRef = React.createRef();
    cajaTituloRef = React.createRef();
    cajaTipoRef = React.createRef();
    cajaURLRef = React.createRef();
    cajaFechaRef = React.createRef();

    state = { status: false}
//funcion para obtener los datos ACTUALES DEL PRODUCTO
    Cargar = () => {
      var request = "/productos/productoid/" +this.props.id;
      var url = "http://localhost:8080" + request;
       axios.get(url).then(res => {
        this.setState({
          producto: res.data
          , status: true
        })
      });
    }




    //PROGRAMA DEL ARCHIVO 
    //definimos el constructor
    constructor(props) {
        super(props);
    
        this.state = {
            selectedFiles: undefined,
            currentFile: undefined,
            progress: 0,
            message: "",
      
            fileInfos: [], producto:{}
          };
      }
      //definimos el metodo que nos ayudara a obtener los archivos deleccionados del input
      selectFile = (event) => {
        this.setState({
            
          selectedFiles : event.target.files,
      });
      }
      //usamo selectedFiles para acceder al archivo actual para luego llamar al metodo currentFile con la debolucion de la respuesta
      upload = () => {
        let currentFile = this.state.selectedFiles[0];
    
        this.setState({
          progress: 0,
          currentFile: currentFile,
        });
    
        UploadService.upload(currentFile, (event) => {
          this.setState({
            progress: Math.round((100 * event.loaded) / event.total),
          });
        })
          .then((response) => {
            this.setState({
              message: response.data.message,
            });
            return UploadService.getFiles();
          })
          .then((files) => {
            this.setState({
              fileInfos: files.data,
            });
          })
          .catch(() => {
            this.setState({
              progress: 0,
              message: "Could not upload the file!",
              currentFile: undefined,
            });
          });
    
        this.setState({
          selectedFiles: undefined,
        });
      }
//llamamos a UploadService.getFiles() para obtmer la informacion de los archivos y asignamos el resultado a fileInfos
      componentDidMount = () => {
        this.Cargar();
        UploadService.getFiles().then((response) => {
          this.setState({
            fileInfos: response.data,
          });
        });
        
      }
      //funcion para actualizar el producto
      actualizarProducto = (e) => {
      e.preventDefault();
      var idpro = this.cajaIDRef.current.value;
      var tit = this.cajaTituloRef.current.value;
      var tip = this.cajaTipoRef.current.value;
      var url = this.cajaURLRef.current.value;
      var fec = this.cajaFechaRef.current.value;
      var producto = {
          id: idpro
          , titulo_producto: tit
          , tipo_producto: tip
          , url_repo: url
          , fecha: fec
      };
      var url = 'http://localhost:8080/productos/modificarproducto';
      axios.post(url, producto).then(res => {
          this.setState({ status: true });
          if (res.data.respuesta==="se actualizo el producto") {
            alert("el producto se actualizó")
            window.location.href ="/ProductosProyecto/" + this.state.producto.proyecto
        }else{
          alert("no se pudo actualizar el producto")
          window.location.href ="/ProductosProyecto/" + this.state.producto.proyecto
        }
      });
  }
      render = () => {
        const {
            selectedFiles,
            currentFile,
            progress,
            message,
            fileInfos, producto
          } = this.state;
        if(this.state.status === true){
            //return <Redirect to="/Proyectos" />
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
                    <h3 className="card-title"  >Actualizar Producto</h3>
                  </div>
                   
                    {/* /.card-header */}
                    {/* form start */}
                    <form onSubmit={this.actualizarProducto} style={{width: "50%", margin: "auto"}}>
                        <div className="card-body">
                        <div className="form-group">
                            <input value={this.props.id} type="hidden" name="cajanom" className="form-control"  placeholder="ID" ref={this.cajaIDRef} />
                        </div>
                        <div className="form-group">
                       
                            <label htmlFor="exampleInputPassword1">Titulo del producto actual: {this.state.producto.titulo_producto}</label>
                            <input type="text" name="cajatel" className="form-control" placeholder={this.state.producto.titulo_producto} ref={this.cajaTituloRef} />
                        </div>
                        <div className="form-group">
                       
                            <label htmlFor="exampleInputPassword1">Tipo de producto actual: {this.state.producto.tipo_producto}</label>
                            <input type="text" name="cajatel" className="form-control" placeholder={this.state.producto.tipo_producto} ref={this.cajaTipoRef} />
                        </div>
                        <div className="form-group">








                        <label className="btn btn-default">
          <input type="file" onChange={this.selectFile} />
        </label>

        <button className="btn btn-success"
          disabled={!selectedFiles}
          onClick={this.upload}
        >
          Upload
        </button>

        <div className="alert alert-light" role="alert">
          {message}
        </div>
 {/*Asignamos la URL del archivo usando el mensaje que devuelve la funcion de subida de archivo */}
                            <label htmlFor="exampleInputPassword1">URL del producto actual: {this.state.producto.url_repo} </label>
                            <input type="text" name="cajatel" value ={message}className="form-control" placeholder={this.state.producto.url_repo} ref={this.cajaURLRef} />
                        </div>
                        <div className="form-group">
                      
                            <label htmlFor="exampleInputPassword1">Fecha actual: {this.state.producto.fecha}</label>
                            <input type="date" id="start" name="trip-start"
       min="2000-01-01" max="2100-12-31" ref={this.cajaFechaRef} ></input>
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
