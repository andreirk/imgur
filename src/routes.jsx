var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var ReactHistory = require('react-router/lib/hashhistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;


module.exports =  routes = (
  <Router history={new ReactHistory}>
    <Route path="/" component={Hello}>
      <Route path="1" component={Child1}>
        <Route path="2" component={Child2}/>
      </Route>
      
      <Route path="2" component={Child2}/>
    </Route>
  </Router>
)