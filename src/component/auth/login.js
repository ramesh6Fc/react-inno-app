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
// User login 
const Login = (props) => {
    const form = useRef();
    const checkBtn = useRef();
  
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
  
  
    const onChangeUsername = (e) => {
      const username = e.target.value;
      setUsername(username);
    };
  
    const onChangePassword = (e) => {
      const password = e.target.value;
      setPassword(password);
    };
  
    const handleLogin = (e) => {
      e.preventDefault();
  
      setMessage("");
      setLoading(true);
  
      form.current.validateAll();
  
      if (checkBtn.current.context._errors.length === 0) {
        Service.login(username, password).then(
          () => {
            props.signedUser(true);
          },
          (error) => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
  
            setLoading(false);
            setMessage(resMessage);
          }
        );
      } else {
        setLoading(false);
      }
    };
  
    return (
      <div className="cards cards-container">
        <Form onSubmit={handleLogin} ref={form}>
          <div className="form-elemt">
            <label htmlFor="username">Username</label>
            <Input
              type="text"
              className="form-input"
              name="username"
              value={username}
              onChange={onChangeUsername}
              validations={[required]}
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
              validations={[required]}
            />
          </div>
  
          <div className="form-elemt">
            <button className="button" disabled={loading} style={{ cursor: 'pointer' }}>
              <span>Sign In</span>
            </button>
          </div>
  
          {message && (
            <div className="form-elemt">
              <div className="alerts alerts-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
        <div style={{ cursor: 'pointer', textAlign: "right", fontSize: '11px' }}><a onClick={props.register} href="!#" style={{color:'#fff'}}>Register</a></div>
      </div>
    );
  };

  export default Login;