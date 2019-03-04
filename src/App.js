import React, { Component, Fragment } from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom";
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'

import View from './components/View/View'
import Post from './components/Post/Post'
import Send from './components/Send/Send'
import PayPage from './components/Payment/PayPage'
import Error from './components/Error/Error'

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
            <Fragment>
              <Route exact path="/" render={({ history }) => (
                  <View postList={ this.state.postList }/>
              )} />

              <Route path="/post/:id" render={ props => (<Post postList={this.state.postList} {...props}/>) } />
              <Route exact path="/send/:id" render={ props => (<Send postList={this.state.postList} {...props}/>) } />
              <Route exact path="/send/:id/pay" render={ props => (<PayPage 
                  postList={this.state.postList}
                  {...props}/>) } />
              {/* <Route render={props => (<Error/>)} /> */}
            </Fragment>
          </BrowserRouter>
        );
  }
}

export default App;
