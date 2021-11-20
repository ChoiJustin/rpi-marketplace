import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import './index.scss'

const NavBar = () => {
    //State Hooks that stores if the user is logged in through cookies
    const [isLogged, setLogged] = useState(
        JSON.parse(localStorage.getItem('isLogged'))
    )

    //State that keeps track of when the NavBar is on or off
    const [nav, setNav] = useState(false)

    //Signs out by removing the cookie and refreshing to see those changes
    const SignOut = () => {
        localStorage.setItem('isLogged', null)
        window.location.reload()
    }

    //The dropdown part of the navbar that appears when the settings button is pressed
    //Conditionally renders depending on whether or not the user is logged in
    const AccountList = () => {
        return (
            <div>
                {isLogged ? (
                    <div className="accountList">
                        {' '}
                        <Link
                            className={`_link option ${nav ? '' : 'hidden'}`}
                            to="/Posts"
                        >
                            Posts
                        </Link>
                        <Link
                            className={`_link option ${nav ? '' : 'hidden'}`}
                            onClick={SignOut}
                            to="/"
                        >
                            Sign Out
                        </Link>
                    </div>
                ) : (
                    <Link
                        className={`_link option ${nav ? '' : 'hidden'}`}
                        onClick={() => setNav(false)}
                        to="/Register"
                    >
                        Sign In
                    </Link>
                )}
            </div>
        )
    }
    
    return (
        <div className="navbar">
            <nav className="navbar__navigation">
                <div className="navbar__navigation__title">
                    <Link className="_link" to="/">
                        Marketplace
                    </Link>
                </div>
                <div className="navbar__navigation__spacer"></div>
                <div className="navbar__navigation__items">
                    <div
                        className="accountSwitch _link option"
                        onClick={() => setNav(!nav)}
                    >
                        Settings
                    </div>
                    <AccountList />
                </div>
            </nav>
        </div>
    )
}
export default NavBar
