import React, { useState } from "react";
import { Form, FormGroup } from "reactstrap";
import TextBox from "../TextBox";
import Submit from "../Submit";
import SocialAccounts from "../SocialAccounts";
import iconSrc from "@/Assests/icons/email.svg";
import passIconSrc from "@/Assests/icons/password.svg";

 function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = () => {

  };
  const handlePassword = () => {
    
  };

  const textBoxProps = (which) => {
    
    if (which === "email")
      return {
        iconSrc,
        onchange: handleEmail,
        value: email,
        type: "email",
        placeholder: "ایمیل",
        name: "email",
        className: "input-text",
      } 
      return {
        iconSrc: passIconSrc,
        onChange: handlePassword,
        type: "password",
        placeholder: "رمز عبور",
        name: "password",
        className: "input-text",
      }

  };

  return (
     
      <Form className="sign-up">

        <FormGroup>

          <TextBox {...textBoxProps("email")} />

          <TextBox {...textBoxProps("password")} />

          <Submit children="ثبت نام" />

          <SocialAccounts />

        </FormGroup>
      </Form>
  
  );



}

export default SignUp ; 
