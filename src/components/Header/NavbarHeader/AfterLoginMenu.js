import React from "react";
import { Link } from "react-router-dom";

import {
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    NavLink,
  } from "reactstrap";

function AfterLoginMenu({handleLogout}) {
  
    return (
    <>
      <UncontrolledDropdown nav className="home-navbar-profile">
        <DropdownToggle
          caret
          color="default"
          data-toggle="dropdown"
          nav
          onClick={(e) => e.preventDefault()}
        >
          <div className="photo">
            <img alt="..." src={require("@/Assests/user.jpg")} />
          </div>
          <b className="caret d-none d-lg-block d-xl-block" />
        </DropdownToggle>

        <DropdownMenu className="dropdown-navbar" right tag="ul">
          <NavLink tag="li">
            <DropdownItem className="nav-itempro">
              <Link to="/dashboard/profile">پروفایل کاربری</Link>
            </DropdownItem>
          </NavLink>
          <NavLink tag="li">
            <DropdownItem className="nav-itempro">
              <Link to="/dashboard/situation">تنظیمات</Link>
            </DropdownItem>
          </NavLink>
          <DropdownItem divider tag="li" />
          <NavLink tag="li">
            <DropdownItem className="nav-itempro">
              <Link onClick={handleLogout} to="">
                خروج از حساب
              </Link>
            </DropdownItem>
          </NavLink>
        </DropdownMenu>
      </UncontrolledDropdown>
    </>
  );
}

export default AfterLoginMenu;
