import React, { Component ,Fragment} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './App.scss';
import {Switch , Route ,Redirect } from 'react-router-dom';
import Home from './Home'
import About from './About'
import Service from './Services'
import Contact from './contact'
import Navigation from './Navigation.js';

export default class App extends Component
{
   render(){
     return(
         <>
         <Navigation/>
         <Switch>
         	<Route exact path = '/home' component = {Home} />
            <Route exact path = '/service' component = {Service} />
            <Route exact path = '/about'  component = {About}/>
            <Route exact path = '/contact' component = {Contact} />
            <Redirect to ='/home' />
         </Switch>

         </>

     );
    }

}


