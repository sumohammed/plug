import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import App from 'components/App';
import Welcome from 'components/welcome';
import Main from 'components/main';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render((
	  <Router history={browserHistory}>
	    <Route path="/" component={App}>
	      <IndexRoute component={Welcome}/>
	      <Route path="main" component={Main} />
	    </Route>
	  </Router>
	), document.querySelector('#app'));
});
