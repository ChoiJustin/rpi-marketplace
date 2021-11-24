import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Chat } from 'react-chat-popup'

import './index.scss'

import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home'
import Register from './components/Register'
import NavBar from './components/Navbar'
import logo from './images/Homelogo.png'

const handleNewUserMessage = (newMessage) => {
    console.log(`New Marketplace message! ${newMessage}`)
}

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <div>
                <NavBar />
                <Chat profilepicture={logo} title="RPI Marketplace" />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/register" component={Register} />
                </Switch>
            </div>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)
