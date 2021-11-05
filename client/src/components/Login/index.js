import React from "react";
import Logo from '../../images/Logo.png';

import {Form, Button} from 'react-bootstrap';
import './index.scss';

const Login = () => {
  return (
    <div className={"Login"}>
      <img src={Logo} alt="" id={'Logo'}/>
      <div className={"text"}> SIGN INTO MARKETPLACE </div>
      <div>
        <Form className={"Login__Form"}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <div>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;