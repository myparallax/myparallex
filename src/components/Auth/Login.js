import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input , FormText} from 'reactstrap';
import {LOGIN} from '@/services/apollo/query' ; 
import {useMutation , useApolloClient}from '@apollo/react-hooks' ;
import { useState } from 'react';
import { empty } from 'apollo-boost';

export default function Login() {
  

  const [email , setEmail]= useState("") ; 
  const [password , setPassword] = useState(""); 
  const [emailValidate , setEmailValidate] = useState(""); 
  const [passwordValidate , setPasswordValidate] = useState("");
  const [buttonDisabled , setButtonDisabled]= useState(false) ; 

  const client = useApolloClient() ; 

  const [login , {loading , error , data}]  = useMutation(LOGIN , {
    
    onCompleted({login}){
      localStorage.setItem("token" , login ); 
      client.writeData({data:{isLoggedIn : true }}); 

    }
  })

  if(loading ) return <h1> Loading </h1>
  if(error) return <p>an Error occured!</p>

  const submitHandle = e =>{
    e.preventDefault();
    
    login({ variables: { login:email , password:password} });
    
  } 

  const handlePassword = e => {
    const passwordRex =/^(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;
    if (passwordRex.test(e.target.value)) {
      setPasswordValidate("valid")
      setPassword(e.target.value);
    }  
    else if(!passwordRex.test(e.target.value)) setPasswordValidate("invalid");
   
  }
 
  const handleEmail = e =>{ 

    const emailRex =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(e.target.value)) {
      setEmailValidate("valid")
      setEmail(e.target.value)
    }  
    else if(!emailRex.test(e.target.value)) setEmailValidate("invalid");   
  
  }

const focusChecked = e => {
  console.log("in focus")
  setEmailValidate("")  
};

  return (

    <div className="sign-up">
     
      <Form className="" onSubmit={submitHandle}>
       
        <FormGroup>
          
          <div className={`inputs-text ${emailValidate === "invalid" ? "invalid" : ""} ${emailValidate === "valid" ? "valid" : ""}`}>
              <img src={require('@/Assests/icons/email.svg')} alt=" "/>
            <Label for="username"></Label>
            <Input
                onChange = {handleEmail} 
                type="email"
                id="email"
                placeholder="پست الکترونیک"
                name="email"
                onfocus="this.value = this.value;" 
                className="input-text"
                onfocus = {focusChecked}
                trigger="focus"
            />
          </div>
          
          <div className={`inputs-text ${passwordValidate === "invalid" ? "invalid" : ""} ${passwordValidate === "valid" ? "valid" : ""}`}>
            <img src={require('@/Assests/icons/password.svg')} alt=" "/>
            <Label for="password"></Label>
            <Input
                onChange = {handlePassword} 
                type="password"
                placeholder="رمز عبور"
                name="password"
                className="input-text"
                
            />   
          </div>
          <FormText className="formText ">
              رمز شما باید دارای حداقل هشت کاراکتر و یک حرف بزرگ باشد
          </FormText>
         

          <div className="btn-container">
            <Button
            
              type="submit"
              className="form-button-login" 
              // disabled = {if(emailValidate === "valid" && passwordValidate === "valid"){true}}
            >
              ورود
            </Button>
          </div>
         
          <div className="login-links-container">
            <div className="round">
              <span>{'من را به خاطر بسپار'}</span>
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox"></label>
            </div>
            <div>
              <Link to="" className="forgot-pass">
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