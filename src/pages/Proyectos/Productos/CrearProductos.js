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
    cajaProyectoRef = React.createRef();
    cajaFechaRef = React.createRef();

    state = { status: false}

    nuevoProducto = (e) => {
        e.preventDefault();
        var idpro = this.cajaIDRef.current.value;
        var tit = this.cajaTituloRef.current.value;
        var tip = this.cajaTipoRef.current.value;
        var url = this.cajaURLRef.current.value;
        var pro = this.cajaProyectoRef.current.value;
        var fec = this.cajaFechaRef.current.value;
        var producto = {
            id: idpro
            , titulo_producto: tit
            , tipo_producto: tip
            , url_repo: url
            , proyecto: pro
            , fecha: fec
        };
        var url = 'http://localhost:8080/productos/crearproducto';
        axios.post(url, producto).then(res => {
            this.setState({ status: true });
            if (res.data.respuesta==="el producto se creo") {
              alert("el producto se creó")
              //window.location.href ="/ProyectosAulaIntegrador"
          }else{
            alert("no se pudo crear el producto")
            //window.location.href ="/ProyectosAulaIntegrador"
          }
        });
    }

    //COSAS DEL ARCHIVOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
    
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
      selectFile = (event) => {
        this.setState({
            
          selectedFiles : event.target.files,
      });
      }
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
            return <Redirect to="/Proyectos" />
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
                    <h3 className="card-title"  >Crear Producto</h3>
                  </div>
                   
                    {/* /.card-header */}
                    {/* form start */}
                    <form onSubmit={this.nuevoProducto} style={{width: "50%", margin: "auto"}}>
                        <div className="card-body">
                        <div className="form-group">
                            <input type="hidden" name="cajanom" className="form-control"  placeholder="ID" ref={this.cajaIDRef} />
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1">Titulo del producto</label>
                            <input type="text" name="cajatel" className="form-control" placeholder="Titulo" ref={this.cajaTituloRef} required/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1">Tipo</label>
                            <input type="text" name="cajatel" className="form-control" ref={this.cajaTipoRef} required/>
                        </div>
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












                            
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1">URL del producto</label>
                            <input type="text" name="cajatel" value ={message}className="form-control" placeholder="URL" ref={this.cajaURLRef} required/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1">Fecha</label>
                            <input type="text" name="cajatel" className="form-control" value={
                                new Date().getFullYear()+"-"+('0' + new Date().getMonth()).slice(-2)+"-"+ ('0' + new Date().getDate()).slice(-2)} ref={this.cajaFechaRef} required/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1" style={{color: "red"}}>*</label>
                            <label htmlFor="exampleInputPassword1">Proyecto </label>
                            <input type="text" name="cajatel" className="form-control" value={this.props.id} placeholder="Proyecto" ref={this.cajaProyectoRef} readOnly/>
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
