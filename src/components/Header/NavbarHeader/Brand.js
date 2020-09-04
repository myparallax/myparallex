import React from "react";
import {NavbarBrand}from 'reactstrap'; 

function Brand({sidebarOpened}) {
  return (
    <>
      <div className="navbar-wrapper">
        <div
          className={`navbar-toggle d-inline ${sidebarOpened ? "toggled" : ""}`}
        ></div>
        <NavbarBrand href="/" onClick={(e) => e.preventDefault()}>
          <img src={require("@/Assests/logo.svg")} alt="logo" />
        </NavbarBrand>
      </div>
    </>
  );
}

export default Brand;
