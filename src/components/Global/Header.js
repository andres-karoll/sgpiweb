import React from 'react'

import  { Component } from 'react';
export default class Header extends Component {
 cerrarSesion=()=>{
    localStorage.removeItem('cedula');
    localStorage.removeItem('tipo');
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
      <a href="index.html" className="nav-link">Home</a>
    </li>
    <li className="nav-item d-none d-sm-inline-block">
      <a href="#" className="nav-link">Contact</a>
    </li>
  </ul>
  {/* Right navbar links */}
  <ul className="navbar-nav ml-auto">
  <li className="nav-item d-none d-sm-inline-block">
  <button class="btn btn-outline-light btn-lg px-5" type="submit" onClick={this.cerrarSesion}>Cerrar Sesion</button>

    </li>
  </ul>
  </nav>

    )
}
}