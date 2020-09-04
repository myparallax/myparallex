import React from "react";

function AuthHeader({login , setLogin }) {
  return (
    <>
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
    </>
  );
}

export default AuthHeader;
