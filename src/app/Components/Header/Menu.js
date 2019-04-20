import React from 'react'
import { Route, BrowserRouter as Router,
 Link, Switch} from 'react-router-dom'

 import Home from '../../views/Home'
 import About from '../../views/About'
 import Page404 from '../../views/Page404'

 const Menu = ()=>(
     <>
     <Router>
         <>
         <ul>
             <li> <Link to="/">Home</Link> </li>
             <li> <Link to="/about">About</Link> </li>
         </ul>
         <Switch>
             <Route exact path="/"  component={Home}/>
             <Route exact path="/about"  component={About}/>
             <Route component={Page404}/>
        </Switch>         
         </>
     </Router>
     </>
 )

 export default Menu