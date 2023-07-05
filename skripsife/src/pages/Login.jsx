import{
    Button,
    Card,
    Form,Container
}  from 'react-bootstrap';
import { useRef, useState } from "react";
import axios from "axios";
import "../css/style.css";
import card2 from "../images/logo-main.svg";
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const colourButton = {
    backgroundColor: '#9fa8da',
    borderRadius: '8px',
    border: '1px solid #9fa8da',
    marginTop:"30px",
    width:"100px",
    height:"30px",
    marginLeft:"95px",
    fontSize:"20px",
    marginRight: "40px",
  }
  
  const styleLabel = {
    width:"200px",
    height:"20px",
    borderRadius: '8px',
    border: '1px solid #9fa8da',
  }

  const styleLink = {
    textDecoration: 'none',
    color: '#5c6bc0',
    fontWeight: 'bold',
}
const styleContainer = {
  height: '600px'
};

const nimField = useRef("");
const passwordField = useRef("");

const [errorResponse, setErrorResponse] = useState({
    isError: false,
    message: "",
});

const onLogin = async (e) => {
    e.preventDefault();

    try {
        const userToLoginPayload = {
            nim: nimField.current.value,
            password: passwordField.current.value,
        };

        const loginRequest = await axios.post(
            "http://localhost:3000/api/mahasiswa/login",
            userToLoginPayload
        );
        console.log(loginRequest)

        const loginResponse = loginRequest;
        console.log(loginResponse)

        if (loginResponse.status) {
            localStorage.setItem("token", loginResponse.data.token);

            navigate("/home");
        }
    } catch (err) {
        console.log(err);
        const response = err.response.data;

        setErrorResponse({
            isError: true,
            message: response.message,
        });
    }
};

  return (
    <Container style={styleContainer}>
    <Card className="card-login">
      <Card.Header className='login-header' as="h5"><img
          className="photo3"
          alt=""
          src={card2}
          width="250px"
          height="100px"
      /></Card.Header>
      <Card.Body>
      <Form onSubmit={onLogin} className='formlogin'>
      <Form.Group className="mb-3" controlId="formBasicNIM">
        <Form.Label><b>NIM</b></Form.Label>
        <Form.Control 
        className='label-nim' 
        style={styleLabel} 
        type="Masukkan NIM" 
        ref={nimField}
        placeholder="1956008" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label><b>Password</b></Form.Label>
        <Form.Control 
        className='label-password' 
        style={styleLabel} 
        type="password" 
        ref={passwordField}
        placeholder="Password" />
      </Form.Group>
      <Button style={colourButton} variant="primary" type="submit">
        <b>Login</b>
      </Button>
    </Form>
      </Card.Body>
    </Card>
    </Container>
  );
}

export default Login;