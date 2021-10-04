import React, {useState, useEffect} from 'react'
import Gradocompo from '../../Templates/Gradocompo'
import Axios  from 'axios'


const Grado = () => {
    const [proyectos,  setProyecto] = useState([])
    useEffect(() => {
        Axios.get("http://localhost:8080/biblioteca/listarGrado")
        .then(response => {
            setProyecto(response.data)
        })
    })
    return (
   
            <Gradocompo proyectos={proyectos}/>

    )
}

export default Grado
