import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './index.scss'

import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home'
import Register from './components/Register'
import NavBar from './components/Navbar'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <div>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/register" component={Register} />
                </Switch>
            </div>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)
