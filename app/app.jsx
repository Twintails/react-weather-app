import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Router, IndexRoute, hashHistory, browserHistory} from 'react-router'
import Main from 'Main'
import Weather from 'Weather'
import About from 'About'
import Examples from 'Examples'

//scss
import './assets/sass/style.scss';

var firstName = 'Dave';


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
