import React, { Component } from 'react'
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import Home from '../../views/Home'
import About from '../../views/About'
import Page404 from '../../views/Page404'
 class Menu extends Component{
     render(){
         return(
            <>
            <Router>
                <>
                <ul>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/about">About</Link> </li>
                </ul>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route component={Page404}/>
                </Switch>
                </>
            </Router>
            </>
         )
     }
 } 
    
 

 export default Menu