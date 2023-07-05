import{
  Button,
  Card,
  Form,Container
}  from 'react-bootstrap';
import { useRef, useState,useEffect } from "react";
import "../css/style.css";
import card2 from "../images/logo-main.svg";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


function Register() {

  const navigate = useNavigate();

  const nameField = useRef("");
  const passwordField = useRef("");
  const nimField = useRef("");

  const [errorResponse, setErrorResponse] = useState({
      isError: false,
      message: "",
  });

  const onRegister = async (e) => {
      e.preventDefault();

      try {
          const userToRegisterPayload = {
              name: nameField.current.value,
              nim: nimField.current.value,
              password: passwordField.current.value,
          };

          const registerRequest = await axios.post(
              "http://localhost:3000/api/mahasiswa/register",
              userToRegisterPayload
          );
          console.log(registerRequest)

          const registerResponse = registerRequest;
          console.log(registerResponse)

          if (registerResponse.status) navigate("/login");
      } catch (err) {
          console.log(err);
          const response = err.response.data;

          setErrorResponse({
              isError: true,
              message: response.message,
          });
      }
  };
const colourButton = {
  backgroundColor: '#9fa8da',
  borderRadius: '8px',
  border: '1px solid #9fa8da',
  marginTop:"30px",
  width:"100px",
  height:"30px",
  marginLeft:"40%",
  fontSize:"20px",
  marginRight: "40px",
}

const styleLabel = {
  width:"180px",
  height:"20px",
  borderRadius: '8px',
  border: '1px solid #9fa8da',
}
const styleText = {
  marginLeft: "30px",
}
const styleLink = {
  textDecoration: 'none',
  color: '#000',
  fontWeight: 'bold',
}
const styleContainer = {
  backgroundColor:"#9fa8da",
  height: '600px'
}
const styleLogin = {
  marginLeft:100, 
  marginTop:20
}
;

return (
  <Container className='ms-auto' style={{height:"600px"}}>
  <Card className="card-register">
    <Card.Header className='register-header' as="h5">
    <img
        alt=""
        src={card2}
        width="300px"
        height="150px"
    /></Card.Header>
    <Card.Body>
    <Form onSubmit={onRegister} className=""> 
    <Form.Group className="mb-3" controlId="formBasicName">
      <Form.Label style={styleText}><b>Nama Lengkap</b></Form.Label>
      <Form.Control 
      className='form-name-register' 
      style={styleLabel} 
      type="text" 
      ref={nameField}
      placeholder="siti haryati" />
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="formBasicNim">
      <Form.Label style={styleText}><b>NIM</b></Form.Label>
      <Form.Control 
      className='form-nim-register' 
      style={styleLabel} 
      type="text" 
      ref={nimField}
      placeholder="19560008" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label style={styleText}><b>Password</b></Form.Label>
      <Form.Control 
      className='form-password-register' 
      style={styleLabel} 
      type="password" 
      ref={passwordField}
      placeholder="Password" />
    </Form.Group>
    {/* {errorResponse.isError && (
      <Alert variant="danger">{errorResponse.message}</Alert>
    )} */}
    <Button style={colourButton} variant="primary" type="submit" to="/login">
      <b>Register</b>
    </Button>
    <p className="m-4 text-center" style={styleLogin}>
      Sudah punya akun? <Link style={styleLink} to="/login">Masuk di sini</Link>
    </p>
  </Form>
    </Card.Body>
  </Card>
  </Container>
);
}

export default Register;