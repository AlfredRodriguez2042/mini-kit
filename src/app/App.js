import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

// Router
import AppRoutes from './routes'

// Components
import Header from './Components/Header'

import store from '../redux/store'

//Styles
import '../scss/main.scss'

class App extends Component{
    state = {
        authed: false,
        loading: true
    }
    
    render(){
        return this.state.loading === false
        ? <div className="preloader">LOADING....</div>
        : (
   <Provider store={store}>
     <Router>
        <>  
          <Header/>        
          <AppRoutes/>
           </>
         </Router>
          </Provider>
        );
    }
}

export default App
