import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import "./index.scss";

import Register from './components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Switch>
				<Route exact path="/register" component={Register} />
			</Switch>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);