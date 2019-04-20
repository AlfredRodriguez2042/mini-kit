import React, { Component} from 'react'
import Typed from 'typed.js'


class typeWriting extends Component{
    componentDidMount(){
        const options = {
            strings: [' la libreria React', 'React-router^1000\n \n React-redux', 'el modulo de sass', 'el modulo de mongodb', ' y el modulo de Express','tambien es para puro JS'],
            typeSpeed: 80,
            backSpeed: 50,
            loop: true
        }
        this.typed = new Typed('.type-writing', options)
    }
    componentWillUnmount(){
        //this.typed.destroy()
    }
    
    render(){
        return(
            <>
            
            <div className="type-wrap"> Este mini kit tiene : <br/> 
             <span className="type-writing"></span>
            </div>
            </>
        )
    }
} 
    


export default typeWriting 
