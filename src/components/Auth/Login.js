import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {LOGIN} from '@/services/apollo/query' ; 
import {useMutation , useApolloClient}from '@apollo/react-hooks' ;
import { useState } from 'react';

export default function Login() {

  const [username , setUsername]= useState("") ; 
  const [password , setPassword] = useState(""); 

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

    login({ variables: { login:username , password:password} });
    
  } 

  const handlePassword = (e) =>{

    setPassword(e.target.value )

  }

  const handleUsername = (e)=>{
  

    setUsername(e.target.value) 
  
  }

  return (

    <div className="sign-up">
     
      <Form className="" onSubmit={submitHandle}>
       
        <FormGroup>
          <div className="inputs-text">
              <img src={require('@/Assests/icons/user.svg')} alt=" "/>
            <Label for="username"></Label>
            <Input
            
                onChange = {handleUsername} 
                value={username}
                type="text"
                placeholder="نام کاربری"
                name="usernmae"
                className="input-text"
            />
          </div>

          <div className="inputs-text">
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

          <div className="btn-container">
            <Button
            
              type="submit"
              className="form-button-login"
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