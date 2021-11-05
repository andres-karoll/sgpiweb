import React from 'react'
// import NotFoundImg from '../images/404.png'
import {Link} from 'react-router-dom'
import { NavLink } from 'react-router-dom';
const Nav = () => (
<header id="header" style={{background: 'rgb(255,255,255)'}}>
  <div>
      <div className="container">
        <div className="logo float-left">
          {/* Uncomment below if you prefer to use an image logo */}
          <h1 className="text-light">
            <a href="#intro" className="scrollto">
              <span>SGP</span>
            </a>
          </h1>
          {/* <a href="#header" class="scrollto"><img src="img/logo.png" alt="" class="img-fluid"></a> */}
        </div>
        <nav className="main-nav float-right d-none d-lg-block">
          <ul>
            <li className="active">
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/Home/Info">Info</a>
            </li>
            <li>
            <Link to="/Home/Search">Buscador</Link>
            
            </li>
            <li>
            <Link to="/Registro/">Registro</Link>
            
            </li>
            <li>
            <NavLink to={"/Home/Login/"}>Inicio Sesion</NavLink>
           
            </li>
          </ul>
        </nav>
        {/* .main-nav */}
      </div>
    </div>  
    </header>);
    export default Nav