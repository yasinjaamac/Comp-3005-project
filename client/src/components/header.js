import React from "react";
//import { Link } from 'react-router-dom';
import AboutUs from './aboutUs';
import { useAuth0 } from "@auth0/auth0-react";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link, 
    Outlet
} from "react-router-dom";


// How to transition from one page to the 
// other 

export default function Header(){
    
    const { user, isAuthenticated } = useAuth0();
    return(

        isAuthenticated && (
        <Router>
        <nav>
        <div className="logo">Library.</div>
        <ul>
            <li><Link to="/profile" className="destination">Home</Link></li>
            <li><Link to="/list" className="destination">Books</Link></li>
        </ul>
        <div className="search">
            <i className="fa fa-search"></i>
            <i className="fa fa-shopping-basket"></i>
        </div>
        </nav>
        </Router>
        )
    )
}

/*
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
*/