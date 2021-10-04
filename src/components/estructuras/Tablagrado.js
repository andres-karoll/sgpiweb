import React from 'react'
import {Link} from 'react-router-dom'


const Tablagrado = ({id,titulo, estado, fecha_inicio, descripcion, metodologia}) => {

    return (
        
        <div className="content-wrapper">
          
        {/* Main content */}
        <section className="content">
          {/* Default box */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Proyecto de Grado: {titulo}</h3>
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
                    <th style={{width: '1%'}}>
                      #
                    </th>
                    <th style={{width: '20%'}}>
                      Nombre del proyecto
                    </th>
                    <th style={{width: '30%'}}>
                      Fecha de inicio
                    </th>
                    <th>
                      Metodologia
                    </th>
                    <th style={{width: '8%'}} className="text-center">
                      Estado
                    </th>
                    <th style={{width: '20%'}}>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td id = 'idProyecto'>
                      {id}
                    </td>
                    <td>
                      <a>
                        {titulo}
                      </a>
                      <br />
                      <small>
                        descripcion: {descripcion}
                      </small>
                    </td>
                    <td>
                      <p>{fecha_inicio}</p>
                    </td>
                    <td className="project_progress">
                      <div className="progress progress-sm">
                        <div className="progress-bar bg-green" role="progressbar" aria-valuenow={57} aria-valuemin={0} aria-valuemax={100} style={{width: '57%'}}>
                        </div>
                      </div>
                      <small>
                        {metodologia}
                      </small>
                    </td>
                    <td className="project-state">
                      <span className="badge badge-success">{estado}</span>
                    </td>
                    <td className="project-actions text-right">
                    <Link to={"/grado/detallesgrado/"+id} >
                      <a className="btn btn-primary btn-sm" href="#">
                        <i className="fas fa-folder">
                        </i>
                        Detalles
                      </a>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </section>
        {/* /.content */}
      </div>
    )
}


export default Tablagrado
