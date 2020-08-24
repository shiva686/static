import React, { Component ,Fragment} from 'react';
import  {NavLink } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './nav.scss'
 const Navigation = () => {


 const activeStyle = {
 	color: '#3399ff'
   
 }
 const Websitename = {
  'color':'#3399ff'  ,
  'fontWeight': 'bold' ,
  'fontSize':'25px',
   'margintop':'10px',
 }

 return(
  <div className ="nav-tran">
 	<div className = 'container'>
    <nav className="navbar navbar-expand-md navbar-light">

  <NavLink className="navbar-brand text-capitalize active nav-resize" activeStyle={Websitename} to="/">Websitename</NavLink>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto ">
       <li className="nav-item">
        <NavLink className="nav-link " activeClassName = "nav-active" activeStyle = {activeStyle} to="/home"> Home </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link " activeClassName = "nav-active" activeStyle = {activeStyle} to="/service">Service</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link " activeClassName = "nav-active" activeStyle = {activeStyle} to="about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link " activeClassName = "nav-active" activeStyle = {activeStyle} to="contact">Contact</NavLink>
      </li>
    </ul>
  </div>
  </nav>
  </div>
  </div>
  );
 }

 export default Navigation;