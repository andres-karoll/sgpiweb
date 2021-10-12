import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Aside from '../../components/Global/Aside';
import Header from '../../components/Global/Header';
export default class DetallesProyectoGrado extends Component {
    
    state = {
        proyecto: {}
        , status: false
    }

    mostrarProyecto = () => {
        var request = "/biblioteca/listarporid/" + this.props.id;
        var url = "http://localhost:8080" + request;
        axios.get(url).then(res => {
            this.setState({
                proyecto: res.data
                ,status: true
            });
        });
    }

    componentDidMount = () => {
        this.mostrarProyecto();
    }

    render() {
        return (
            <div>
            <Aside /> 
            <Header/>
                {this.state.status === true &&
                (
                    <React.Fragment>

<div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>Detalles del Proyecto</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="/ProyectosGrado">Trabajos de grado</a></li>
            <li className="breadcrumb-item active">Detalles del proyecto</li>
          </ol>
        </div>
      </div>
    </div>{/* /.container-fluid */}
  </section>
  {/* Main content */}
  <section className="content">
    {/* Default box */}
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">id: {this.state.proyecto.id}</h3>
        <div className="card-tools">
          <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
            <i className="fas fa-minus" />
          </button>
          <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
            <i className="fas fa-times" />
          </button>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-8 order-2 order-md-1">
            <div className="row">
              <div className="col-12 col-sm-4">
                <div className="info-box bg-light">
                  <div className="info-box-content">
                    <span className="info-box-text text-center text-muted">Fecha inicio</span>
                    <span className="info-box-number text-center text-muted mb-0">{this.state.proyecto.fecha_inicio}</span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-4">
                <div className="info-box bg-light">
                  <div className="info-box-content">
                    <span className="info-box-text text-center text-muted">Fecha fin</span>
                    <span className="info-box-number text-center text-muted mb-0">{this.state.proyecto.fecha_fin}</span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-4">
                <div className="info-box bg-light">
                  <div className="info-box-content">
                    <span className="info-box-text text-center text-muted">Estado</span>
                    <span className="info-box-number text-center text-muted mb-0">{this.state.proyecto.estado}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h4>Datos extras</h4>
                <div className="post">
                  <div className="user-block">
                    <img className="img-circle img-bordered-sm" src="../../dist/img/user1-128x128.jpg" alt="user image" />
                    <span className="username">
                      <a href="#">Jonathan Burke Jr.</a>
                    </span>
                    <span className="description">Shared publicly - 7:45 PM today</span>
                  </div>
                  {/* /.user-block */}
                  <p>
                    Lorem ipsum represents a long-held tradition for designers,
                    typographers and the like. Some people hate it and argue for
                    its demise, but others ignore.
                  </p>
                  <p>
                    <a href="#" className="link-black text-sm"><i className="fas fa-link mr-1" /> Demo File 1 v2</a>
                  </p>
                </div>
                <div className="post clearfix">
                  <div className="user-block">
                    <img className="img-circle img-bordered-sm" src="../../dist/img/user7-128x128.jpg" alt="User Image" />
                    <span className="username">
                      <a href="#">Sarah Ross</a>
                    </span>
                    <span className="description">Sent you a message - 3 days ago</span>
                  </div>
                  {/* /.user-block */}
                  <p>
                    Lorem ipsum represents a long-held tradition for designers,
                    typographers and the like. Some people hate it and argue for
                    its demise, but others ignore.
                  </p>
                  <p>
                    <a href="#" className="link-black text-sm"><i className="fas fa-link mr-1" /> Demo File 2</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4 order-1 order-md-2">
            <h3 className="text-primary"><i className="fas fa-graduation-cap" /> Titulo: {this.state.proyecto.titulo}</h3>
            <p className="text-muted"> {this.state.proyecto.descripcion}</p>
            <br />
            <div className="text-muted">
              <p className="text-sm">Justificación
                <b className="d-block">{this.state.proyecto.justificacion}</b>
              </p>
              <p className="text-sm">Retro alimentación 
                <b className="d-block">{this.state.proyecto.retroalimentacion_final}</b>
              </p>
              <p className="text-sm">Conclusiones
                <b className="d-block">{this.state.proyecto.conclusiones}</b>
              </p>
             
            </div>
            <h5 className="mt-5 text-muted">Archivos del proyecto</h5>
            <ul className="list-unstyled">
              <li>
                <a href className="btn-link text-secondary"><i className="far fa-fw fa-file-word" /> Functional-requirements.docx</a>
              </li>
              <li>
                <a href className="btn-link text-secondary"><i className="far fa-fw fa-file-pdf" /> UAT.pdf</a>
              </li>
              <li>
                <a href className="btn-link text-secondary"><i className="far fa-fw fa-envelope" /> Email-from-flatbal.mln</a>
              </li>
              <li>
                <a href className="btn-link text-secondary"><i className="far fa-fw fa-image " /> Logo.png</a>
              </li>
              <li>
                <a href className="btn-link text-secondary"><i className="far fa-fw fa-file-word" /> Contract-10_12_2014.docx</a>
              </li>
            </ul>

          </div>
        </div>
      </div>
      {/* /.card-body */}
    </div>
    {/* /.card */}
  </section>
  {/* /.content */}
</div>
                    </React.Fragment>
                )}
            </div>
        )
    }
}
