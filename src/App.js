import React from 'react'
import Home from './pages/Inicio/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Error from './pages/notfound/error'
import SearchP from './pages/Inicio/SearchP'
import Index1 from './pages/Inicio/Index1'
import Login from './pages/Inicio/Login'
import Registro from './pages/Inicio/Registro'
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
import AsignarLineaGrupoI from './pages/GestionInstitucional/GruposInvestigacion/AsignarLineaGrupoI'
import AsignarProgramaGrupoI from './pages/GestionInstitucional/GruposInvestigacion/AsignarProgramaGrupoI'
import LineasGrupoI from './pages/GestionInstitucional/GruposInvestigacion/LineasGrupoI'
import ProgramasGrupoI from './pages/GestionInstitucional/GruposInvestigacion/ProgramasGrupoI'
import DesAsignarProgramaGrupoI from './pages/GestionInstitucional/GruposInvestigacion/DesAsignarProgramaGrupo'
import ProyectosSemillero from './pages/GestionInstitucional/Semilleros/ProyectosSemillero'
import UsuariosSemillero from './pages/GestionInstitucional/Semilleros/UsuariosSemillero'
import ProgramaSemillero from './pages/GestionInstitucional/Semilleros/ProgramaSemillero'
import AsignarProgramaSemillero from './pages/GestionInstitucional/Semilleros/AsignarProgramaSemillero'
import DesAsignarProgramaSemillero from './pages/GestionInstitucional/Semilleros/DesAsignarProgramaSemillero'
import SemillerosGrupoI from './pages/GestionInstitucional/GruposInvestigacion/SemillerosGrupoI'
import ProgramasFacultad from './pages/GestionInstitucional/Facultades/ProgramasFacultad'
import GruposPrograma from './pages/GestionInstitucional/Programas/GruposPrograma'
import SemillerosPrograma from './pages/GestionInstitucional/Programas/SemillerosPrograma'
import MateriaPrograma from './pages/GestionInstitucional/Programas/MateriasPrograma'
import ClasesMateria from './pages/GestionInstitucional/Materias/ClasesMateria'
import ProyectosClase from './pages/GestionInstitucional/Clases/ProyectosClase'
import Lineas from './pages/GestionInstitucional/LineasInvestigacion/Lineas'
import Areas from './pages/GestionInstitucional/Areas/Areas'
import Eventos from './pages/GestionInstitucional/Eventos/Eventos'
import InsertarLinea from './pages/GestionInstitucional/LineasInvestigacion/InsertarLinea'
import ActualizarLinea from './pages/GestionInstitucional/LineasInvestigacion/ActualizarLinea'
import EliminarLinea from './pages/GestionInstitucional/LineasInvestigacion/EliminarLinea'
import SemillerosLinea from './pages/GestionInstitucional/LineasInvestigacion/SemillerosLinea'
import InsertarArea from './pages/GestionInstitucional/Areas/InsertarArea'
import ActualizarArea from './pages/GestionInstitucional/Areas/ActualizarArea'
import EliminarArea from './pages/GestionInstitucional/Areas/EliminarArea'
import ProyectosArea from './pages/GestionInstitucional/Areas/ProyectosArea'
import InsertarEvento from './pages/GestionInstitucional/Eventos/InsertarEvento'
import ActualizarEvento from './pages/GestionInstitucional/Eventos/ActualizarEvento'
import EliminarEvento from './pages/GestionInstitucional/Eventos/EliminarEvento'
import Proyectos from './pages/Proyectos/Proyectos'
import PresupuestoProyecto from './pages/Proyectos/PresupuestoProyecto'
import AsignarPresupuesto from './pages/Proyectos/AsignarPresupuesto'
import EliminarPresupuesto from './pages/Proyectos/EliminarPresupuesto'
import ActualizarPresupuesto from './pages/Proyectos/ActualizarPresupuesto'
import ComprasPresupuesto from './pages/Proyectos/ComprasPresupuesto'
import TusProyectos from './pages/GestionProyectosAI/Proyectos/TusProyectos'
import ActualizarProyecto from "./pages/GestionProyectosAI/Proyectos/ActualizarProyecto"
import CrearProyecto from "./pages/GestionProyectosAI/Proyectos/CrearProyecto"
import CrearProyectoFacultad from './pages/GestionProyectosAI/Proyectos/CrearProyectoFacultad'
import CrearProyectoPrograma from './pages/GestionProyectosAI/Proyectos/CrearProyectoPrograma'
import CrearProyectoMateria from './pages/GestionProyectosAI/Proyectos/CrearProyectoMateria'
import EliminarProyecto from './pages/GestionProyectosAI/Proyectos/EliminarProyecto'
import AgregarParticipante from './pages/GestionProyectosAI/Proyectos/AgregarParticipante'
import DetallesProyecto from './pages/GestionProyectosAI/Proyectos/DetallesProyecto'
import DesAsignarLineaGrupoI from './pages/GestionInstitucional/GruposInvestigacion/DesAsignarProgramaGrupo'
import ParticipantesProyecto from './pages/GestionProyectosAI/Proyectos/ParticipantesProyecto'
import Perfil from './pages/GestionProyectosAI/Proyectos/Perfil'
import EliminarParticipante from './pages/GestionProyectosAI/Proyectos/EliminarParticipante'
import ProyectoSemillero from './pages/GestionProyectosInvestigacion/ProyectoSemillero'
import UnirseSemillero from './pages/GestionProyectosInvestigacion/UnirseSemillero'
import CrearProyectoSemillero from './pages/GestionProyectosInvestigacion/CrearProyectoSemillero'

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Home/Search" component={SearchP} />
                    <Route exact path="/Home/Login" component={Login} />
                    <Route exact path="/Home/Registro/" component={Registro} />
                    <Route exact path="/Home/Login/Dashboart/:id" render={props => {
                        var id = props.match.params.id;
                        return <Index1 id={id} />
                    }} />
                    <Route path="/ProyectosGrado" exact component={ProyectosGrado} />
                    <Route path="/ProyectosGradoFin" exact component={ProyectosGradoFin} />
                    <Route exact path="/DetallesProyecto/:id" render={props => {
                        var id = props.match.params.id;
                        return <DetallesProyectoGrado id={id} />
                    }} />
                    <Route path="/GruposInvestigacion" exact component={GruposI} />
                    <Route path="/InsertarGruposInvestigacion" exact component={InsertarGruposI} />
                    <Route exact path="/ActulizarGruposInvestigacion/:id" render={props => {
                        var id = props.match.params.id;
                        var nombre = props.match.params.nombre;
                        return <ActualizarGruposI id={id} nombre={nombre} />
                    }} />
                    <Route exact path="/EliminarGruposInvestigacion/:id" render={props => {
                        var id = props.match.params.id;
                        return <EliminarGruposInvestigacion id={id} />
                    }} />
                    <Route exact path="/AsignarLineaGrupoI/:id" render={props => {
                        var id = props.match.params.id;
                        return <AsignarLineaGrupoI id={id} />
                    }} />
                    <Route exact path="/DesAsignarLineaGrupoI/:id" render={props => {
                        var id = props.match.params.id;
                        return <DesAsignarLineaGrupoI id={id} />
                    }} />
                    <Route exact path="/AsignarProgramaGrupoI/:id" render={props => {
                        var id = props.match.params.id;
                        return <AsignarProgramaGrupoI id={id} />
                    }} />
                    <Route exact path="/DesAsignarProgramaGrupoI/:id" render={props => {
                        var id = props.match.params.id;
                        return <DesAsignarProgramaGrupoI id={id} />
                    }} />
                    <Route exact path="/LineasGrupoI/:id" render={props => {
                        var id = props.match.params.id;
                        return <LineasGrupoI id={id} />
                    }} />
                    <Route exact path="/ProgramasGrupoI/:id" render={props => {
                        var id = props.match.params.id;
                        return <ProgramasGrupoI id={id} />
                    }} />
                    <Route exact path="/SemilleroGrupoI/:id" render={props => {
                        var id = props.match.params.id;
                        return <SemillerosGrupoI id={id} />
                    }} />
                    <Route path="/Semilleros" exact component={Semilleros} />
                    <Route path="/InsertarSemillero" exact component={InsertarSemilleros} />
                    <Route exact path="/ActulizarSemillero/:id" render={props => {
                        var id = props.match.params.id;
                        return <ActualizarSemillero id={id} />
                    }} />
                    <Route exact path="/EliminarSemillero/:id" render={props => {
                        var id = props.match.params.id;
                        return <EliminarSemillero id={id} />
                    }} />
                    <Route exact path="/UsuariosSemillero/:id" render={props => {
                        var id = props.match.params.id;
                        return <UsuariosSemillero id={id} />
                    }} />
                    <Route exact path="/ProgramaSemillero/:id" render={props => {
                        var id = props.match.params.id;
                        return <ProgramaSemillero id={id} />
                    }} />
                    <Route exact path="/AsignarProgramaSemillero/:id" render={props => {
                        var id = props.match.params.id;
                        return <AsignarProgramaSemillero id={id} />
                    }} />
                    <Route exact path="/DesAsignarProgramaSemillero/:id" render={props => {
                        var id = props.match.params.id;
                        return <DesAsignarProgramaSemillero id={id} />
                    }} />
                    <Route path="/Facultades" exact component={Facultades} />
                    <Route path="/InsertarFacultad" exact component={InsertarFacultad} />
                    <Route exact path="/ActulizarFacultad/:id" render={props => {
                        var id = props.match.params.id;
                        return <ActualizarFacultad id={id} />
                    }} />
                    <Route exact path="/EliminarFacultad/:id" render={props => {
                        var id = props.match.params.id;
                        return <EliminarFacultad id={id} />
                    }} />
                    <Route exact path="/ProgramasFacultad/:id" render={props => {
                        var id = props.match.params.id;
                        return <ProgramasFacultad id={id} />
                    }} />
                    <Route path="/Programas" exact component={Programas} />
                    <Route path="/InsertarPrograma" exact component={InsertarPrograma} />

                    <Route exact path="/ActulizarPrograma/:id" render={props => {
                        var id = props.match.params.id;
                        return <ActualizarPrograma id={id} />
                    }} />
                    <Route exact path="/EliminarPrograma/:id" render={props => {
                        var id = props.match.params.id;
                        return <EliminarPrograma id={id} />
                    }} />
                    <Route exact path="/GruposPrograma/:id" render={props => {
                        var id = props.match.params.id;
                        return <GruposPrograma id={id} />
                    }} />
                    <Route exact path="/SemillerosPrograma/:id" render={props => {
                        var id = props.match.params.id;
                        return <SemillerosPrograma id={id} />
                    }} />
                    <Route exact path="/MateriasPrograma/:id" render={props => {
                        var id = props.match.params.id;
                        return <MateriaPrograma id={id} />
                    }} />
                    <Route path="/Materias" exact component={Materias} />
                    <Route path="/InsertarMateria" exact component={InsertarMateria} />
                    <Route exact path="/ActulizarMateria/:catalogo" render={props => {
                        var catalogo = props.match.params.catalogo;
                        return <ActualizarMateria catalogo={catalogo} />
                    }} />
                    <Route exact path="/EliminarMateria/:catalogo" render={props => {
                        var catalogo = props.match.params.catalogo;
                        return <EliminarMateria catalogo={catalogo} />
                    }} />
                    <Route exact path="/ClasesMateria/:id" render={props => {
                        var id = props.match.params.id;
                        return <ClasesMateria id={id} />
                    }} />
                    <Route exact path="/ProyectosClase/:id" render={props => {
                        var id = props.match.params.id;
                        return <ProyectosClase id={id} />
                    }} />
                    <Route path="/Clases" exact component={Clases} />
                    <Route path="/InsertarClase" exact component={InsertarClase} />
                    <Route exact path="/ActulizarClase/:numero" render={props => {
                        var numero = props.match.params.numero;
                        var nombre = props.match.params.nombre;
                        return <ActualizarClase numero={numero} nombre={nombre} />
                    }} />
                    <Route exact path="/EliminarClase/:numero" render={props => {
                        var numero = props.match.params.numero;
                        return <EliminarClase numero={numero} />
                    }} />
                    <Route path="/ConvocatoriasAbiertas" exact component={ConvocatoriasAbiertas} />
                    <Route exact path="/DetallesConvocatoriaAbierta/:id" render={props => {
                        var id = props.match.params.id;
                        return <DetallesConvocatoria id={id} />
                    }} />
                    <Route path="/Lineas" exact component={Lineas} />
                    <Route path="/InsertarLinea" exact component={InsertarLinea} />
                    <Route exact path="/ActualizarLinea/:nombre" render={props => {
                        var nombre = props.match.params.nombre;
                        return <ActualizarLinea nombre={nombre} />
                    }} />
                    <Route exact path="/EliminarLinea/:nombre" render={props => {
                        var nombre = props.match.params.nombre;
                        return <EliminarLinea nombre={nombre} />
                    }} />
                    <Route exact path="/SemillerosLinea/:nombre" render={props => {
                        var nombre = props.match.params.nombre;
                        return <SemillerosLinea nombre={nombre} />
                    }} />
                    <Route path="/AreasConocimiento" exact component={Areas} />
                    <Route path="/InsertarArea" exact component={InsertarArea} />
                    <Route exact path="/ActualizarArea/:id" render={props => {
                        var id = props.match.params.id;
                        return <ActualizarArea id={id} />
                    }} />
                    <Route exact path="/EliminarArea/:id" render={props => {
                        var id = props.match.params.id;
                        return <EliminarArea id={id} />
                    }} />
                    <Route exact path="/ProyectosArea/:id" render={props => {
                        var id = props.match.params.id;
                        return <ProyectosArea id={id} />
                    }} />
                    <Route path="/Eventos" exact component={Eventos} />
                    <Route path="/InsertarEvento" exact component={InsertarEvento} />
                    <Route exact path="/ActualizarEvento/:id" render={props => {
                        var id = props.match.params.id;
                        return <ActualizarEvento id={id} />
                    }} />
                    <Route exact path="/EliminarEvento/:id" render={props => {
                        var id = props.match.params.id;
                        return <EliminarEvento id={id} />
                    }} />
                    <Route path="/Proyectos" exact component={Proyectos} />
                    <Route exact path="/PresupuestoProyecto/:id" render={props => {
                        var id = props.match.params.id;
                        return <PresupuestoProyecto id={id} />
                    }} />
                    <Route exact path="/AsignarPersupuesto/:id" render={props => {
                        var id = props.match.params.id;
                        return <AsignarPresupuesto id={id} />
                    }} />
                    <Route exact path="/EliminarPresupuesto/:id" render={props => {
                        var id = props.match.params.id;
                        return <EliminarPresupuesto id={id} />
                    }} />
                    <Route exact path="/ActualizarPresupuesto/:id" render={props => {
                        var id = props.match.params.id;
                        return <ActualizarPresupuesto id={id} />
                    }} />
                    <Route exact path="/ComprasPresupuesto/:id" render={props => {
                        var id = props.match.params.id;
                        return <ComprasPresupuesto id={id} />
                    }} />
                    <Route path="/ProyectosAulaIntegrador" exact component={TusProyectos} />
                    <Route path="/CrearProyectoFacultad" exact component={CrearProyectoFacultad} />

                    <Route exact path="/ActualizarProyecto/:id" render={props => {
                        var id = props.match.params.id;
                        return <ActualizarProyecto id={id} />
                    }} />
                    <Route exact path="/CrearProyectoPrograma/:id" render={props => {
                        var id = props.match.params.id;
                        return <CrearProyectoPrograma id={id} />
                    }} />
                    <Route exact path="/CrearProyectoMateria/:id" render={props => {
                        var id = props.match.params.id;
                        return <CrearProyectoMateria id={id} />
                    }} />
                    <Route exact path="/CrearProyecto/:id" render={props => {
                        var id = props.match.params.id;
                        return <CrearProyecto id={id} />
                    }} />
                    <Route exact path="/EliminarProyecto/:id" render={props => {
                        var id = props.match.params.id;
                        return <EliminarProyecto id={id} />
                    }} />
                    <Route exact path="/AgregarParticipante/:id" render={props => {
                        var id = props.match.params.id;
                        return <AgregarParticipante id={id} />
                    }} />
                    <Route exact path="/DetallesProyectoAI/:id" render={props => {
                        var id = props.match.params.id;
                        return <DetallesProyecto id={id} />
                    }} />
                    <Route exact path="/ParticipantesProyecto/:id" render={props => {
                        var id = props.match.params.id;
                        return <ParticipantesProyecto id={id} />
                    }} />
                    <Route exact path="/Perfil/:id" render={props => {
                        var id = props.match.params.id;
                        return <Perfil id={id} />
                    }} />
                    <Route exact path="/EliminarParticipante/:id" render={props => {
                        var id = props.match.params.id;
                        return <EliminarParticipante id={id} />
                    }} />
                    <Route path="/UnirseSemillero" exact component={UnirseSemillero} />
                    <Route path="/ProyectoSemillero" exact component={ProyectoSemillero} />
                    <Route path="/CrearProyectoSemillero" exact component={CrearProyectoSemillero} />
                    
                    <Route component={() => (
                        <Error />)
                    } />
                </Switch>
            </BrowserRouter>
        </div>
    )
}
