import React, {useState} from "react"
import {Spinner} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Loading from "./Loading";
function LoadingPrueba() {
    const [loading,setLoading] = useState(false);

    const cambiarEstado=()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
            window.location.href ="/";
        },2000);
    }

if(loading){
    return(
        <Loading/>
    )
}

    return (
        <div>
            <button className="btn btn-primary" onClick={()=>cambiarEstado()} > cargar </button>
        </div>
    );
}
export default LoadingPrueba;
