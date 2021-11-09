import React, { useState } from "react";
import Logo from '../../images/Logo.png';


import {Form, Button} from 'react-bootstrap';
import './index.scss';

const Register = () => {
  const [user, setUsername] = useState("");
  const [pass, setPassword] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:5000/api/users', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: `${user}`, password: `${pass}`})
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
}


  return (
    <div className={"Register"}>
      <img src={Logo} alt="" id={'Logo'}/>
      <div className={"text"}> SIGN INTO MARKETPLACE </div>
      <div>
        <Form className={"Register__Form"}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Username" value={user} onChange={(e) => setUsername(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" value={pass} onChange={(e) => setPassword(e.target.value)}/>
          </Form.Group>
          <div>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register;