import React from "react";
//import { Link } from 'react-router-dom';
import AboutUs from './aboutUs';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link, 
    Outlet
} from "react-router-dom";

export default function Header(){
    return(
        <Router>
        <nav>
        <div className="logo">Library.</div>
        <ul>
            <li>Home</li>
            <li>Books</li>
            <li><Link to="/about">About Us</Link></li>
            <li>Contact</li>
        </ul>
        <div className="search">
            <i className="fa fa-search"></i>
            <i className="fa fa-shopping-basket"></i>
        </div>
        </nav>

        <Routes>
        <Route path="/about">
            <AboutUs/>
        </Route>
        </Routes>
        </Router>
    )
}

/*
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
*/