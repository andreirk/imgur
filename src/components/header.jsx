var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link; 
var Actions = require('../actions');
var Reflux = require('reflux');
var TopicStore = require('../stores/topic-store');

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
    render: function () {
        return  <nav className="navbar navbar-default header" >
            <div className='container-fluid'>
                <Link 
                    to="/"   
                    className="navbar-brand">
                        Imgur Brouser
                </Link>
            <ul className="nav navbar-nav navbar-right">
                {this.renderTopics()}
               
            </ul>                
            </div>

        </nav> 
    },
    renderTopics: function () {
        return this.state.topics.slice(0, 4).map(function (topic) {
             return   <li 
                        key={topic.id}>
                    <Link 
                        activClassName='acitve'
                        to={'topic/' + topic.id}>
                            {topic.name} 
                    </Link>
                </li> 
        })
    },
    onChange: function (ev, topics) {
        this.setState({
            topics: topics 
        });
    }
})