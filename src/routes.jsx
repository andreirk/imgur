var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var ReactHistory = require('react-router/lib/hashhistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Main = require('./components/main');
var Topic = require('./components/topic');


module.exports =  routes = (
  <Router history={new ReactHistory}>
    <Route path="/" component={Main}>
        <Route path="topic/:id" component={Topic}/>
    </Route>
  </Router>
)