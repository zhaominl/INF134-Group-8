import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';

import Home from "./home/Home";
import Pay from "./pay/Pay";
import Post from "./post/Post";
import Read from "./read/Read";
import Send from "./send/Send";
import Error from "./error/Error";

class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/post" component={Post} />
          <Route path="/read" component={Read} exact />
          <Route path="/read/send" component={Send} exact />
          <Route path="/read/send/pay" component={Pay}  />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
