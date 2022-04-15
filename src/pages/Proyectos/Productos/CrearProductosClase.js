import React, { Component, useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
import UploadService from '../../../services/upload-files.service';
import UploadFiles from '../../../components/Upload-files.component';
import swal from 'sweetalert';



export default class CrearProductosClase extends Component {
    
    cajaIDRef = React.createRef();
    cajaTituloRef = React.createRef();
    cajaTipoRef = React.createRef();
    cajaURLRef = React.createRef();
    cajaProyectoRef = React.createRef();
    cajaFechaRef = React.createRef();

    state = { status: false}
//funcion para crear un producto enviando las variables del JSON
    nuevoProducto = (e) => {
        e.preventDefault();

        var tit = this.cajaTituloRef.current.value;
        var tip = this.cajaTipoRef.current.value;
        var url = this.cajaURLRef.current.value;
        var pro = this.cajaProyectoRef.current.value;
        var fec = this.cajaFechaRef.current.value;
        var producto = {
            titulo_producto: tit
            , tipo_producto: tip
            , url_repo: url
            , proyecto: pro
            , fecha: fec
        };
        var url = 'http://localhost:8080/productos/crearproducto';
        axios.post(url, producto).then(res => {
            this.setState({ status: true });
            if (res.data.respuesta==="el producto se creo") {
              
              swal({
                title: "el producto se creo con Exito ",
                icon:"success"
              });

              //window.location.href ="/ProyectosAulaIntegrador"
          }else{
            alert("no se pudo crear el producto")
            //window.location.href ="/ProyectosAulaIntegrador"
          }
        });
    }

    //COSAS DEL ARCHIVO
    //definimos el constructor
    constructor(props) {
        super(props);
    
        this.state = {
            selectedFiles: undefined,
            currentFile: undefined,
            progress: 0,
            message: "",
      
            fileInfos: [],
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
        UploadService.getFiles().then((response) => {
          this.setState({
            fileInfos: response.data,
          });
        });
      }
      render = () => {
        const {
            selectedFiles,
            currentFile,
            progress,
            message,
            fileInfos,
          } = this.state;
        if(this.state.status === true){
          window.history.back();
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
                    <h3 className="card-title"  >Crear Producto de Aula</h3>
                  </div>
                   
                    {/* /.card-header */}
                    {/* form start */}
                    <form onSubmit={this.nuevoProducto} style={{width: "50%", margin: "auto"}}>
                        <div className="card-body">
                        
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1">Titulo del producto</label>
                            <input type="text" name="cajatel" className="form-control" placeholder="Titulo" ref={this.cajaTituloRef} required/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1">Seleccione el tipo de producto</label>
                            <select className="form-control select2" style={{width: '100%'}} ref={this.cajaTipoRef}  >
                      
                        <option>Entregable</option>
                        <option>Anexo</option>

                        </select>
                        </div>
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1">Seleccione su archivo</label>
                            <label htmlFor="exampleInputPassword1" style={{color: "blue"}}>Tenga en cuenta que puede subir archivos con extensión: txt, doc, docx, jpg, png, xlsx, zip</label>
                        <div className="form-group">








                        <label className="btn btn-default">
          <input type="file" accept="application/pdf" onChange={this.selectFile} />
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
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1">URL del producto</label>
                            <input type="text" name="cajatel" value ={message}className="form-control" placeholder="URL" ref={this.cajaURLRef} required/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1">Fecha</label>
                            <input type="date" id="start" name="trip-start"
       min="2000-01-01" max="2100-12-31" ref={this.cajaFechaRef} required></input>
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