const axios = require('axios');

async function get (auth, name) {
    await axios.get('http://greatnetwork.eu:10009/api/fius2022./database/bello/set/ciao')
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}

get()