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
import Product from './components/Products'
import SignIn from './components/SignIn'

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
                    <Route exact path="/" component={SignIn} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/posts" component={Product} />
                </Switch>
            </div>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)
