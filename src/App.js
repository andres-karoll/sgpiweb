import  {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import React from 'react'
import Home from './components/pages/home/Home'
import Grado from './components/pages/biblioteca/Grado'
import Notfound from './components/pages/notfound/Notfound'
import Footer from './components/Footer'
import Aside from './components/Global/Aside'
import Header from './components/Global/Header'
import Gradofin from './components/pages/biblioteca/Gradofin'
import Detalles from './components/pages/biblioteca/Detalles'



export default function () {
  return (
<>
    
    <Router>
      <Aside/>
      <Header/>
      <Switch>
        <Route path="/" exact component = {Home}/>
        <Route path="/gradoterminado" exact component = {Gradofin}/>
        <Route path="/grado" exact component = {Grado}/>
        <Route path="/grado/detallesgrado" exact component = {Detalles}/>
        <Route component ={() => (
          <Notfound/>)
        } />

      </Switch>
    </Router>

    </>
  )
}
