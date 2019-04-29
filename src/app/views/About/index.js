import React, { Component } from 'react'
import { connect } from 'react-redux'

class About extends Component{
    render(){
       return(
           <>
           <h1> Component About</h1>
           </>
       )    
    }
}

const mapStateToProps = state => ({
    suggestions: state.suggestions
})

export default connect(mapStateToProps)(About)