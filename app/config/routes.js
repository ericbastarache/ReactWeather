var React = require('react');
var ReactDom = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../containers/Main');

var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    </Route>
  </Router>
);


module.exports = routes;