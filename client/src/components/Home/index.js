import React, { useState } from 'react'
import Logo from '../../images/Logo.png'

import { Form, Button } from 'react-bootstrap'
import './index.scss'

const Home = () => {
    const [user, setUsername] = useState('')

    const handleSubmit = (e) => {}

    return (
        <div className={'Home'}>
            <img src={Logo} alt="" id={'Logo'} />
            <div className={'text'}> RPI MARKETPLACE </div>
            <div className={'text'}>
                {' '}
                "A marketplace for students, by students"{' '}
            </div>
            <div>
                <Form className={'Home__Form'}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                            type="text"
                            placeholder="Search for"
                            value={user}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </Form.Group>

                    <div>
                        <Button
                            variant="primary"
                            type="submit"
                            onClick={handleSubmit}
                        >
                            Search
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Home
