var React = require('react');
var ImageStore = require('../stores/image-store');
var Reflux = require('reflux');
var Actions = require('../actions');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var ImagePreview = require('./image-preview');

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
        Actions.getImages(this.props.params.id);
    }, 
    componentWillReceiveProps: function (nexsProps) {
        Actions.getImages(nexsProps.params.id);
    },
    render: function () {
        return <div className="topic">
            {this.renderImages()}
        </div>
    },
    renderImages: function () {
        return this.state.images.map(function (image) {
            return <ImagePreview 
                key={image.id}
                {...image}
                />
        })
    },
    onChange: function (ev, images) {
        this.setState({
            images: images 
        })
    }
})