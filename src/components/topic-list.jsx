var React = require('react');
var TopicStore = require('../stores/topic-store');
var Reflux = require('reflux');
var Actions = require('../actions');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


module.exports = React.createClass({
    mixins: [
        Reflux.listenTo(TopicStore, 'onChange')
        ],

    getInitialState: function () {
        return {
            topics: []
        }
    },
    componentWillMount: function () {
        Actions.getTopics();
    },
    render : function () {
        return <div className="list-group">
            Topic List
            {this.renderTopics()}
        </div>
    },

    /*************/
    /*  HELPERS  */
    /*************/
    /**
     * Returns the key of a Firebase snapshot across SDK versions.
     *
     * @param {DataSnapshot} snapshot A Firebase snapshot.
     * @return {string|null} key The Firebase snapshot's key.
     */
    renderTopics: function () {
         return this.state.topics.map(function (topic) {
             return <Link 
                        className="list-group-item"
                        to={'topic/' + topic.id} 
                        key={topic.id}>
                <h4>{topic.name}</h4>
                {topic.description}
             </Link>
         })
    },

    onChange: function (event,topics) {
        this.setState({
            topics: topics
        })
    }


})