import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <div className="navbar">
        <nav className="navbar__navigation">
            <div></div>
            <div className="navbar__navigation__title"><Link className="navbar__navigation__link" to="/">Marketplace</Link></div>
            <div className="navbar__navigation__spacer"></div>
            <div className="navbar__navigation__items">
                <Link className="navbar__navigation__link"to="/register">Sign In</Link>
            </div>
        </nav>
    </div>
);
export default NavBar;
