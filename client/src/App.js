import logo from './logo.svg';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import './App.css';
import React from 'react';
import CustomBtn from './components/CustomBtn';
import NavBar from './components/NavBar';
import BookList from './components/bookList'
import Grid  from './components/Grid';
import Footer from './components/footer';
import Header from './components/header';
import AboutUs from './components/aboutUs';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link, 
  Outlet
} from "react-router-dom";

// Custom components from material UI
import SecurityIcon from '@material-ui/icons/Security';
import EventNoteIcon from '@material-ui/icons/EventNote';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ComputerIcon from '@material-ui/icons/Computer';
import HttpIcon from '@material-ui/icons/Http';

// How do i remove a page make an other come to the picture ?
/**
 * Website theme 
 * Author: Dev Amit Jha
 * Date: 18th Oct. 2020
 * Website: https://www.youtube.com/watch?v=CN0OTAkUD9c&t=730s
 */

function App() {
  return (
    <div className="container">
        <Header>
        </Header>
        <BookList/>
        <Footer/> 
    </div>
    );
}

  /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  
      <div className="App">
      <ThemeProvider theme={theme}>
        <Header/>
        <BookList/>
        </ThemeProvider>
    </div>*/
/*
const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});*/

/**
 * <Grid icon={<SecurityIcon style={{fill: "#4360A6", height:"125", width:"125"}}/>}  title="Secure" btnTitle="Show me More" />
          <Grid icon={<EventNoteIcon style={{fill: "#449A76", height:"125", width:"125"}}/>} title="Reliable" btnTitle="Show me More"/>
          <Grid icon={<TrendingUpIcon style={{fill: "#D05B2D", height:"125", width:"125"}}/>}  title="Performant" btnTitle="Show me More"/>
 */
export default App;
