import logo from './logo.svg';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import './App.css';
import CustomBtn from './components/CustomBtn';
import NavBar from './components/NavBar';
import BookList from './components/bookList'
import Grid  from './components/Grid';
import Footer from './components/footer';
import Header from './components/header';

// Custom components from material UI
import SecurityIcon from '@material-ui/icons/Security';
import EventNoteIcon from '@material-ui/icons/EventNote';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ComputerIcon from '@material-ui/icons/Computer';
import HttpIcon from '@material-ui/icons/Http';

/**
 * Website theme 
 * Author: Code Creative
 * Date: 25th Feb. 2021
 * Website: https://github.com/Tom0901/ReactDesignShowCase/blob/master/src/App.js
 */

function App() {
  return (
    <div className="container">
        <Header/>
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
