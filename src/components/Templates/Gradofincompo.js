import React from 'react'
import Tablagradofin from '../estructuras/Tablagradofin'

const Gradofincompo = ({proyectosfin}) => {
    return (
        <div>
            {proyectosfin.map( p => (
                    <Tablagradofin 
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
export default Gradofincompo
