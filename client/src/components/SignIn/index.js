import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

import Logo from '../../images/Logo.png'

import { Form, Button } from 'react-bootstrap'
import './index.scss'

const Register = () => {
    //Hooks that hold the current Username & Password
    const [user, setUsername] = useState('')
    const [pass, setPassword] = useState('')
    const [isLoggedin, setlogin] = useState(true)

    const history = useHistory()

    async function getUsers() {
        var response = await fetch('http://localhost:5000/api/users', {
            method: 'post',
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
        })
        return await response.json()
    }

    //Fetches the Current User from the Backend API when submit is clicked
    const handleSubmit = async (e) => {
        e.preventDefault()

        //see if there is already existing user
        let users = await getUsers()
        console.log(users)
        users.forEach((u) => {
            if (u.username === user && u.password === pass) {
                localStorage.setItem('isLogged', true)
                history.push('/posts')
                window.location.reload()
            }
        })

        //sets incorrect username or password message
        setlogin(false)

        //Clears the current Username and Password
        setUsername('')
        setPassword('')
    }

    return (
        <div className={'SignIn'}>
            <img src={Logo} alt="" id={'Logo'} />
            <div className={'text'}> SIGN INTO MARKETPLACE </div>
            <div>
                {isLoggedin === false && (
                    <div>Incorrect username or password!</div>
                )}
                <Form className={'Register__Form'}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                            type="text"
                            placeholder="Username"
                            value={user}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={pass}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <div>
                        <Button
                            variant="primary"
                            type="submit"
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                    </div>
                </Form>
                <br></br>
                <div>Don't have an account?</div>
                <Link to="/Register" className="btn btn-primary">
                    Sign up
                </Link>
            </div>
        </div>
    )
}

export default Register
