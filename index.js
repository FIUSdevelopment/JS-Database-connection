const axios = require('axios');

var ciccio = {
  baudo: 1,
  pippo: 'amico di topolino'
}

async function get (auth, name) {
    await axios.post('http://greatnetwork.eu:10009/api/database/set/', ciccio)
    .then(function (response) {
      // handle success
      console.log(response.data);
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

