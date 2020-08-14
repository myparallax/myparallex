import React  from "react";
import { Label, Input } from "reactstrap";

function TextBox(props) {

    const {iconSrc , onChange ,
    value , 
    type , 
    placeholder , 
    name , 
    className} = props ; 

  return (
    <>
      <div className="inputs-text" >
        <img src={iconSrc} alt="parallex img" />
        <Label htmlFor={type==="text" ? "username" : "password" }></Label>
        <Input
        onChange = {onChange} 
        valu={value}
        type={type}
        placeholder={placeholder}
        nam={name}
        className={className}
        />
      </div>
    </>
  );
}

export default TextBox ; 