import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Switch>
				<Route exact path="/" component={Login} />
			</Switch>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);