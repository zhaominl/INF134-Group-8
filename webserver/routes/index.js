import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCLbnmUBqWgLIyVu6gkdJpTZpW3ldnu3dU",
    authDomain: "inf134-group8.firebaseapp.com",
    databaseURL: "https://inf134-group8.firebaseio.com",
    projectId: "inf134-group8",
    storageBucket: "inf134-group8.appspot.com",
    messagingSenderId: "659683365363"
  };

firebase.initializeApp(config);

var postRef = firebase.database().ref('post'); 

var express = require('express');
var router = express.Router();

const client_url = "http://localhost:3000/";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET most recent 20 posts. */
router.get('/recent', function(req, res, next) {
  var filter = req.params.filter;
  postRef.limitToFirst(20).on('value',function(snapshot){
    res.json(snapshot.val());
    console.log();
  });
});

/* GET most recent 20 posts according to filter. */
router.get('/recent/:filter', function(req, res, next) {
  var filter = req.params.filter;
  postRef.orderByChild('tags').orderByChild(filter).equalTo(true)
    .on('value',function(snapshot){
      res.json(snapshot.val());
      console.log();
  });
});

/* GET most recent 20 posts according to search. */
router.get('/recent/:key', function(req, res, next) {
  var key = req.params.key;
  postRef.orderByChild('tags').orderByChild(filter).equalTo(true)
    .on('value',function(snapshot){
      var searchResult = snapshot.filter((value)=>{
        return value.content.contains(key);
      }).val();
      res.json(searchResult);
  });
});

/* POST the letter (post) to the database. */
router.post('/post', function(req, res, next) {
  postRef.push(req.body);
});



module.exports = router;
