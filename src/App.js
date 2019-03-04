import React, { Component } from 'react';
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'

import View from './component/View/View'
import Post from './component/Post/Post'
import Send from './component/Send/Send'
import PayPage from './component/Payment/PayPage'
import Error from './component/Error/Error'
import WritePage from './component/Write/WritePage'

import { postList } from "./Data/FakeData";

class App extends Component {
    // ADD REAL POSTLIST HERE !!
    state = {
        postList: postList,
    };

    render() {

      // Add font awesome
        library.add(faArrowAltCircleLeft);
        library.add(faIgloo);

        return (
          <BrowserRouter>
            <Switch>
              <Route exact path="/" render={({ history }) => (
                  <View postList={ this.state.postList }/>
              )} />
              <Route exact path="/write" render={ props => (<WritePage {...props}/>) } />
              <Route exact path="/post/:id" render={ props => (<Post postList={this.state.postList} {...props}/>) } />
              <Route exact path="/send/:id" render={ props => (<Send postList={this.state.postList} {...props}/>) } />
              <Route exact path="/send/:id/pay" render={ props => (<PayPage 
                  postList={this.state.postList}
                  {...props}/>) } />
  
              <Route  exact render={props => (<Error/>)} />
            </Switch>
          </BrowserRouter>
        );
  }
}

export default App;
