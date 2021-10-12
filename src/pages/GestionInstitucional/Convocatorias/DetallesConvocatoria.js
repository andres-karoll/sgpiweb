import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Aside from '../../../components/Global/Aside';
import Header from '../../../components/Global/Header';
export default class DetallesConvocatoria extends Component {
    
    state = {
        convocatoria: {}
        , status: false
    }

    mostrarConvocatoria = () => {
        var request = "/gestioninstitucional/convocatoriaporid/" + this.props.id;
        var url = "http://localhost:8080" + request;
        axios.get(url).then(res => {
            this.setState({
                convocatoria: res.data
                ,status: true
            });
        });
    }

    componentDidMount = () => {
        this.mostrarConvocatoria();
    }

    render() {
        return (
            <div>
            <Aside/>
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
          <h1>Detalles de la Convocatoria</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="/ConvocatoriasAbiertas">Convocatorias Abiertas</a></li>
            <li className="breadcrumb-item active">Detalles de la convocatoria</li>
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
        <h3 className="card-title">id: {this.props.id}</h3>
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
                    <span className="info-box-number text-center text-muted mb-0">{this.state.convocatoria.fecha_inicio}</span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-4">
                <div className="info-box bg-light">
                  <div className="info-box-content">
                    <span className="info-box-text text-center text-muted">Fecha fin</span>
                    <span className="info-box-number text-center text-muted mb-0">{this.state.convocatoria.fecha_fin}</span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-4">
                <div className="info-box bg-light">
                  <div className="info-box-content">
                    <span className="info-box-text text-center text-muted">Estado</span>
                    <span className="info-box-number text-center text-muted mb-0">{this.state.convocatoria.estado}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h4>Datos extras</h4>
                <div className="post">
                  <div className="user-block">
                    <span className="username">
                      <a href="#">Contexto</a>
                    </span>
                    <span className="description">Contexto de la convocatoria</span>
                  </div>
                  {/* /.user-block */}
                  <h3>
                    {this.state.convocatoria.contexto}
                  </h3>
                </div>
                <div className="post clearfix">
                  <div className="user-block">
                    <span className="username">
                      <a href="#">Numero de productos</a>
                    </span>
                    <span className="description">Numero de productos requeridos por la convocatoria</span>
                  </div>
                  {/* /.user-block */}
                  <h1>
                    {this.state.convocatoria.numero_productos}
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4 order-1 order-md-2">
            <h3 className="text-primary"><i className="fas fa-pencil-alt" /> Nombre de convocatoria: {this.state.convocatoria.nombre_convocatoria}</h3>
            <br />
            <div className="text-muted">
              <p className="text-sm">Tipo
                <b className="d-block">{this.state.convocatoria.tipo}</b>
              </p>
              <p className="text-sm">Entidad
                <b className="d-block">{this.state.convocatoria.entidad}</b>
              </p>
             
            </div>

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
