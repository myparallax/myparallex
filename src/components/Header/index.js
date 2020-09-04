import React, { useState, useContext } from "react";
import { IS_LOGGED_IN, query } from "@/services/apollo/query";
import { useQuery } from "@apollo/client";
import AppContext from "@/components/AppContex";
import { useApolloClient } from "@apollo/client";
import NavbarHeader from './NavbarHeader/NavbarHeader'; 
import ModalHeader from './ModalHeader'; 

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
  
  const NavbarHeaderProps = {data , toggleCollapse , sidebarOpened , toggleModal , handleLogout , toggleModalSearch , collapseOpen}
  const ModalHeaderProps = {modalSearch , toggleModalSearch ,state , toggleModal , loginOrReagister  }; 

  return (
    <>
    
      <NavbarHeader {...NavbarHeaderProps}/>

      <ModalHeader {...ModalHeaderProps}/>
    
    </>
  );
}
export default Header;
