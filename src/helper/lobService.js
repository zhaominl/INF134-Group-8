import {lob_key} from './key/lob-accesskey';

var fetch = require('node-fetch');

var lob = require('lob')(lob_key.test_access_key);

const expressBaseUrl = 'http://localhost:8888';

function sendRequestToExpress(endpoint){
    //TODO: use the injected http Service to make a get request to the Express endpoint and return the response.
    //the http service works similarly to fetch(). It may be useful to call .toPromise() on any responses.
    //update the return to instead return a Promise with the data from the Express server
    return fetch(this.expressBaseUrl + endpoint)
            .then(res =>{ return res.json();});
}




export function PostToLob(userInfoObj, letterInfo) {

    const {author, date, title, content} = letterInfo;

    const {name, address_line, address_city, address_state, address_zip } = letterInfo;

    const formatLetter = this.formatLetter();

    Lob.letters.create({
        description: 'Send Letter',
        to: {
          name: name,
          address_line1: address_line,
          address_line2: '',
          address_city: address_city,
          address_state: address_state,
          address_zip: address_zip
        },
        from: 'adr_210a8d4b0b76d77b',
        file: formatLetter,
        merge_variables: {
          name: name
        },
        color: true
      }, function (err, res) {
        console.log(err, res);
      });
    
      function formatLetter(LetterInfo){
        const {author, date, title, content} = letterInfo;

        return `<>`
      }
}