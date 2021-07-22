import logo from './logo.svg';
import './App.css';

//Import react-routerdom
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
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
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>  
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
            {/* <About /> */}
            <div className="App">
            <header className="App-header">
              {/* <Welcome name="Didarul"/> */}
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                About <code>src/App.js</code> and save to reload.
              </p>
              <a className="App-link" href="https://reactjs.org"target="_blank" rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
            </div>
        </Route>
          <Route path="/project">
                <div className="App">
            <header className="App-header">
              {/* <Welcome name="Didarul"/> */}
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Project <code>src/App.js</code> and save to reload.
              </p>
              <a className="App-link" href="https://reactjs.org"target="_blank" rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
          {/* <Users /> */}
        </Route>
        <Route path="/">
            {/* <Home /> */}
            <div className="App">
            <header className="App-header">
              {/* <Welcome name="Didarul"/> */}
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Home <code>s rc/App.js</code> and save to reload.
              </p>
              <a className="App-link" href="https://reactjs.org"target="_blank" rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
          </Route>
          <Route path="/contact">
            {/* <About /> */}
            <div className="App">
            <header className="App-header">
              {/* <Welcome name="Didarul"/> */}
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Contact <code>s rc/App.js</code> and save to cc.
              </p>
              <a
                className="App-link" href="https://reactjs.org"target="_blank" rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
            </div>
        </Route>
      </Switch>
    </div>
  </Router>
);
}
