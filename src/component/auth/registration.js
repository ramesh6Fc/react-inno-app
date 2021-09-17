import React, { useState, useRef } from "react";
import Service from "../../service";

// Validation Module
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator"

// Check mandatory field
const required = (value) => {
    if (!value) {
      return (
        <div className="alerts alerts-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };
  
  // Validate the email address
  const validEmail = (value) => {
    if (!isEmail(value)) {
      return (
        <div className="alerts alerts-danger" role="alert">
          This is not a valid email.
        </div>
      );
    }
  };
  
  //Validate the Username
  const validateUsername = (value) => {
    if (value.length < 3 || value.length > 20) {
      return (
        <div className="alerts alerts-danger" role="alert">
          The username must be between 3 and 20 characters.
        </div>
      );
    }
  };
  
  
  //Validate the Passwork
  const validatePassword = (value) => {
    if (value.length < 6 || value.length > 40) {
      return (
        <div className="alerts alerts-danger" role="alert">
          The password must be between 6 and 40 characters.
        </div>
      );
    }
  };
//User registration 
const Register = (props) => {
    const form = useRef();
    const checkBtn = useRef();
  
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");
  
    const onChangeUsername = (e) => {
      const username = e.target.value;
      setUsername(username);
    };
  
    const onChangeEmail = (e) => {
      const email = e.target.value;
      setEmail(email);
    };
  
    const onChangePassword = (e) => {
      const password = e.target.value;
      setPassword(password);
    };
  
    const handleRegister = (e) => {
      e.preventDefault();
  
      setMessage("");
      setSuccessful(false);
  
      form.current.validateAll();
  
      if (checkBtn.current.context._errors.length === 0) {
        Service.register(username, email, password).then(
          (response) => {
            setMessage(response.message);
            setSuccessful(true);
            props.registeredUser();
          },
          (error) => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
  
            setMessage(resMessage);
            setSuccessful(false);
          }
        );
      }
    };
  
    return (
  
      <div className="cards cards-container">
        <Form onSubmit={handleRegister} ref={form}>
          {!successful && (
            <div>
              <div className="form-elemt">
                <label htmlFor="username">Username</label>
                <Input
                  type="text"
                  className="form-input"
                  name="username"
                  value={username}
                  onChange={onChangeUsername}
                  validations={[required, validateUsername]}
                />
              </div>
  
              <div className="form-elemt">
                <label htmlFor="email">Email</label>
                <Input
                  type="text"
                  className="form-input"
                  name="email"
                  value={email}
                  onChange={onChangeEmail}
                  validations={[required, validEmail]}
                />
              </div>
  
              <div className="form-elemt">
                <label htmlFor="password">Password</label>
                <Input
                  type="password"
                  className="form-input"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required, validatePassword]}
                />
              </div>
  
              <div className="form-elemt">
                <button className="button" style={{ cursor: 'pointer' }}>Sign Up</button>
              </div>
            </div>
          )}
  
          {message && (
            <div className="form-elemt">
              <div
                className={successful ? "alerts alerts-success" : "alerts alerts-danger"}
                role="alert"
              >
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
        <div style={{ cursor: 'pointer', textAlign: "right", fontSize: '11px' }}><a onClick={props.login} href="!#"  style={{color:'#fff'}}>Sign In</a></div>
      </div>
  
    );
  };
  
  export default Register;