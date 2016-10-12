var React = require('react');
var ImageStore = require('../stores/image-store');
var Reflux = require('reflux');
var Actions = require('../actions');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
    mixins: [
        Reflux.listenTo(ImageStore, 'onChange')
    ],
    getInitialState: function () {
        return {
            images: []
        }
    },
    componentWillMount: function () {
        Actions.getImages(this.props.params.id)
    }, 
    render: function () {
        return <div>
         
        </div>
    },
    onChange: function (ev, images) {
        this.setState({
            images: images 
        })
    }
})