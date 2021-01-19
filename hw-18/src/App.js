import './App.css';
import React from "react";
import Main from "./components/Main/Main";
import Contacts from "./components/Contact/Contacts";
import Posts from "./components/Post/Posts";
import Photos from "./components/photos/Photo";
import {BrowserRouter as Router, Route, Link, NavLink, Switch, Redirect} from 'react-router-dom';


const NotFound = () => {
  return (
    <div> Not Found </div>
  )
}

function App() {
  return (
    <div className="App">
      <Router >
        <NavLink className='app-link' 
                 to="/main" 
                 activeClassName='active-link'>
            Main
        </NavLink>
        <NavLink className='app-link' 
                 to="/posts" 
                 activeClassName='active-link'>
            Posts
        </NavLink>
        <NavLink className='app-link' 
                 to="/photos" 
                 activeClassName='active-link'>
            Photos
        </NavLink>
        <NavLink className='app-link' 
                 to="/contacts" 
                 activeClassName='active-link'>
            Contacts
        </NavLink>
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
