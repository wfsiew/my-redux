import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import logo from './logo.svg';
//import './App.css';

import { Home } from './pages/home';
import { About } from './pages/about';
import { List } from './pages/list';
import { Form } from './pages/form';
import { Post } from './pages/post';

function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/list">List</Link>
      </li>
      <li>
        <Link to="/form">Form</Link>
      </li>
      <li>
        <Link to="/post">Post</Link>
      </li>
    </ul>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/list" component={List} />
        <Route path="/form" component={Form} />
        <Route path="/post" component={Post} />
      </div>
    </Router>
  );
}

export default App;
