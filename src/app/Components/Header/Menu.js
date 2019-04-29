import React, { Component } from 'react'
import { Link } from 'react-router-dom'

 class Menu extends Component{
     render(){
         return(
            <>
            <nav className="content_menu">
                <ul className="menu">
                <li className="menu_item"> <Link className="menu_link" to="/">Home</Link> </li>
                <li className="menu_item"> <Link className="menu_link" to="/about">About</Link> </li>
                </ul>
            </nav>
            </>
         )
     }
 } 
    
 

 export default Menu