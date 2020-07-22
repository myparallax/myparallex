import React,{useState} from 'react';

import Login from './Login';
import SignUp from './SingUp'

export default function DisabledTabs() {

  const [login, setLogin] = useState(true);
  
  return (

    <div className="auth-container">

        <div className="auth-btns">
            <button  onClick={() => setLogin(true)} className={`auth-btn-1 ${login ? "active" : "" } `}>ورود</button>
            <button onClick={()=> setLogin(false)} className={`${!login ? "active" : "" } `}>ثبت نام</button> 
        </div>  
       
        {
            login 
            ? <Login />
            : <SignUp />
        }

    </div>
  );
}
