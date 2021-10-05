import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SearchP from './pages/SearchP'
import Index1 from './pages/Index1'
import Login from './pages/Login'
import Gradoprueba from './pages/Gradoprueba'
import DetallesPrueba from './pages/DetallesPrueba'
import Aside from './components/Global/Aside'
import Header from './components/Global/Header'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
            <Route exact path="/Home" component={Home} />
            <Route exact path="/Home/Search" component={SearchP} />
            <Route exact path="/Home/Login/Dashboart" component={Index1} />
            <Route exact path="/Home/Login" component={Login} />
            <Route path="/Gradoprueba" exact component={Gradoprueba}/>
            <Route exact path="/DetallesPrueba/:id" render={props => {
                            var id = props.match.params.id;
                            return <DetallesPrueba id={id} />
                        }} />
      </Switch>
    </BrowserRouter>
    </div>
  )
}
