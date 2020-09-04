import React, { useState, useContext } from "react";
import { Form, FormGroup } from "reactstrap";
import Swal from "sweetalert2";
import TextBox from "../TextBox";
import SocialAccounts from "./SocialAccounts";
import Submit from "./Submit";

import AppContex from "@/components/AppContex";
import { LOGIN  , query} from "@/services/apollo/query";
import { useMutation, useApolloClient } from "@apollo/client";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { state, setState } = useContext(AppContex);
  const client = useApolloClient();
  const [login, { loading , error}] = useMutation(LOGIN, {
    errorPolicy: "all",
  });

  const submitHandle = async (e) => {
    e.preventDefault();

    login({ variables: { login: email, password: password } })
    .then((result) => {
        if (result.data.signIn == null) {
          const error = result.errors[0].message;
          Swal.fire({
            icon: "error",
            title: "" + error,
          });
        } else {
          const Toast = Swal.mixin({
            toast: true,
            position: "center",
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            onOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });
          Toast.fire({
            icon: "success",
            title: "Signed in successfully",
          }).then(async () => {
            localStorage.setItem("token", await result.data.signIn.token);
            client.writeQuery({ query, data: { isLoggedIn: true } });
            setState({ modalIsOpen: !state.modalIsOpen });
          });
        }
      }
    ).catch(error=>{
      console.log("Internet is disconnected ! "); 
    });
  };

  if (loading)
    return (
      <div>
        <p style={{ padding: "50px" }}>Loading...</p>
      </div>
    );
  if(error){
    return <div> Error...{JSON.stringify(error)} </div>
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <div className="sign-up">
        <Form className="" onSubmit={submitHandle}>
          <FormGroup>
            <TextBox
              iconSrc={require("@/Assests/icons/user.svg")}
              onChange={handleEmail}
              value={email}
              type="email"
              placeholder="نام کاربری"
              name="usernmae"
              className="input-text"
            />

            <TextBox
              iconSrc={require("@/Assests/icons/password.svg")}
              onChange={handlePassword}
              type="password"
              placeholder="رمز عبور"
              name="password"
              className="input-text"
            />
            <Submit />
            <SocialAccounts />
          </FormGroup>
        </Form>
      </div>
    </>
  );
}
