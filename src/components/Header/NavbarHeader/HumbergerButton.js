import React from "react";

function HumbergerButton({ toggleCollapse }) {
  return (
    <>
      <button
        aria-expanded={false}
        aria-label="Toggle navigation"
        className="navbar-toggler collapse-btn"
        data-target="#navigation"
        data-toggle="collapse"
        id="navigation"
        type="button"
        onClick={toggleCollapse}>

        <img src={require("@/Assests/menu.svg")} alt="menu" />
      </button>
    </>
  );
}

export default HumbergerButton ; 