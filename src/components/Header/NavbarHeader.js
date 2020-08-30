import React from 'react'; 
import {
    Button,
    Collapse,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    NavbarBrand,
    Navbar,
    NavLink,
    Nav,
    Container,
    
  } from "reactstrap";
  import { Link } from "react-router-dom";


function NavbarHeader(props){
  
    return <>
    
    <Navbar expand="lg" className="home-navbar">
        <Container fluid>
          <div className="navbar-wrapper">
            <div
              className={`navbar-toggle d-inline ${
                props.sidebarOpened ? "toggled" : ""
              }`}
            ></div>
            <NavbarBrand href="/" onClick={(e) => e.preventDefault()}>
              <img src={require("@/Assests/logo.svg")} alt="logo" />
            </NavbarBrand>
          </div>
          <button
            aria-expanded={false}
            aria-label="Toggle navigation"
            className="navbar-toggler collapse-btn"
            data-target="#navigation"
            data-toggle="collapse"
            id="navigation"
            type="button"
            onClick={props.toggleCollapse}
          >
            <img src={require("@/Assests/menu.svg")} alt="menu" />
          </button>
          <Collapse navbar isOpen={props.collapseOpen}>
            <Nav className="ml-auto home-nav " navbar>
              <div className="search-bar nav-item">
                <Button
                  color="link"
                  data-target="#searchModal"
                  data-toggle="modal"
                  id="search-button"
                  onClick={props.toggleModalSearch}
                >
                  <img
                    src={require("@/Assests/search-icon.svg")}
                    alt="search-icon"
                  />
                  <span className="d-lg-none d-md-block nav-link" to="#">
                    جستجو
                  </span>
                </Button>
              </div>

              <li className="nav-item">
                <img
                  src={require("@/Assests/Marketplace Icon.svg")}
                  className="d-lg-none nav-link-icon"
                  alt="marketplace icon"
                />
                <Link className="nav-link" to="#">
                  مارکت
                </Link>
              </li>
              <li className="nav-item">
                <img
                  src={require("@/Assests/Groups Icon.svg")}
                  className="d-lg-none nav-link-icon"
                  alt="group icon"
                />
                <Link className="nav-link" to="#">
                  آموزش
                </Link>
              </li>
              <li className="nav-item">
                <img
                  src={require("@/Assests/Quests Icon.svg")}
                  className="d-lg-none nav-link-icon"
                  alt="quests icon"
                />
                <Link className="nav-link" to="#">
                  اکسپلور
                </Link>
              </li>
              <li className="nav-item">
                <img
                  src={require("@/Assests/Badges Icon.svg")}
                  className="d-lg-none nav-link-icon"
                  alt="badges icon"
                />
                <Link className="nav-link" to="#">
                  درباره ما
                </Link>
              </li>
              {/* Check if the user is logged in or not */}
              {props.data.isLoggedIn ? (
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
                        <Link onClick={props.handleLogout} to="">
                          خروج از حساب
                        </Link>
                      </DropdownItem>
                    </NavLink>
                  </DropdownMenu>
                </UncontrolledDropdown>
              ) : (
                <div className="auth-links home-navbar-profile">
                  <li className="nav-item">
                    <button
                      className="nav-link auth-button-appbar"
                      onClick={() => {
                       props.toggleModal(false);
                      }}
                    >
                      ثبت نام
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link auth-button-appbar"
                      onClick={() => {
                        props.toggleModal(true);
                      }}
                    >
                      ورود
                    </button>
                  </li>
                </div>
              )}

              <li className="separator d-lg-none" />
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    
    
    
    </>
}
export default NavbarHeader; 
