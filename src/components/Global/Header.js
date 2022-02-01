import React from 'react'

import  { Component } from 'react';
export default class Header extends Component {
 cerrarSesion=()=>{
    localStorage.removeItem('cedula');
    localStorage.removeItem('tipo');
    localStorage.clear();
    window.location.href="/";
 
  }
  componentDidMount = () => {
   if(!localStorage.getItem("cedula")){
      window.location.href="/";
   }
  }
  render(){
    return (
  <nav className="main-header navbar navbar-expand navbar-white navbar-light">
  {/* Left navbar links */}
  <ul className="navbar-nav">
{/*
    <li className="nav-item">
      <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
    </li>
*/}
    <li className="nav-item d-none d-sm-inline-block">
      <a href="/HomeInstitucional" className="nav-link">Home</a>
    </li>

  </ul>
  {/* Right navbar links */}
  <ul className="navbar-nav ml-auto">
  


    {/* Messages Dropdown Menu */}
    <li className="nav-item d-none d-sm-inline-block">
      <a href="/" style={{fontSize:"small" }} type="submit" className="nav-link" onClick={this.cerrarSesion}>Cerrar Sesión</a>

    </li>


  </ul>
  </nav>

    )
}
}