
//Import components
import Nav from './components/Nav';
//Import pages
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

//Import Transtition- group
//Import timeline
import { Transition, TransitionGroup } from 'react-transition-group';
import { play, exit } from './timelines'



export default function App() {
  return (
  <Router>
      <div className="app">
      <Nav />

      
      {/* <Switch>
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
      </Switch> */}
        
      <Route render={({ location }) => {
          const { pathname, key } = location;

          return (
            <TransitionGroup component={null}>
              <Transition
                key={key}
                appear={true}
                //gsap animation part
                onEnter={(node, appears) => play(pathname, node, appears)}
                onExit={(node, appears) => exit(node, appears)}
                
                timeout={{enter: 750, exit: 150}}
              >
                <Switch location={location}>
                  <Route exact path="/" component={Home}/>
                  <Route path="/about" component={About} />
                  <Route path="/project" component={Project} />
                  <Route path="/contact" component={Contact} />
                </Switch>
              </Transition>
            </TransitionGroup>
          )
        }}/>
    </div>
  </Router>
);
}
