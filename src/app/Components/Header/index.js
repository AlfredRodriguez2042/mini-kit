import React, { Component } from 'react'

import Menu from './Menu'

class Header extends Component{
   
   state = {
       state : {
           authed: false,
           loading: true
       }
   }
    render(){
        return(
            <>
            <h1>{this.state.task.title}</h1>
            <Menu/>
            
            </>
        )
    }
}

export default Header