import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { LOGIN } from "@/services/apollo/query";
import { useMutation, useApolloClient } from "@apollo/react-hooks";
import AppContex from "@/components/AppContex";
import Swal from "sweetalert2";
import {query } from "@/services/apollo/query";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { state, setState } = useContext(AppContex);

  const client = useApolloClient();

  const [login, { loading }] = useMutation(LOGIN, {
    errorPolicy: "all",
  });

  if (loading) return <h2> Loading </h2>;

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
          Swal.fire({
            icon: "success",
            title: "Successfully Signed In !",
          }).then( async () => {

                console.log("data in Swal :  "  ,  ) ;
                localStorage.setItem("token", await  result.data.signIn.token);
                client.writeQuery({ query , data: { isLoggedIn: true } });
                setState({ modalIsOpen: !state.modalIsOpen });
              });;
        }
      }
    );
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  return (
    <>
      <div className="sign-up">
        <Form className="" onSubmit={submitHandle}>
          <FormGroup>
            <div className="inputs-text">
              <img src={require("@/Assests/icons/user.svg")} alt=" " />
              <Label for="username"></Label>
              <Input
                onChange={handleUsername}
                value={username}
                type="text"
                placeholder="نام کاربری"
                name="usernmae"
                className="input-text"
              />
            </div>

            <div className="inputs-text">
              <img src={require("@/Assests/icons/password.svg")} alt=" " />
              <Label for="password"></Label>
              <Input
                onChange={handlePassword}
                type="password"
                placeholder="رمز عبور"
                name="password"
                className="input-text"
              />
            </div>

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

            <div className="social-accounts">
              <div className="base-line"></div>
              <span className="login-text-social">or login with</span>
              <div className="social-icons">
                <button className="icons">
                  <span>Github</span>
                  <img src={require("@/Assests/icons/github.svg")} alt=" " />
                </button>
                <button className="icons">
                  <span>Google</span>
                  <img src={require("@/Assests/icons/google.svg")} alt=" " />
                </button>
              </div>
            </div>
          </FormGroup>
        </Form>
      </div>
    </>
  );
}
