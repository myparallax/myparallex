import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup } from "reactstrap";
import { LOGIN } from "@/services/apollo/query";
import { useMutation, useApolloClient } from "@apollo/react-hooks";
import AppContex from "@/components/AppContex";
import Swal from "sweetalert2";
import { query } from "@/services/apollo/query";
import TextBox from "../TextBox";
import SocialAccounts from "./SocialAccounts";


export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { state, setState } = useContext(AppContex);
  const client = useApolloClient();
  const [login, { loading }] = useMutation(LOGIN, {
    errorPolicy: "all",
  });

  const submitHandle = async (e) => {
    e.preventDefault();

    login({ variables: { login: username, password: password } }).then(
      (result) => {
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
            console.log("data in Swal :  ");
            localStorage.setItem("token", await result.data.signIn.token);
            client.writeQuery({ query, data: { isLoggedIn: true } });
            setState({ modalIsOpen: !state.modalIsOpen });
          });
        }
      }
    );
  };

  if (loading)
    return (
      <div>
        <p style={{ padding: "50px" }}>Loading...</p>
      </div>
    );

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleUsername = (e) => {
    console.log("e.target.value : ", e.target.value);
    setUsername(e.target.value);
  };

  return (
    <>
      <div className="sign-up">
        <Form className="" onSubmit={submitHandle}>
          <FormGroup>
            <TextBox
              iconSrc={require("@/Assests/icons/user.svg")}
              onChange={handleUsername}
              value={username}
              type="text"
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

            <div className="btn-container">
              <Button type="submit" className="form-button-login">
                ورود
              </Button>
            </div>

            <div className="login-links-container">
              <div className="round">
                <span>{"من را به خاطر بسپار"}</span>
                <input type="checkbox" id="checkbox" />
                <label htmlFor="checkbox"></label>
              </div>
              <div>
                <Link to="" className="forgot-pass">
                  رمز عبور خود را فراموش کرده اید؟
                </Link>
              </div>
            </div>

            <SocialAccounts/>
          </FormGroup>
        </Form>
      </div>
    </>
  );
}
