import React from 'react';
import { NavLink } from 'react-router-dom';

export default function App() {
    return (
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about" activeClassName="selected" >About</NavLink></li>
            <li><NavLink to="/project" activeClassName="selected" >Project</NavLink></li>
            <li><NavLink to="/contact" activeClassName="selected" >Contact</NavLink></li>  
        </ul>
    );
}