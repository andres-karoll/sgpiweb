import React from 'react'
import Tablagrado from '../estructuras/Tablagrado'

const Gradocompo = ({proyectos}) => {
    return (
        <div>
            {proyectos.map( p => (
                    <Tablagrado 
                    id = {p.id}
                    titulo = {p.titulo}
                    estado = {p.estado}
                    fecha_inicio = {p.fecha_inicio} 
                    descripcion = {p.descripcion}   
                    metodologia = {p.metodologia}
                    
                    />  
            )           
            )}      
        </div>
    )
}

export default Gradocompo