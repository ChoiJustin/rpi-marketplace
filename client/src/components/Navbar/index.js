import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <header className="navbar">
        <nav className="navbar_navigation">
            <div></div>
            <div className="navBar_logo"><Link to="/">Marketplace</Link></div>
            <div className="spacer"></div>
            <div className="navbar_items">
                <ul>
                    <li className="Item1"><Link to="/register">Sign In</Link></li>
                </ul>
            </div>
        </nav>
    </header>
);
export default NavBar;