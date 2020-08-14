import React from "react";
import { Button  } from "reactstrap";
import {Link} from 'react-router-dom' ; 

function Submit(props) {
  return (
    <>
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
    </>
  );
}

export default Submit ; 
