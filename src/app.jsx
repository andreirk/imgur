var React = require('react');
var ReactDOM = require('react-dom');
var Routes = require('./routes');


var Hello = React.createClass({
  render: function() {
    return <div className="red">
      {this.props.children}
    </div>
  }
});

var Child1 = React.createClass({
  render: function () {
    return <h1>
      Im a chalid 1
      {this.props.children}
    </h1>
  }
});
var Child2 = React.createClass({
  render: function () {
    return <h1>
      Im a chalid 2
    </h1>
  }
});



// var element = React.createElement(Hello, {});
ReactDOM.render(Routes, document.querySelector('.container'));
