import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';

import Home from "./components/home/Home";
import Pay from "./components/pay/Pay";
import Post from "./components/post/Post";
import Read from "./components/read/Read";
import Send from "./components/send/Send";
import Error from "./components/error/Error";

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
