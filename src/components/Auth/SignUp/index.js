import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function Login() {

  return (
    <div className="sign-up">
      
      <Form className="" >
       
        <FormGroup>
          
          <div className="inputs-text">
              <img src={require('@/Assests/icons/email.svg')} alt=" "/>
            <Label for="username"></Label>
            <Input
                type="email"
                id="email"
                placeholder="پست الکترونیک"
                name="email"
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
           ثبت نام 
            </Button>
          </div>
         
          <div className="container login-links-container">
            <div className="round">
              <span>{'به روزرسانی ها را برای من ارسال کنید'}</span>
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox"></label>
            </div>
            <div className="contact-us">
              برای فعال کردن حساب خود یک ایمیل تائید در صندوق ورودی خود با پیوند دریافت خواهید کرد
               اگر مشکلی دارید
              <Link to="#" variant="body2" style={{fontFamily:'iran-sans' ,fontSize:'10px'}}>
              با ما تماس  
              </Link> بگیرید.
            </div>
          </div>
          
          

          <div className="social-accounts">
            <div className="base-line"></div>
            <span className="login-text-social">or sign up with</span>
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