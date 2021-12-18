import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router';
import AboutUs from './components/aboutUs'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(); <Route exact path="/" component={Homepage}/>
/**
    <Router>
       <Routes>
				<Route exact path="/about" component={AboutUs}/>
	    </Routes>
    </Router> */

serviceWorker.unregister();
