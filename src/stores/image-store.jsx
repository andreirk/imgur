var Reflux = require('reflux');
var Api = require('../utils/api');
var Actions = require('../actions'); 

module.exports = Reflux.createStore({
    listenables: [Actions],
    getImages: function (topicId) {
        Api.get('topics/' + topicId)
            .then(function (data) {
                this.images = data.data;
                this.trigerChange();
            }.bind(this));
    },
    trigerChange: function () {
        this.trigger('change', this.images)
    }
})