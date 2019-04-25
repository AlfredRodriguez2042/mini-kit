import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Redirect, Switch, Link } from 'react-router-dom'

// Paths
import Home from './views/Home'
import About from './views/About'
import Page404 from './views/Page404'

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
     <Router>
        <>
      <header>
         <nav>
            <ul>
              <li> <Link to="/">Home</Link> </li>
               <li> <Link to="/about">About</Link> </li>
             </ul>
             </nav>
     </header>
            <div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={About} />
                    <Route component={Page404} />
                </Switch>
            </div>

                </>
            </Router>
        );
    }
}

export default App
