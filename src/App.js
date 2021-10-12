import React from 'react'
import Home from './pages/Inicio/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Error from './pages/notfound/error'
import SearchP from './pages/Inicio/SearchP'
import Index1 from './pages/Inicio/Index1'
import Login from './pages/Inicio/Login'
import ProyectosGrado from './pages/Biblioteca/ProyectosGrado'
import DetallesProyectoGrado from './pages/Biblioteca/DetallesProyectoGrado'
import ProyectosGradoFin from './pages/Biblioteca/ProyectosGradoFin'
import GruposI from './pages/GestionInstitucional/GruposInvestigacion/GruposInvestigacion'
import InsertarGruposI from './pages/GestionInstitucional/GruposInvestigacion/InsertarGrupoInvestigacion'
import ActualizarGruposI from './pages/GestionInstitucional/GruposInvestigacion/ActaulizarGrupoInvestigacion'
import EliminarGruposInvestigacion from './pages/GestionInstitucional/GruposInvestigacion/EliminarGrupoInvestigacion'
import Semilleros from './pages/GestionInstitucional/Semilleros/Semilleros'
import InsertarSemilleros from './pages/GestionInstitucional/Semilleros/InsertarSemillero'
import ActualizarSemillero from './pages/GestionInstitucional/Semilleros/ActualizarSemillero'
import EliminarSemillero from './pages/GestionInstitucional/Semilleros/EliminarSemillero'
import Facultades from './pages/GestionInstitucional/Facultades/Facultades'
import InsertarFacultad from './pages/GestionInstitucional/Facultades/InsertarFacultad'
import ActualizarFacultad from './pages/GestionInstitucional/Facultades/ActualizarFacultad'
import EliminarFacultad from './pages/GestionInstitucional/Facultades/EliminarFacultad'
import Programas from './pages/GestionInstitucional/Programas/Programas'
import InsertarPrograma from './pages/GestionInstitucional/Programas/InsertarPrograma'
import ActualizarPrograma from './pages/GestionInstitucional/Programas/ActualizarPrograma'
import EliminarPrograma from './pages/GestionInstitucional/Programas/EliminarPrograma'
import Materias from './pages/GestionInstitucional/Materias/Materias'
import InsertarMateria from './pages/GestionInstitucional/Materias/InsertarMateria'
import ActualizarMateria from './pages/GestionInstitucional/Materias/ActualizarMateria'
import EliminarMateria from './pages/GestionInstitucional/Materias/EliminarMateria'
import Clases from './pages/GestionInstitucional/Clases/Clases'
import InsertarClase from './pages/GestionInstitucional/Clases/InsertarClase'
import ActualizarClase from './pages/GestionInstitucional/Clases/ActualizarClase'
import EliminarClase from './pages/GestionInstitucional/Clases/EliminarClase'
import ConvocatoriasAbiertas from './pages/GestionInstitucional/Convocatorias/ConvocatoriasAbiertas'
import DetallesConvocatoria from './pages/GestionInstitucional/Convocatorias/DetallesConvocatoria'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
            
            <Route exact path="/" component={Home} />
            <Route exact path="/Home/Search" component={SearchP} />
            <Route exact path="/Home/Login/Dashboart" component={Index1} />
            <Route exact path="/Home/Login" component={Login} />
            <Route path="/ProyectosGrado" exact component={ProyectosGrado}/>
            <Route path="/ProyectosGradoFin" exact component={ProyectosGradoFin}/>
            <Route exact path="/DetallesProyecto/:id" render={props => {
                            var id = props.match.params.id;
                            return <DetallesProyectoGrado id={id} />
                        }} />

            <Route path="/GruposInvestigacion" exact component={GruposI}/>
            <Route path="/InsertarGruposInvestigacion" exact component={InsertarGruposI}/>           
            <Route exact path="/ActulizarGruposInvestigacion/:id" render={props => {
                            var id = props.match.params.id;
                            var nombre = props.match.params.nombre;
                            return <ActualizarGruposI id={id} nombre={nombre}/>
                        }} />
            <Route exact path="/EliminarGruposInvestigacion/:id" render={props => {
                            var id = props.match.params.id;
                            return <EliminarGruposInvestigacion id={id}/>
                        }} />
            <Route path="/Semilleros" exact component={Semilleros}/>
            <Route path="/InsertarSemillero" exact component={InsertarSemilleros}/>
            <Route exact path="/ActulizarSemillero/:id" render={props => {
                            var id = props.match.params.id;
                            return <ActualizarSemillero id={id}/>
                        }} />
            <Route exact path="/EliminarSemillero/:id" render={props => {
                            var id = props.match.params.id;
                            return <EliminarSemillero id={id}/>
                        }} />
            <Route path="/Facultades" exact component={Facultades}/>
            <Route path="/InsertarFacultad" exact component={InsertarFacultad}/>              
            <Route exact path="/ActulizarFacultad/:id" render={props => {
                            var id = props.match.params.id;
                            return <ActualizarFacultad id={id}/>
                        }} />
            <Route exact path="/EliminarFacultad/:id" render={props => {
                            var id = props.match.params.id;
                            return <EliminarFacultad id={id}/>
                        }} />
            <Route path="/Programas" exact component={Programas}/>
            <Route path="/InsertarPrograma" exact component={InsertarPrograma}/>               
            <Route exact path="/ActulizarPrograma/:id" render={props => {
                            var id = props.match.params.id;
                            return <ActualizarPrograma id={id}/>
                        }} />
            <Route exact path="/EliminarPrograma/:id" render={props => {
                            var id = props.match.params.id;
                            return <EliminarPrograma id={id}/>
                        }} />
            <Route path="/Materias" exact component={Materias}/>
            <Route path="/InsertarMateria" exact component={InsertarMateria}/>                 
            <Route exact path="/ActulizarMateria/:catalogo" render={props => {
                            var catalogo = props.match.params.catalogo;
                            return <ActualizarMateria catalogo={catalogo}/>
                        }} />              
            <Route exact path="/EliminarMateria/:catalogo" render={props => {
                            var catalogo = props.match.params.catalogo;
                            return <EliminarMateria catalogo={catalogo}/>
                        }} />
            <Route path="/Clases" exact component={Clases}/>
            <Route path="/InsertarClase" exact component={InsertarClase}/>                 
            <Route exact path="/ActulizarClase/:numero" render={props => {
                            var numero = props.match.params.numero;
                            return <ActualizarClase numero={numero}/>
                        }} />                
            <Route exact path="/EliminarClase/:numero" render={props => {
                            var numero = props.match.params.numero;
                            return <EliminarClase numero={numero}/>
                        }} />
            <Route path="/ConvocatoriasAbiertas" exact component={ConvocatoriasAbiertas}/>
            <Route exact path="/DetallesConvocatoriaAbierta/:id" render={props => {
                            var id = props.match.params.id;
                            return <DetallesConvocatoria id={id} />
                        }} />            
            <Route component ={() => (
          <Error/>)
        } />
      </Switch>
    </BrowserRouter>
    </div>
  )
}
