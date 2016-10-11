var rootUrl = 'https://api.imgur.com/3/';

var apiKey = '0f9b67ef75f5b29';

module.exports = {
    get: function (url) {
        return fetch(rootUrl + url, {
            headers:{
                "Authorization": "Client-ID " + apiKey
            }
        }); 
    }
}