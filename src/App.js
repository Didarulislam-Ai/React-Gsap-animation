import logo from './logo.svg';


import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';


//Import react-routerdom
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  NavLink,
  Route,
  Link
} from 'react-router-dom';

// function Welcome(props) {
//   if (props.name.length > 4) {
//     return <h1>Hello, {props.name}</h1>
//   }
//   else {
//     return <p> too short</p>
//   }
// }


export default function App() {
  return (
    <Router>
    <div>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about" activeClassName="selected" >About</NavLink></li>
        <li><NavLink to="/project" activeClassName="selected" >Project</NavLink></li>
        <li><NavLink to="/contact" activeClassName="selected" >Contact</NavLink></li>  
      </ul>

      
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/project">
          <Project />
        </Route>
        <Route path="/">
          <Home />  
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  </Router>
);
}
