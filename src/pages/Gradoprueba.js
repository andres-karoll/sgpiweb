import React, { Component } from 'react';
import axios from 'axios';

import { NavLink } from 'react-router-dom';
import Aside from '../components/Global/Aside';



export default class Peliculas extends Component {

  state = {
    peliculas: []
    , status: false
  }

  cargarPeliculas = () => {
    var url = "http://localhost:8080";
    var request = "/gestionproyectosaulaintegrador/todosLosproyectos";
    axios.get(url + request).then(res => {
      this.setState({
        peliculas: res.data
        , status: true
      });
    });
  }

  componentDidMount = () => {
    this.cargarPeliculas();
  }

  render() {
    return (

    <div>
       <header>
       <Aside/>
      
    </header>
   


      <div className="content-wrapper">
       
      {this.state.status === true &&
        (
          this.state.peliculas.map((peli, i) => {
            return (
              <section className="content">
                {/* Default box */}
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Proyectos</h3>
                    <div className="card-tools">
                      <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                        <i className="fas fa-minus" />
                      </button>
                      <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <table className="table table-striped projects">
                      <thead>
                        <tr>
                          <th style={{ width: '1%' }}>
                            #
                          </th>
                          <th style={{ width: '20%' }}>
                            Project Name
                          </th>
                          <th style={{ width: '30%' }}>
                            Team Members
                          </th>
                          <th>
                            Project Progress
                          </th>
                          <th style={{ width: '8%' }} className="text-center">
                            Status
                          </th>
                          <th style={{ width: '20%' }}>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            #{peli.id}
                          </td>
                          <td>
                            <a>
                            {peli.titulo}
                            </a>
                            <br />
                            <small>
                              Created {peli.titulo}
                            </small>
                          </td>
                          <td>
                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <img alt="Avatar" className="table-avatar" src="../../dist/img/avatar.png" />
                              </li>
                              <li className="list-inline-item">
                                <img alt="Avatar" className="table-avatar" src="../../dist/img/avatar2.png" />
                              </li>
                              <li className="list-inline-item">
                                <img alt="Avatar" className="table-avatar" src="../../dist/img/avatar3.png" />
                              </li>
                              <li className="list-inline-item">
                                <img alt="Avatar" className="table-avatar" src="../../dist/img/avatar4.png" />
                              </li>
                            </ul>
                          </td>
                          <td className="project_progress">
                            <div className="progress progress-sm">
                              <div className="progress-bar bg-green" role="progressbar" aria-valuenow={57} aria-valuemin={0} aria-valuemax={100} style={{ width: '57%' }}>
                              </div>
                            </div>
                            <small>
                              57% Complete
                            </small>
                          </td>
                          <td className="project-state">
                            <span className="badge badge-success">Success</span>
                          </td>
                          <td className="project-actions text-right">
                          <NavLink to={"/DetallesPrueba/" + peli.id} className="btn btn-primary">Detalles</NavLink>
                          <NavLink className="btn btn-info" to={"/DetallesPrueba/" + peli.id} >Modificar</NavLink>
                          <NavLink className="btn btn-danger" to={"/DetallesPrueba/" + peli.id} >Eliminar</NavLink>
                            
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </section>
              
             
           

            );
        })
      )}


</div>
</div>
)
}
}