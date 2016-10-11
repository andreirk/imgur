var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link; 

module.exports = React.createClass({
    render: function () {
        return  <nav className="navbar navbar-default header" >
            <div className='container-fluid'>
                <Link 
                    to="/"   
                    className="navbar-brand">
                        Imgur Brouser
                </Link>
            <ul className="nav navbar-nav navbar-right">
                <li><a href="">Topic #1 </a></li> 
            </ul>                
            </div>

        </nav> 
    }
})