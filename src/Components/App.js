import React, { Component, Fragment } from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom";
import '../App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'

import View from './View/View'
import Post from './Post/Post'

import { postList } from "../Data/FakeData";

class App extends Component {

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

            </Fragment>
          </BrowserRouter>
        );
  }
}

export default App;
