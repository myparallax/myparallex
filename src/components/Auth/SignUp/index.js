import React from "react";
import { Form, FormGroup } from "reactstrap";
import TextBox from "../TextBox";
import Submit from "../Submit";
import SocialAccounts from "../SocialAccounts";
import iconSrc from "@/Assests/icons/email.svg";
import passIconSrc from "@/Assests/icons/password.svg";
import { useForm } from "react-hook-form";

 function SignUp() {

  const { register, handleSubmit } = useForm();

  const onSubmit = data => console.log("data : " , data );


  const textBoxProps = (which) => {
    
    if (which === "email")
      return {
        innerRef:register({required:1}) , 
        iconSrc,
        type: "email",
        placeholder: "ایمیل",
        name: "email",
        className: "input-text",
      } 
      return {
        innerRef : register({required:true}), 
        iconSrc: passIconSrc,
        type: "password",
        placeholder: "رمز عبور",
        name: "password",
        className: "input-text",
      }

  };

  return (
     
      <Form className="sign-up" onSubmit={handleSubmit(onSubmit)}>

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
