import React from "react";
import { Link } from "react-router-dom";

function NavItem({ text, icon, dir = false, toggleModal }) {
  const side = dir;

  return (
    <>
      <li className="nav-item">
        {side ? (
          <button
            className="nav-link auth-button-appbar"
            onClick={() => {
                text === "ثبت نام"? toggleModal(false) : toggleModal(true)
            }}>
                
            {text}
          </button>
        ) : (
          <>
            <img src={icon} className="d-lg-none nav-link-icon" alt="icon" />
            <Link className="nav-link" to="#">
              {text}
            </Link>
          </>
        )}
      </li>
    </>
  );
}

export default NavItem;
