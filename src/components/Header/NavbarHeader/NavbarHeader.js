import React from 'react'; 
import HumbergerButton from './HumbergerButton'; 
import Brand from './Brand';
import NavItem from './NavItem'; 
import SearchButton from './SearchButton';
import AfterLoginMenu from './AfterLoginMenu';
import {
    Collapse,
    Navbar,
    Nav,
    Container,
  } from "reactstrap";



function NavbarHeader({sidebarOpened ,toggleCollapse ,collapseOpen,
   toggleModalSearch , data , handleLogout ,toggleModal }){
  
    return <>
    
    <Navbar expand="lg" className="home-navbar">
        <Container fluid>
          
          <Brand sidebarOpened={sidebarOpened}/>

          <HumbergerButton toggleCollapse={toggleCollapse}/>

          <Collapse navbar isOpen={collapseOpen}>
            
            <Nav className="ml-auto home-nav " navbar>
              
              <SearchButton toggleModalSearch={toggleModalSearch}/>

              <NavItem text="مارکت" icon={require("@/Assests/Marketplace Icon.svg")}/>

              <NavItem text="آموزش" icon={require("@/Assests/Groups Icon.svg")}/>
             
              <NavItem text="اکسپلور" icon={require("@/Assests/Quests Icon.svg")}/>
              
              <NavItem text="درباره ما" icon={require("@/Assests/Badges Icon.svg")}/>
              
              {/* Check if the user is logged in or not */}
              {data.isLoggedIn ? (

                <AfterLoginMenu handleLogout={handleLogout}/>

              ) : (
                <div className="auth-links home-navbar-profile">

                  <NavItem text="ثبت نام" dir={true} toggleModal ={toggleModal}/>
                
                  <NavItem text="ورود" dir={true} toggleModal={toggleModal}/>
                 
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
