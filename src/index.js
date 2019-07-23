import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import Home from './home'
import Login from './login'
import About from './about'
import Navbar from './navbar'




ReactDOM.render(
  <Router>
    <React.Fragment>
    <Navbar />
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/login' component={Login} />
    </React.Fragment>
  </Router>,
  document.getElementById('root')
);
