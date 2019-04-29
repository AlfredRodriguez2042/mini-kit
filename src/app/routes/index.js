//dependencies
import React from 'react'
import { Route, Switch } from 'react-router-dom'

//Paths
import Home from '../views/Home'
import About from '../views/About'
import Page404 from '../views/Page404'

const AppRoutes = ()=>(
    <Switch>
     <Route exact path='/' component={Home} />
     <Route path='/about' component={About} />
     <Route component={Page404} />
    </Switch>
)

export default AppRoutes
