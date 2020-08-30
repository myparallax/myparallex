import React, { useState } from "react";

import Login from "./Login";
import SignUp from "./SignUp";
import ErrorBoundary from "@/components/Error";

export default function Auth(props) {
  const [login, setLogin] = useState(props.login);

  return (
    <div className="auth-container">
      <div className="auth-btns">
        <button
          onClick={() => setLogin(true)}
          className={`auth-btn-1 ${login ? "active" : ""} `}
        >
          ورود
        </button>
        <button
          onClick={() => setLogin(false)}
          className={`${!login ? "active" : ""} `}
        >
          ثبت نام
        </button>
      </div>

      {login ? (
        <ErrorBoundary>
          <Login />
        </ErrorBoundary>
      ) : (
        <ErrorBoundary>
          <SignUp />
        </ErrorBoundary>
      )}
    </div>
  );
}
