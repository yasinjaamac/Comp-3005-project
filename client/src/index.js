import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';

//import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router';
import AboutUs from './components/aboutUs'
import Header from './components/header';
import BookList from './components/bookList';
import {Helmet} from 'react-helmet';
import {Auth0Provider} from '@auth0/auth0-react'
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import UserProfile from './components/userProfile';
import JSONPretty from 'react-json-pretty';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

//<App />
//React.StrictMode.  
//Que faire now... ?
ReactDOM.render(
  <Auth0Provider
  domain={domain}
  clientId={clientId}
  redirectUri={window.location.origin}>
    <div className="container">
    <Helmet>
                <style>{'body { background-color: #272b34; }'}</style>
    </Helmet>
    
    
    <div>

    </div>

    <>
    <LoginButton/>
    <LogoutButton/>
    <UserProfile/>
    </>

    <Header/>
    <Router>
        <Routes>
        <Route path="/" element={<BookList/>}/>
        <Route path="/about" element={<AboutUs/>}>
        </Route>
        </Routes>
        
        </Router>
    </div>
    
  </Auth0Provider>,
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
    </Router> 
    
    <Helmet>
                <style>{'body { background-color: #272b34; }'}</style>
            </Helmet>
  */

serviceWorker.unregister();
