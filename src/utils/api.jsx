var rootUrl = 'https://api.imgur.com/3/';

var apiKey = '0f9b67ef75f5b29';
var apiSecret = '15e469455aee3167fc1ce934da40777e6ae82b7c';

module.exports = {
    get: function (url) {
        return fetch(rootUrl + url, {
            headers:{
                "Authorization": "Client-ID " + apiKey
            }
        })
        .then(function (response) {
            return response.json(); 
        })
    }
}