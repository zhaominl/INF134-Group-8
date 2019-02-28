import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

var config = {
    apiKey: "",
    authDomain: "inf134-group8.firebaseapp.com",
    databaseURL: "https://inf134-group8.firebaseio.com",
    projectId: "inf134-group8",
    storageBucket: "inf134-group8.appspot.com",
    messagingSenderId: ""
  };

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
