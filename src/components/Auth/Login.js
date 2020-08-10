import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

// import icons





export default function Login() {
  
  return (

    <div className="sign-up">
     
      <Form className="" >
       
        <FormGroup>
          <div className="inputs-text">
              <img src={require('@/Assests/icons/user.svg')} alt=" "/>
            <Label for="username"></Label>
            <Input
                type="text"
                id="username"
                placeholder="نام کاربری"
                name="usernmae"
                className="input-text"
            />
          </div>

          <div className="inputs-text">
            <img src={require('@/Assests/icons/password.svg')} alt=" "/>
            <Label for="password"></Label>
            <Input
                type="password"
                id="password"
                placeholder="رمز عبور"
                name="password"
                className="input-text"
            />
          </div>

          <div className="btn-container">
            <Button
              type="submit"
              className="form-button-login"
            >
              ورود
            </Button>
          </div>
         
          <div className="login-links-container">
            <div class="round">
              <span>{'من را به خاطر بسپار'}</span>
              <input type="checkbox" id="checkbox" />
              <label for="checkbox"></label>
            </div>
            <div>
              <Link href="#" className="forgot-pass">
                رمز عبور خود را فراموش کرده اید؟
              </Link>
            </div>
          </div>
          
          <div className="social-accounts">
            <div className="base-line"></div>
            <span className="login-text-social">or login with</span>
            <div className="social-icons">
              <button className="icons">
                <span>Github</span>
                <img src={require('@/Assests/icons/github.svg')} alt=" "/>
              </button>
              <button className="icons">
                <span>Google</span>
                <img src={require('@/Assests/icons/google.svg')} alt=" "/>
              </button>
            </div>
          </div>
          
        </FormGroup>
      </Form>
      
    </div>
  );
}