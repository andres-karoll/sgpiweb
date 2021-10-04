import React, {useState, useEffect} from 'react'
import Gradofincompo from '../../Templates/Gradofincompo'
import Axios  from 'axios'

const Gradofin = () => {
    const [proyectosfin,  setProyectofin] = useState([])
    useEffect(() => {
        Axios.get("http://localhost:8080/biblioteca/listarGradoTerminado")
        .then(response => {
            setProyectofin(response.data)
        })
    })
    return (
        <Gradofincompo proyectosfin={proyectosfin}/>
    )
}

export default Gradofin
