import React, { useState, useContext } from "react";
import { Modal, ModalBody, Input } from "reactstrap";
import Auth from "../Auth";
import { IS_LOGGED_IN, query } from "@/services/apollo/query";
import { useQuery } from "@apollo/react-hooks";
import AppContext from "@/components/AppContex";
import { useApolloClient } from "@apollo/client";
import NavbarHeader from './NavbarHeader'; 

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

  const { state, setState } = useContext(AppContext);
  const cache = useApolloClient();

  const toggleModal = (saidLogin) => {
    
    
    setState({ modalIsOpen: !state.modalIsOpen });
    setloginOrReagister(saidLogin);
  };

  const handleLogout = () => {
    cache.writeQuery({ query, data: { isLoggedIn: false } });

    localStorage.clear();
  };

  const NavbarHeaderProps = {
    data , toggleCollapse , sidebarOpened , toggleModal , handleLogout

  }
  return (
    <>
    
      <NavbarHeader {...NavbarHeaderProps}/>
      
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
