import React from "react";
import {BrowserRouter as Router, Route, Link, NavLink, Switch, Redirect} from 'react-router-dom';

import Contacts from "./components/Contact/Contacts";
import Main from "./components/Main/Main";
import Photos from "./components/photos/Photo";
import Posts from "./components/Post/Posts";

import './App.css';

const NotFound = () => {
  return (
    <div> Not Found </div>
  )
}

function App() {
  return (
    <div className="App">
      <Router >
        <Link className='app-link' 
                 to="/main" 
                 activeClassName='active-link'>
            Main
        </Link>
        <Link className='app-link' 
                 to="/posts" 
                 activeClassName='active-link'>
            Posts
        </Link>
        <Link className='app-link' 
                 to="/photos" 
                 activeClassName='active-link'>
            Photos
        </Link>
        <Link className='app-link' 
                 to="/contacts" 
                 activeClassName='active-link'>
            Contacts
        </Link>
        <Switch>
          <Route path="/main" component={Main}/>
          <Route path="/posts" component={Posts}/>
          <Route path="/photos" component={Photos}/>
          <Route path="/contacts" component={Contacts}/>
          <Route path="/" exact render={() => <Redirect to='/main'/>}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
