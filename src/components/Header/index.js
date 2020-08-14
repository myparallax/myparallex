import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Input,
  NavbarBrand,
  Navbar,
  NavLink,
  Nav,
  Container,
  Modal,
  ModalBody,
} from "reactstrap";
import Auth from "../Auth";
import { IS_LOGGED_IN , query } from "@/services/apollo/query";
import { useQuery } from "@apollo/react-hooks";
import AppContext from "@/components/AppContex";
import { useApolloClient } from '@apollo/client';
// import {gql } from '@apollo/react-hooks' ; 

// const query = gql`
//   query MyTodoAppQuery {
//       isLoggedIn
//   }
// `;

function Header() {
  
  const [collapseOpen, setCollapseOpen] = useState(false);
  const [modalSearch, setModalSearch] = useState(false);
  const { data } = useQuery(IS_LOGGED_IN);
  const [loginOrReagister, setloginOrReagister] = useState(true);

  const [sidebarOpened] = useState(
    document.documentElement.className.indexOf("nav-open") !== -1
  );

  const toggleCollapse = () => setCollapseOpen(!collapseOpen);
  const toggleModalSearch = () => setModalSearch(!modalSearch);

  const  { state, setState } = useContext(AppContext);
  const cache  = useApolloClient();


  const toggleModal = (saidLogin) => {
    setState({ modalIsOpen: !state.modalIsOpen });
    setloginOrReagister(saidLogin);
  };

  const handleLogout = () =>{

    cache.writeQuery({ query,  data: { isLoggedIn: false } });

        localStorage.clear();

  }
  return (
    <>
      <Navbar expand="lg" className="home-navbar">
        <Container fluid>
          <div className="navbar-wrapper">
            <div
              className={`navbar-toggle d-inline ${
                sidebarOpened ? "toggled" : ""
              }`}
            >
              {/* <button
              className="navbar-toggler"
              type="button"
              onClick={toggleSidebar}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button> */}
            </div>
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
            onClick={toggleCollapse}
          >
            <img src={require("@/Assests/menu.svg")} alt="menu" />
          </button>
          <Collapse navbar isOpen={collapseOpen}>
            <Nav className="ml-auto home-nav " navbar>
              <div className="search-bar nav-item">
                <Button
                  color="link"
                  data-target="#searchModal"
                  data-toggle="modal"
                  id="search-button"
                  onClick={toggleModalSearch}
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
              {data.isLoggedIn ? (
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
                        <Link onClick={handleLogout} to="">خروج از حساب</Link>
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
                        toggleModal(false);
                      }}
                    >
                      ثبت نام
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link auth-button-appbar"
                      onClick={() => {
                        toggleModal(true);
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
      <Modal
        modalClassName="modal-search"
        isOpen={modalSearch}
        toggle={toggleModalSearch}
      >
        <div className="modal-header">
          <Input
            id="inlineFormInputGroup"
            placeholder="جستجو ..."
            type="text"
          />
          <button
            aria-label="Close"
            className="blue-btn"
            data-dismiss="modal"
            type="button"
            onClick={toggleModalSearch}
          >
            <img
              className="icon-simple-remove"
              src={require("@/Assests/remove.svg")}
              alt="remove"
            />
          </button>
        </div>
      </Modal>
      {console.log("in return func : ", state.modalIsOpen)}
      <Modal
        isOpen={state.modalIsOpen}
        modalClassName="modal-auth"
        centered
        toggle={toggleModal}
      >
        <ModalBody>
          <Auth login={loginOrReagister} />
        </ModalBody>
      </Modal>
    </>
  );
}
export default Header;
